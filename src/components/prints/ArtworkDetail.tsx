import Image from "next/image";
import Link from "next/link";

import CartLink from "@/components/cart/CartLink";
import ArtworkCard from "@/components/gallery/ArtworkCard";
import PrintGallery from "@/components/prints/PrintGallery";
import ProductConfigurator from "@/components/store/ProductConfigurator";
import type { Artwork } from "@/data/catalog";
import { getAdjacentArtworks, getCollection } from "@/data/catalog";
import { routes } from "@/lib/routes";

type ArtworkDetailProps = {
  artwork: Artwork;
};

export default function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const { previous, next } = getAdjacentArtworks(artwork);

  const related =
    getCollection(artwork.collection)
      ?.artworks.filter(({ slug }) => slug !== artwork.slug)
      .slice(0, 3) ?? [];

  return (
    <main className="min-h-screen bg-[#090D12] text-white">
      <article>
        {/* Artwork introduction */}
        <section className="mx-auto max-w-[1600px] px-6 pb-24 pt-10 sm:px-8 md:pb-32 md:pt-16 lg:px-12">
          <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-[0.3em]">
            <Link
              href={routes.collection(artwork.collection)}
              className="text-[#C9A567] transition-opacity hover:opacity-70"
            >
              ← Back to {artwork.collection}
            </Link>

            <CartLink />
          </div>

          <header className="mx-auto max-w-5xl pb-14 pt-20 text-center md:pb-20 md:pt-28">
            <p className="text-xs uppercase tracking-[0.42em] text-[#D6B36A]">
              Fine art photograph · {artwork.location}
            </p>

            <h1 className="heading mt-7 text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-9xl">
              {artwork.title}
            </h1>

            <div
              aria-hidden="true"
              className="mx-auto mt-10 h-px w-24 bg-[#D6B36A]"
            />

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/65 md:text-xl md:leading-10">
              {artwork.description}
            </p>
          </header>

          <PrintGallery key={artwork.slug} artwork={artwork} />
        </section>

        {/* Story and print configuration */}
        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 py-24 sm:px-8 md:py-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.75fr)] lg:gap-28 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Artist&apos;s note
              </p>

              <h2 className="heading mt-7 text-5xl leading-tight md:text-6xl">
                The Photograph
              </h2>

              <div
                aria-hidden="true"
                className="mt-10 h-px w-24 bg-[#D6B36A]"
              />

              <div className="mt-12 space-y-8 text-lg leading-9 text-white/70 md:text-xl md:leading-10">
                <p>{artwork.description}</p>

                <p>
                  Each LKDWN artwork is edited with a restrained and natural
                  approach, preserving the atmosphere, tonal depth and sense of
                  place experienced when the photograph was made.
                </p>

                <p>
                  The finished photograph is professionally produced using
                  archival pigment inks and museum-quality fine art paper,
                  retaining detail, colour and character for decades.
                </p>
              </div>

              <dl className="mt-16 grid gap-x-10 gap-y-9 border-y border-white/10 py-12 sm:grid-cols-2">
                {[
                  ["Collection", artwork.collection],
                  ["Location", artwork.location],
                  ["Medium", "Fine art photography"],
                  ["Print process", "Museum Giclée"],
                  ["Paper", "Archival fine art paper"],
                  ["Availability", "Produced to order"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-[0.25em] text-white/40">
                      {label}
                    </dt>

                    <dd className="mt-3 text-lg capitalize text-white/80">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside
              aria-label={`Configure ${artwork.title} print`}
              className="self-start border-t border-[#D6B36A] pt-9 lg:sticky lg:top-28"
            >
              <p className="text-xs uppercase tracking-[0.42em] text-[#D6B36A]">
                Collect the artwork
              </p>

              <h2 className="heading mt-6 text-4xl leading-tight md:text-5xl">
                Print Options
              </h2>

              <p className="mt-6 text-base leading-8 text-white/55">
                Choose the size and presentation that best suits your space.
                Every print is produced individually using museum-quality
                materials.
              </p>

              <div className="mt-10">
                <ProductConfigurator artwork={artwork} />
              </div>
            </aside>
          </div>
        </section>

        {/* Related work */}
        {related.length > 0 ? (
          <section
            aria-labelledby="related-artworks-title"
            className="border-t border-white/10"
          >
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Continue exploring
              </p>

              <h2
                id="related-artworks-title"
                className="heading mt-6 text-5xl leading-tight md:text-6xl"
              >
                More From This Collection
              </h2>

              <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedArtwork) => (
                  <ArtworkCard
                    key={relatedArtwork.slug}
                    artwork={relatedArtwork}
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Previous and next */}
        <nav
          aria-label="Adjacent artworks"
          className="border-t border-white/10"
        >
          <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
            {previous ? (
              <Link
                href={routes.artwork(previous.slug)}
                className="group relative block min-h-[28rem] overflow-hidden bg-[#050608] md:min-h-[38rem]"
              >
                <Image
                  src={previous.image}
                  alt={previous.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                <div className="absolute inset-x-8 bottom-10 md:inset-x-12 md:bottom-12">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#D6B36A]">
                    Previous artwork
                  </p>

                  <h3 className="heading mt-5 text-4xl leading-tight md:text-5xl">
                    {previous.title}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/50">
                    {previous.location}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="hidden bg-[#070A0E] md:block" />
            )}

            {next ? (
              <Link
                href={routes.artwork(next.slug)}
                className="group relative block min-h-[28rem] overflow-hidden bg-[#050608] md:min-h-[38rem]"
              >
                <Image
                  src={next.image}
                  alt={next.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                <div className="absolute inset-x-8 bottom-10 text-right md:inset-x-12 md:bottom-12">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#D6B36A]">
                    Next artwork
                  </p>

                  <h3 className="heading mt-5 text-4xl leading-tight md:text-5xl">
                    {next.title}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/50">
                    {next.location}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="hidden bg-[#070A0E] md:block" />
            )}
          </div>
        </nav>
      </article>
    </main>
  );
}