import Link from "next/link";
import Image from "next/image";

export default function RelatedArtworks({
  artworks = [],
  currentSlug,
}) {
  const related = artworks.filter(
    (artwork) => artwork.slug !== currentSlug
  );

  if (!related.length) {
    return null;
  }

  return (
    <section className="mt-40 border-t border-white/10 pt-24">

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Continue Exploring
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight">
            More From This Collection
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/65">
            Every photograph forms part of a wider body of work. Continue
            through the exhibition to discover how changing weather,
            landscape and light connect each piece together.
          </p>

        </div>

      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-3">

        {related.map((artwork, index) => (

          <Link
            key={artwork.slug}
            href={`/product/${artwork.slug}`}
            className="group block"
          >

            <article className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0D1218] transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B36A]/50">

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={artwork.gallery?.[0]}
                  alt={artwork.title}
                  fill
                  sizes="(max-width:1024px)100vw,33vw"
                  className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute left-8 top-8">

                  <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[11px] uppercase tracking-[0.35em] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </div>

              <div className="p-8">

                <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
                  {artwork.collection}
                </p>

                <h3 className="mt-5 font-serif text-3xl leading-tight transition-colors duration-300 group-hover:text-[#D6B36A]">
                  {artwork.title}
                </h3>

                <p className="mt-4 text-white/55">
                  {artwork.location}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                  <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                    Fine Art Print
                  </span>

                  <span className="text-sm font-medium text-[#D6B36A] transition-transform duration-300 group-hover:translate-x-2">
                    View Artwork →
                  </span>

                </div>

              </div>

            </article>

          </Link>

        ))}

      </div>

    </section>
  );
}