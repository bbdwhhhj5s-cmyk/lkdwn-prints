import Link from "next/link";
import Image from "next/image";
import type { Artwork } from "@/data/catalog";
import { getAdjacentArtworks, getCollection } from "@/data/catalog";
import { routes } from "@/lib/routes";
import ProductConfigurator from "@/components/store/ProductConfigurator";
import CartLink from "@/components/cart/CartLink";
import PrintGallery from "@/components/prints/PrintGallery";
import ArtworkCard from "@/components/gallery/ArtworkCard";

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
        <section className="mx-auto max-w-7xl px-8 pb-24 pt-12 md:pt-20">
        <div className="flex items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-[#C9A567]">
          <Link href={routes.collection(artwork.collection)}>
            Back to {artwork.collection}
          </Link>
          <CartLink />
        </div>

        <div className="mt-10 grid items-start gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
          <PrintGallery key={artwork.slug} artwork={artwork} />
          <aside className="overflow-hidden rounded-[36px] border border-white/10 bg-[#0D1218] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] lg:sticky lg:top-12 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A567]">
              Fine art print ·{" "}
              {artwork.location}
            </p>
            <h1 className="heading mt-5 text-5xl text-white md:text-7xl">
              {artwork.title}
            </h1>
            <p className="mt-7 leading-relaxed text-[#9AA4AE]">
              {artwork.description}
            </p>
            <ProductConfigurator artwork={artwork} />
          </aside>
        </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/10 px-8 py-24 md:py-32">
          <div className="grid gap-20 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Exhibition catalogue
              </p>
              <h2 className="heading mt-6 text-5xl md:text-6xl">
                The Photograph
              </h2>
              <div className="mt-12 h-px w-28 bg-[#D6B36A]" />
              <div className="mt-12 space-y-8 text-lg leading-9 text-white/70">
                <p>{artwork.description}</p>
                <p>
                  Each LKDWN artwork is edited with a restrained, natural
                  approach to preserve the atmosphere, tonal depth and sense
                  of place experienced when the photograph was made.
                </p>
                <p>
                  Prints are produced to order using archival pigment inks and
                  museum-quality fine art paper for lasting colour and detail.
                </p>
              </div>
            </div>

            <aside className="rounded-[32px] border border-white/10 bg-[#0D1218] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                Exhibition details
              </p>
              <dl className="mt-10 space-y-8">
                {[
                  ["Collection", artwork.collection],
                  ["Location", artwork.location],
                  ["Medium", "Fine art photography"],
                  ["Print process", "Museum Giclée"],
                  ["Paper", "Archival fine art paper"],
                  ["Availability", "Printed to order"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {label}
                    </dt>
                    <dd className="mt-2 text-lg capitalize text-white/80">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          {related.length > 0 ? (
            <section className="mt-32 border-t border-white/10 pt-24">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Continue exploring
              </p>
              <h2 className="heading mt-5 text-5xl md:text-6xl">
                More From This Collection
              </h2>
              <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((relatedArtwork) => (
                  <ArtworkCard
                    key={relatedArtwork.slug}
                    artwork={relatedArtwork}
                  />
                ))}
              </div>
            </section>
          ) : null}

          <nav
            aria-label="Adjacent artworks"
            className="mt-32 grid gap-8 border-t border-white/10 pt-24 md:grid-cols-2"
          >
            {previous ? (
              <Link
                href={routes.artwork(previous.slug)}
                className="group relative block overflow-hidden rounded-[32px]"
              >
                <div className="relative aspect-[5/4] bg-[#050608]">
                  <Image
                    src={previous.image}
                    alt={previous.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-8 bottom-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">
                      Previous artwork
                    </p>
                    <h3 className="heading mt-4 text-4xl">{previous.title}</h3>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={routes.artwork(next.slug)}
                className="group relative block overflow-hidden rounded-[32px]"
              >
                <div className="relative aspect-[5/4] bg-[#050608]">
                  <Image
                    src={next.image}
                    alt={next.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-[1800ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-8 bottom-8 text-right">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#D6B36A]">
                      Next artwork
                    </p>
                    <h3 className="heading mt-4 text-4xl">{next.title}</h3>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </section>
      </article>
    </main>
  );
}
