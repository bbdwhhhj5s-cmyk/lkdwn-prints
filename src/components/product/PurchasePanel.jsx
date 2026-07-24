"use client";

import { useState } from "react";

export default function PurchasePanel({ product }) {
  const [selectedSize, setSelectedSize] = useState(
    product.printSizes?.[1] || product.printSizes?.[0]
  );

  return (
    <aside className="sticky top-12">

      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0D1218] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

        {/* Header */}

        <div className="border-b border-white/10 p-10">

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Fine Art Print
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-tight text-white">
            {product.title}
          </h1>

          <p className="mt-5 text-lg text-white/60">
            {product.location}
          </p>

        </div>

        {/* Edition */}

        <div className="border-b border-white/10 p-10">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
            Edition
          </p>

          <div className="mt-6">

            <h3 className="font-serif text-2xl text-white">
              {product.edition}
            </h3>

            <p className="mt-4 leading-8 text-white/60">
              Printed individually using archival pigment inks on
              Hahnemühle Photo Rag 308gsm for exceptional longevity,
              colour accuracy and museum-quality presentation.
            </p>

          </div>

        </div>

        {/* Size Selection */}

        <div className="border-b border-white/10 p-10">

          <div className="flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
              Select Print Size
            </p>

            {selectedSize && (
              <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                {selectedSize}
              </span>
            )}

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">

            {product.printSizes.map((size) => (

              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-2xl border px-6 py-5 text-sm uppercase tracking-[0.3em] transition-all duration-300 ${
                  selectedSize === size
                    ? "border-[#D6B36A] bg-[#D6B36A] text-black"
                    : "border-white/10 bg-white/[0.02] text-white hover:border-[#D6B36A]/60 hover:bg-white/[0.04]"
                }`}
              >
                {size}
              </button>

            ))}

          </div>

        </div>

        {/* Specifications */}

        <div className="border-b border-white/10 p-10">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
            Specifications
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between text-white/70">
              <span>Paper</span>
              <span className="text-right">{product.paper}</span>
            </div>

            <div className="flex items-center justify-between text-white/70">
              <span>Print Process</span>
              <span>Museum Giclée</span>
            </div>

            <div className="flex items-center justify-between text-white/70">
              <span>Production</span>
              <span>Made to Order</span>
            </div>

            <div className="flex items-center justify-between text-white/70">
              <span>Dispatch</span>
              <span>3–5 Working Days</span>
            </div>

          </div>

        </div>

        {/* Included */}

        <div className="border-b border-white/10 p-10">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
            Included
          </p>

          <ul className="mt-8 space-y-5 text-white/70">

            <li>✓ Museum-quality archival printing</li>

            <li>✓ Professional colour-managed workflow</li>

            <li>✓ Carefully packaged for safe worldwide shipping</li>

            <li>✓ Certificate of authenticity included</li>

          </ul>

        </div>

        {/* CTA */}

        <div className="p-10">

          <button
            className="
              w-full
              rounded-2xl
              bg-[#D6B36A]
              px-8
              py-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-black
              transition-all
              duration-300
              hover:brightness-105
              hover:shadow-[0_0_30px_rgba(214,179,106,0.35)]
            "
          >
            Add to Collection
          </button>

          <button
            className="
              mt-5
              w-full
              rounded-2xl
              border
              border-white/10
              px-8
              py-5
              text-sm
              uppercase
              tracking-[0.35em]
              text-white
              transition-all
              duration-300
              hover:border-[#D6B36A]
              hover:bg-white/[0.03]
            "
          >
            Framing Information
          </button>

          <p className="mt-8 text-center text-sm leading-7 text-white/45">
            Every print is produced individually to maintain the highest
            standards of craftsmanship, colour accuracy and archival quality.
          </p>

        </div>

      </div>

    </aside>
  );
}