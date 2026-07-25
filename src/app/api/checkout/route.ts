import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getArtwork } from "@/data/catalog";
import {
  calculateShipping,
  calculateSubtotal,
  frameOptions,
  getFrame,
  getPrintSize,
  getUnitPrice,
  isFrameAvailableForSize,
  printSizes,
  type CartItem,
  type FrameId,
  type PrintSizeId,
} from "@/lib/store";

const validSizes = new Set<PrintSizeId>(printSizes.map(({ id }) => id));
const validFrames = new Set<FrameId>(frameOptions.map(({ id }) => id));

function validateItems(value: unknown): CartItem[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > 20) {
    throw new Error("Your cart must contain between 1 and 20 items.");
  }

  return value.map((item) => {
    if (
      !item ||
      typeof item !== "object" ||
      typeof item.artworkSlug !== "string" ||
      !getArtwork(item.artworkSlug) ||
      !validSizes.has(item.size) ||
      !validFrames.has(item.frame) ||
      !isFrameAvailableForSize(item.size, item.frame) ||
      !Number.isInteger(item.quantity) ||
      item.quantity < 1 ||
      item.quantity > 10
    ) {
      throw new Error("Your cart contains an invalid item.");
    }

    const artwork = getArtwork(item.artworkSlug)!;
    return {
      id: `${artwork.slug}:${item.size}:${item.frame}`,
      artworkSlug: artwork.slug,
      title: artwork.title,
      image: artwork.image,
      size: item.size,
      frame: item.frame,
      quantity: item.quantity,
    };
  });
}

export async function POST(request: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Checkout is not configured yet. Please contact the studio." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const items = validateItems(body.items);
    const subtotal = calculateSubtotal(items);
    const shipping = calculateShipping(subtotal);
    const origin = new URL(request.url).origin;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      customer_creation: "always",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      line_items: items.map((item) => {
        const artwork = getArtwork(item.artworkSlug)!;
        const size = getPrintSize(item.size)!;
        const frame = getFrame(item.frame)!;

        return {
          quantity: item.quantity,
          price_data: {
            currency: "gbp",
            unit_amount: getUnitPrice(item.size, item.frame),
            product_data: {
              name: artwork.title,
              description: `${size.label} (${size.dimensions}) · ${frame.label}`,
              metadata: {
                artwork_slug: artwork.slug,
                print_size: size.id,
                frame: frame.id,
              },
            },
          },
        };
      }),
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: shipping === 0 ? "Free UK shipping" : "Tracked UK shipping",
            fixed_amount: {
              currency: "gbp",
              amount: shipping,
            },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
          },
        },
      ],
      metadata: {
        cart: items
          .map(({ artworkSlug, size, frame, quantity }) =>
            [artworkSlug, size, frame, quantity].join(":"),
          )
          .join("|")
          .slice(0, 500),
      },
      success_url: `${origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Checkout could not be started.",
      },
      { status: 400 },
    );
  }
}
