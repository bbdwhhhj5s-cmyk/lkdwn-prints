"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartLink() {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" aria-label={`Shopping cart with ${itemCount} items`}>
      Cart{itemCount > 0 ? ` (${itemCount})` : ""}
    </Link>
  );
}
