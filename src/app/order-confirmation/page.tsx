import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import ClearCart from "@/components/cart/ClearCart";
import { formatPrice } from "@/lib/store";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Order Confirmation",
  alternates: { canonical: "/order-confirmation" },
  robots: { index: false, follow: false },
};

type ConfirmationPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function OrderConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const { session_id: sessionId } = await searchParams;
  let session: Stripe.Checkout.Session | null = null;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items"],
      });
    } catch {
      session = null;
    }
  }

  const confirmed = session?.payment_status === "paid";

  return (
    <main className="flex min-h-screen items-center bg-[#07131C] px-8 py-20 text-white">
      <div className="mx-auto w-full max-w-2xl border border-white/10 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#C9A567]">
          {confirmed ? "Order confirmed" : "Order status"}
        </p>
        <h1 className="heading mt-6 text-5xl md:text-6xl">
          {confirmed ? "Thank you." : "We could not verify this order."}
        </h1>

        {confirmed && session ? (
          <>
            <ClearCart />
            <p className="mt-6 leading-relaxed text-[#9AA4AE]">
              Your payment has been received. A receipt has been sent to{" "}
              {session.customer_details?.email ?? "your email address"}.
            </p>
            <dl className="mt-9 space-y-4 border-y border-white/10 py-7">
              {session.line_items?.data.map((item) => (
                <div key={item.id} className="flex justify-between gap-6">
                  <dt>
                    {item.description} × {item.quantity}
                  </dt>
                  <dd>{formatPrice(item.amount_total)}</dd>
                </div>
              ))}
              <div className="flex justify-between border-t border-white/10 pt-4">
                <dt>Total paid</dt>
                <dd>{formatPrice(session.amount_total ?? 0)}</dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="mt-6 leading-relaxed text-[#9AA4AE]">
            No completed Stripe payment was found. Your cart has been preserved;
            return to it to try again.
          </p>
        )}

        <Link
          href={confirmed ? routes.collections : routes.cart}
          className="mt-9 inline-block border border-[#D6B36A] px-8 py-4 uppercase tracking-[0.25em] text-[#D6B36A]"
        >
          {confirmed ? "Return to collections" : "Return to cart"}
        </Link>
      </div>
    </main>
  );
}
