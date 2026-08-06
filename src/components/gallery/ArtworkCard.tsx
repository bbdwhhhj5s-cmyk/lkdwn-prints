import Image from "next/image";
import Link from "next/link";

import type { Artwork } from "@/data/catalog";
import { routes } from "@/lib/routes";

type ArtworkCardProps = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  const aspectClass =
    artwork.orientation === "portrait"
      ? "aspect-[4/5]"
      : "aspect-[3/2]";

  return (
    <article>
      <Link
        href={routes.artwork(artwork.slug)}
        aria-label={`View ${artwork.title}, photographed in ${artwork.location}`}
        className="group block"
      >
        <div
          className={`relative overflow-hidden bg-[#0D1218] ${aspectClass}`}
        >
          <Image
            src={artwork.image}
            alt={artwork.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 46vw"
            className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.025]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10"
          />

          <span className="absolute bottom-6 right-6 translate-y-2 text-xs uppercase tracking-[0.28em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View artwork →
          </span>
        </div>

        <div className="border-b border-white/10 pb-7 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="heading text-3xl leading-none text-white transition-colors duration-300 group-hover:text-[#D6B36A] md:text-4xl">
              {artwork.title}
            </h3>

            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              {artwork.location}
            </p>
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/35">
            Fine art photograph
          </p>
        </div>
      </Link>
    </article>
  );
}