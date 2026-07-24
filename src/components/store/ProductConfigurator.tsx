"use client";

import { useState } from "react";
import type { Artwork } from "@/data/catalog";
import { useCart } from "@/components/cart/CartProvider";
import Link from "next/link";
import { routes } from "@/lib/routes";
import {
  formatPrice,
  frameOptions,
  getCartItemId,
  getUnitPrice,
  printSizes,
  type FrameId,
  type PrintSizeId,
} from "@/lib/store";

export default function ProductConfigurator({ artwork }: { artwork: Artwork }) {
  const [size, setSize] = useState<PrintSizeId>("a3");
  const [frame, setFrame] = useState<FrameId>("unframed");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: getCartItemId(artwork.slug, size, frame),
      artworkSlug: artwork.slug,
      title: artwork.title,
      image: artwork.image,
      size,
      frame,
      quantity: 1,
    });
    setAdded(true);
  };

  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.25em] text-[#C9A567]">
          Print size
        </legend>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {printSizes.map((option) => (
            <label
              key={option.id}
              className={`cursor-pointer border p-3 text-center ${
                size === option.id
                  ? "border-[#D6B36A] text-[#D6B36A]"
                  : "border-white/20 text-white"
              }`}
            >
              <input
                type="radio"
                name="size"
                value={option.id}
                checked={size === option.id}
                onChange={() => setSize(option.id)}
                className="sr-only"
              />
              <span className="block">{option.label}</span>
              <span className="mt-1 block text-[10px] text-[#9AA4AE]">
                {option.dimensions}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-7 block text-xs uppercase tracking-[0.25em] text-[#C9A567]">
        Frame
        <select
          value={frame}
          onChange={(event) => setFrame(event.target.value as FrameId)}
          className="mt-3 w-full border border-white/20 bg-[#07131C] p-4 text-base normal-case tracking-normal text-white"
        >
          {frameOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
              {option.price ? ` (+${formatPrice(option.price)})` : ""}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-7 w-full border border-[#D6B36A] px-8 py-4 uppercase tracking-[0.25em] text-[#D6B36A] transition hover:bg-[#D6B36A] hover:text-black"
      >
        Add to cart · {formatPrice(getUnitPrice(size, frame))}
      </button>
      <p aria-live="polite" className="mt-3 min-h-6 text-sm text-[#9AA4AE]">
        {added ? (
          <>
            Added to your cart.{" "}
            <Link href={routes.cart} className="text-[#C9A567] underline">
              View cart
            </Link>
          </>
        ) : (
          "Free UK shipping over £150."
        )}
      </p>
    </div>
  );
}
