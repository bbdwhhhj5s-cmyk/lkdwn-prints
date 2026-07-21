import Image from "next/image";

export default function EditorialImage({
  src,
  alt,
  caption,
  align = "center",
  height = "large",
}) {
  const heights = {
    hero: "h-[92vh]",
    large: "h-[78vh]",
    medium: "h-[64vh]",
    portrait: "h-[82vh]",
  };

  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <figure>

        <div
          className={`relative overflow-hidden rounded-3xl ${
            heights[height] ?? heights.large
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={false}
            className="object-cover transition duration-700 hover:scale-[1.015]"
          />
        </div>

        {caption && (
          <figcaption
            className={`mt-6 text-sm uppercase tracking-[0.3em] text-white/40 ${
              align === "right"
                ? "text-right"
                : align === "left"
                ? "text-left"
                : "text-center"
            }`}
          >
            {caption}
          </figcaption>
        )}

      </figure>

    </section>
  );
}