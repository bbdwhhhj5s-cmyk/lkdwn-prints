"use client";

import { useEffect } from "react";
import { CART_STORAGE_KEY, useCart } from "./CartProvider";

export default function ClearCart() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Stripe returns through a full page load, so remove persisted state before
    // a pending provider hydration can restore the completed order.
    window.localStorage.removeItem(CART_STORAGE_KEY);
    clearCart();
  }, [clearCart]);

  return null;
}
