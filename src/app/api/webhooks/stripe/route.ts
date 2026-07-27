import { NextResponse } from "next/server";
import Stripe from "stripe";
import { fulfilStripeSession } from "@/lib/fulfilment";
import { sendOrderConfirmationEmail } from "@/lib/order-confirmation-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook is not configured." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature." },
      { status: 400 },
    );
  }

  const stripe = new Stripe(stripeKey);
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      webhookSecret,
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid Stripe signature." },
      { status: 400 },
    );
  }

  if (
    event.type !== "checkout.session.completed" &&
    event.type !== "checkout.session.async_payment_succeeded"
  ) {
    return NextResponse.json({ received: true });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;
    const order =
      process.env.GELATO_ENABLED === "true"
        ? await fulfilStripeSession(stripe, session.id)
        : null;
    const email = await sendOrderConfirmationEmail(stripe, session.id);

    return NextResponse.json({
      received: true,
      fulfilment:
        process.env.GELATO_ENABLED === "true"
          ? order
            ? "submitted"
            : "payment_pending"
          : "disabled",
      gelatoOrderId: order?.id ?? null,
      email,
    });
  } catch (error) {
    console.error(
      "Post-payment processing failed:",
      error instanceof Error ? error.message : "Unknown processing error",
    );

    return NextResponse.json(
      { error: "Post-payment processing failed. Stripe will retry this event." },
      { status: 500 },
    );
  }
}
