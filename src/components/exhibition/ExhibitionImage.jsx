"use client";

import ImageDetails from "./ImageDetails";

export default function ExhibitionImage({
  image,
  number,
  title,
  location,
  description,
  medium,
  printSizes,
  slug,
}) {
  return (
    <>
      <section className="bg-[#090D12]">
        <div className="relative group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[92vh]
              object-cover
              transition-transform
              duration-[2200ms]
              ease-out
              group-hover:scale-[1.02]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full">
            <div className="max-w-7xl mx-auto px-10 pb-24">
              <p className="text-[#D6B36A] tracking-[0.45em] uppercase text-xs mb-5">
                {number}
              </p>

              <h2 className="font-serif text-5xl lg:text-7xl text-white mb-5">
                {title}
              </h2>

              <p className="uppercase tracking-[0.35em] text-sm text-white/60">
                {location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageDetails
        number={number}
        title={title}
        location={location}
        description={description}
        medium={medium}
        printSizes={printSizes}
        slug={slug}
      />
    </>
  );
}