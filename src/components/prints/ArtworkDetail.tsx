import Link from "next/link";
import type { Artwork } from "@/data/catalog";
import { getAdjacentArtworks } from "@/data/catalog";
import { routes } from "@/lib/routes";

type ArtworkDetailProps = {
  artwork: Artwork;
};

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const { previous, next } = getAdjacentArtworks(artwork);

  return (
    <main className="min-h-screen bg-[#07131C] px-8 pb-20 pt-32">
      <article className="mx-auto max-w-7xl">
        <Link
          href={routes.collection(artwork.collection)}
          className="text-xs uppercase tracking-[0.3em] text-[#C9A567]"
        >
          Back to {artwork.collection}
        </Link>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)]">
          <img
            src={artwork.image}
            alt={artwork.alt}
            className="h-auto w-full object-contain"
          />
          <div className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A567]">
              {artwork.location}
            </p>
            <h1 className="heading mt-5 text-5xl text-white md:text-7xl">
              {artwork.title}
            </h1>
            <p className="mt-7 leading-relaxed text-[#9AA4AE]">
              Museum-quality fine art photography, produced for the LKDWN Prints
              collection.
            </p>
          </div>
        </div>

        <nav
          aria-label="Adjacent artworks"
          className="mt-16 flex justify-between border-t border-white/10 pt-8"
        >
          {previous ? (
            <Link href={routes.artwork(previous.slug)} className="text-[#C9A567]">
              ← {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={routes.artwork(next.slug)} className="text-[#C9A567]">
              {next.title} →
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
