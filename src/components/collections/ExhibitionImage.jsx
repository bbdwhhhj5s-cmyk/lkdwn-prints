"use client";

import { useState } from "react";

export default function ExhibitionImage({
  number,
  title,
  location,
  image,
  description,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="bg-[#0B1016] text-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        {/* Number */}

        <div className="mb-8">

          <span className="text-[#B8965A] tracking-[0.45em] uppercase text-xs">
            {number}
          </span>

        </div>

        {/* Image */}

        <div className="overflow-hidden rounded-sm bg-[#090D12]">

          <img
            src={image}
            alt={title}
            onLoad={() => setLoaded(true)}
            className={`
              w-full
              h-auto
              object-cover
              duration-[1800ms]
              ease-out
              transition-all
              hover:scale-[1.015]
              ${loaded ? "opacity-100" : "opacity-0 scale-105"}
            `}
          />

        </div>

        {/* Caption */}

        <div className="grid lg:grid-cols-[1fr_420px] gap-24 mt-14">

          <div>

            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-none">
              {title}
            </h2>

            <p className="mt-4 uppercase tracking-[0.35em] text-[#B8965A] text-xs">
              {location}
            </p>

          </div>

          <div>

            <p className="text-[#CFCFCF] leading-9 text-lg">
              {description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}