"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import {
  calculateShipping,
  calculateSubtotal,
  formatPrice,
  getFrame,
  getPrintSize,
  getUnitPrice,
} from "@/lib/store";
import { routes } from "@/lib/routes";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();
  const [checkoutError, setCheckoutError] = useState("");
  const [checkingOut, setCheckingOut] = useState(false);
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);

  const checkout = async () => {
    setCheckingOut(true);
    setCheckoutError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const result = await response.json();

      if (!response.ok || !result.url) {
        throw new Error(result.error ?? "Checkout could not be started.");
      }

      window.location.assign(result.url);
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Checkout could not be started.",
      );
      setCheckingOut(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#07131C] px-8 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href={routes.collections} className="text-sm text-[#C9A567]">
          ← Continue browsing
        </Link>
        <h1 className="heading mt-8 text-6xl">Your cart</h1>

        {items.length === 0 ? (
          <div className="mt-12 border-t border-white/10 py-12">
            <p className="text-[#9AA4AE]">Your cart is empty.</p>
            <Link
              href={routes.collections}
              className="mt-7 inline-block border border-[#D6B36A] px-8 py-4 uppercase tracking-[0.25em] text-[#D6B36A]"
            >
              Explore prints
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_22rem]">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {items.map((item) => (
                <article key={item.id} className="grid grid-cols-[7rem_1fr] gap-6 py-7">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#102632]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between gap-5">
                      <div>
                        <h2 className="heading text-2xl">{item.title}</h2>
                        <p className="mt-2 text-sm text-[#9AA4AE]">
                          {getPrintSize(item.size)?.label} · {getFrame(item.frame)?.label}
                        </p>
                      </div>
                      <p>{formatPrice(getUnitPrice(item.size, item.frame) * item.quantity)}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-5">
                      <label className="text-sm text-[#9AA4AE]">
                        Quantity{" "}
                        <select
                          value={item.quantity}
                          onChange={(event) =>
                            updateQuantity(item.id, Number(event.target.value))
                          }
                          className="ml-2 border border-white/20 bg-[#07131C] px-3 py-2 text-white"
                        >
                          {Array.from({ length: 10 }, (_, index) => index + 1).map(
                            (quantity) => (
                              <option key={quantity}>{quantity}</option>
                            ),
                          )}
                        </select>
                      </label>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-[#C9A567] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit border border-white/10 p-7 lg:sticky lg:top-8">
              <h2 className="heading text-3xl">Order summary</h2>
              <dl className="mt-7 space-y-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[#9AA4AE]">Subtotal</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#9AA4AE]">UK shipping</dt>
                  <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-4 text-base">
                  <dt>Total</dt>
                  <dd>{formatPrice(subtotal + shipping)}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={checkout}
                disabled={checkingOut}
                className="mt-7 w-full border border-[#D6B36A] px-6 py-4 uppercase tracking-[0.2em] text-[#D6B36A] transition hover:bg-[#D6B36A] hover:text-black disabled:cursor-wait disabled:opacity-60"
              >
                {checkingOut ? "Opening checkout…" : "Secure checkout"}
              </button>
              <p className="mt-4 text-xs leading-relaxed text-[#9AA4AE]">
                Shipping is calculated from this order and confirmed in Stripe
                Checkout.
              </p>
              {checkoutError ? (
                <p role="alert" className="mt-4 text-sm text-red-300">
                  {checkoutError}
                </p>
              ) : null}
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
