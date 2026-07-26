import { NextResponse } from "next/server";
import Stripe from "stripe";
import { fulfilStripeSession } from "@/lib/fulfilment";

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

  if (process.env.GELATO_ENABLED !== "true") {
    return NextResponse.json({ received: true, fulfilment: "disabled" });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;
    const order = await fulfilStripeSession(stripe, session.id);

    return NextResponse.json({
      received: true,
      fulfilment: order ? "submitted" : "payment_pending",
      gelatoOrderId: order?.id ?? null,
    });
  } catch (error) {
    console.error(
      "Gelato fulfilment failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return NextResponse.json(
      { error: "Gelato fulfilment failed. Stripe will retry this event." },
      { status: 500 },
    );
  }
}
