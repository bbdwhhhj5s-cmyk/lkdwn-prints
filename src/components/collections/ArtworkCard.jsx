import Image from "next/image";
import Link from "next/link";

export default function ArtworkCard({ artwork }) {
  if (!artwork) return null;

  const image =
    artwork.gallery?.[0] ||
    artwork.image ||
    artwork.hero ||
    "/images/home/placeholder.jpg";

  return (
    <Link
      href={`/product/${artwork.slug}`}
      className="group block"
    >
      <article>

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#05080D]">

          <Image
            src={image}
            alt={artwork.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute left-8 top-8">

            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              {artwork.number || ""}
            </p>

          </div>

        </div>

        <div className="pt-8">

          <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
            {artwork.location}
          </p>

          <h3 className="mt-4 font-serif text-4xl leading-tight transition-colors duration-500 group-hover:text-[#D6B36A]">
            {artwork.title}
          </h3>

          <p className="mt-6 line-clamp-3 text-lg leading-8 text-white/65">
            {artwork.description}
          </p>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

            <span className="text-xs uppercase tracking-[0.35em] text-white/40">
              Fine Art Print
            </span>

            <span className="text-sm uppercase tracking-[0.35em] text-[#D6B36A] transition-transform duration-500 group-hover:translate-x-2">
              View Artwork →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}