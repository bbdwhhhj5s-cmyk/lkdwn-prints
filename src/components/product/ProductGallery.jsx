"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images = [],
  title,
}) {
  const [active, setActive] = useState(0);

  const currentImage =
    images[active] || images[0] || "/images/placeholder.jpg";

  return (
    <section>

      {/* Main Artwork */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black">

        <div className="relative aspect-[4/5]">

          <Image
            key={currentImage}
            src={currentImage}
            alt={title}
            fill
            priority
            sizes="(max-width:1024px)100vw,65vw"
            className="object-cover transition-all duration-700 ease-out hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Artwork Number */}

          <div className="absolute left-8 top-8">

            <span className="rounded-full border border-white/20 bg-black/40 px-5 py-2 text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>

          </div>

        </div>

      </div>

      {/* Caption */}

      <div className="mt-8 flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <h2 className="font-serif text-3xl">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl text-white/60">
            Museum-quality archival print produced using Hahnemühle Photo
            Rag 308gsm and pigment inks for exceptional tonal depth and
            longevity.
          </p>

        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
          Exhibition Print
        </p>

      </div>

      {/* Thumbnails */}

      {images.length > 1 && (

        <div className="mt-10 grid grid-cols-5 gap-4">

          {images.map((image, index) => (

            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`group relative aspect-square overflow-hidden rounded-2xl border transition-all duration-300 ${
                active === index
                  ? "border-[#D6B36A]"
                  : "border-white/10 hover:border-white/40"
              }`}
            >

              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                sizes="120px"
                className={`object-cover transition-all duration-500 ${
                  active === index
                    ? "scale-105"
                    : "group-hover:scale-105"
                }`}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  active === index
                    ? "bg-transparent"
                    : "bg-black/25"
                }`}
              />

            </button>

          ))}

        </div>

      )}

    </section>
  );
}