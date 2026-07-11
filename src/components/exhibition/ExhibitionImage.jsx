"use client";

export default function ExhibitionImage({
  image,
  number,
  title,
  location,
  description,
  layout = "full",
}) {
  const heights = {
    full: "h-[92vh]",
    editorial: "h-[75vh]",
    panorama: "h-[60vh]",
  };

  return (
    <section className="bg-[#090D12] py-16">

      <div
        className={`
          relative
          group
          overflow-hidden
          ${
            layout === "editorial"
              ? "max-w-6xl mx-auto px-8"
              : ""
          }
        `}
      >

        <img
          src={image}
          alt={title}
          className={`
            w-full
            ${heights[layout]}
            object-cover
            transition-transform
            duration-[2500ms]
            ease-out
            group-hover:scale-[1.03]
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full">

          <div className="max-w-7xl mx-auto px-10 pb-16">

            <p className="text-[#B8965A] uppercase tracking-[0.45em] text-xs mb-4">
              {number}
            </p>

            <h2 className="text-5xl lg:text-7xl font-light mb-3">
              {title}
            </h2>

            <p className="uppercase tracking-[0.35em] text-sm text-white/60 mb-8">
              {location}
            </p>

            <p className="max-w-2xl text-lg leading-9 text-white/80">
              {description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}