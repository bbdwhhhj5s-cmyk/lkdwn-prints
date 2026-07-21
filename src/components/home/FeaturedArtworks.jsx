import Image from "next/image";
import Link from "next/link";

const artworks = [
  {
    slug: "buachaille-etive-mor",
    title: "Buachaille Etive Mòr",
    location: "Glencoe",
    image: "/images/scotland/glencoe.jpg",
    size: "large",
  },
  {
    slug: "buachaille-etive-mor",
    title: "Morning Light",
    location: "Scottish Highlands",
    image: "/images/scotland/scotland-8.jpg",
    size: "small",
  },
  {
    slug: "buachaille-etive-mor",
    title: "The Road North",
    location: "Scotland",
    image: "/images/scotland/scotland-14.jpg",
    size: "small",
  },
  {
    slug: "buachaille-etive-mor",
    title: "Misty Glen",
    location: "Glencoe",
    image: "/images/scotland/scotland-21.jpg",
    size: "wide",
  },
  {
    slug: "buachaille-etive-mor",
    title: "Evening Light",
    location: "Highlands",
    image: "/images/scotland/scotland-25.jpg",
    size: "small",
  },
  {
    slug: "buachaille-etive-mor",
    title: "Across the Moor",
    location: "Scotland",
    image: "/images/scotland/scotland-29.jpg",
    size: "small",
  },
];

export default function FeaturedArtworks() {
  return (
    <section className="py-36">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20">

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Selected Works
          </p>

          <h2 className="mt-6 font-serif text-6xl">
            Exhibition Highlights
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {artworks.map((artwork) => (

            <Link
              key={artwork.image}
              href={`/product/${artwork.slug}`}
              className={`group overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1218]
                ${
                  artwork.size === "large"
                    ? "md:row-span-2"
                    : ""
                }
                ${
                  artwork.size === "wide"
                    ? "md:col-span-2"
                    : ""
                }`}
            >

              <div
                className={`relative
                ${
                  artwork.size === "large"
                    ? "aspect-[4/6]"
                    : artwork.size === "wide"
                    ? "aspect-[16/8]"
                    : "aspect-[4/5]"
                }`}
              >

                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                <div className="absolute bottom-8 left-8">

                  <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                    {artwork.location}
                  </p>

                  <h3 className="mt-4 font-serif text-4xl">
                    {artwork.title}
                  </h3>

                  <p className="mt-5 text-sm uppercase tracking-[0.35em] text-white/70 transition-all duration-300 group-hover:text-[#D6B36A]">
                    View Artwork →
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}