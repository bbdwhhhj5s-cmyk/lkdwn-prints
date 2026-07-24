"use client";

import Link from "next/link";

export default function ImageDetails({
  number,
  title,
  location,
  description,
  medium = "Fine Art Giclée Print",
  printSizes = ["A4", "A3", "A2", "A1"],
  slug,
}) {
  return (
    <section className="bg-[#090D12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-28">
        <div className="grid lg:grid-cols-12 gap-20">

          <div className="lg:col-span-2">
            <p className="uppercase tracking-[0.45em] text-[#D6B36A] text-xs mb-4">
              Plate
            </p>

            <p className="font-serif text-5xl text-white">
              {number}
            </p>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl lg:text-6xl text-white mb-5 leading-tight">
              {title}
            </h2>

            <p className="uppercase tracking-[0.40em] text-white/50 text-sm mb-10">
              {location}
            </p>

            <p className="text-white/70 text-lg leading-9">
              {description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/10 p-10">

              <p className="uppercase tracking-[0.35em] text-[#D6B36A] text-xs mb-6">
                Print Specification
              </p>

              <div className="space-y-4 text-white/70">
                <p>{medium}</p>
                <p>Archival Pigment Inks</p>
                <p>Museum Quality Paper</p>
                <p>Open Edition</p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {printSizes.map((size) => (
                  <span
                    key={size}
                    className="border border-white/20 px-4 py-2 text-sm text-white"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {slug ? (
                <Link
                  href={`/print/${slug}`}
                  className="inline-flex mt-12 border border-[#D6B36A] px-8 py-4 uppercase tracking-[0.25em] text-xs text-[#D6B36A] transition-all duration-500 hover:bg-[#D6B36A] hover:text-[#090D12]"
                >
                  View Print
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-12 border border-white/20 px-8 py-4 uppercase tracking-[0.25em] text-xs text-white/40 cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}