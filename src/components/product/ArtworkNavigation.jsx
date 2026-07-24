import Link from "next/link";
import Image from "next/image";

export default function ArtworkNavigation({
  previous,
  next,
  collection,
}) {
  const collectionSlug = collection.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="mt-40 border-t border-white/10 pt-28">

      {/* Header */}

      <div className="mx-auto mb-20 max-w-4xl text-center">

        <p className="text-xs font-medium uppercase tracking-[0.5em] text-[#D6B36A]">
          Continue the Exhibition
        </p>

        <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
          Discover the Next Photograph
        </h2>

        <p className="mt-8 text-lg leading-9 text-white/65">
          Every photograph belongs to a wider body of work. Continue
          through the collection and experience how light, weather and
          landscape evolve from one image to the next.
        </p>

      </div>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Previous Artwork */}

        {previous ? (

          <Link
            href={`/print/${previous.slug}`}
            className="group relative block overflow-hidden rounded-[40px]"
          >

            <div className="relative aspect-[5/4] bg-[#050608]">

              <Image
                src={previous.gallery[0]}
                alt={previous.title}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#D6B36A]/70" />

              <div className="absolute left-10 top-10">

                <span className="rounded-full border border-white/20 bg-black/40 px-5 py-2 text-[11px] uppercase tracking-[0.35em] backdrop-blur-md">

                  Previous Artwork

                </span>

              </div>

              <div className="absolute bottom-10 left-10">

                <p className="text-sm uppercase tracking-[0.35em] text-[#D6B36A]">
                  {previous.collection}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight lg:text-5xl">
                  {previous.title}
                </h3>

                <p className="mt-4 text-lg text-white/70">
                  {previous.location}
                </p>

              </div>

            </div>

          </Link>

        ) : (

          <div className="flex aspect-[5/4] items-center justify-center rounded-[40px] border border-dashed border-white/10 bg-[#0D1218]">

            <div className="text-center">

              <p className="text-xs uppercase tracking-[0.4em] text-[#D6B36A]">
                Beginning of Exhibition
              </p>

              <h3 className="mt-5 font-serif text-4xl">
                {collection}
              </h3>

            </div>

          </div>

        )}

        {/* Next Artwork */}

        {next ? (

          <Link
            href={`/print/${next.slug}`}
            className="group relative block overflow-hidden rounded-[40px]"
          >

            <div className="relative aspect-[5/4] bg-[#050608]">

              <Image
                src={next.gallery[0]}
                alt={next.title}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#D6B36A]/70" />

              <div className="absolute right-10 top-10">

                <span className="rounded-full border border-white/20 bg-black/40 px-5 py-2 text-[11px] uppercase tracking-[0.35em] backdrop-blur-md">

                  Next Artwork

                </span>

              </div>

              <div className="absolute bottom-10 left-10">

                <p className="text-sm uppercase tracking-[0.35em] text-[#D6B36A]">
                  {next.collection}
                </p>

                <h3 className="mt-5 font-serif text-4xl leading-tight lg:text-5xl">
                  {next.title}
                </h3>

                <p className="mt-4 text-lg text-white/70">
                  {next.location}
                </p>

              </div>

            </div>

          </Link>

        ) : (

          <Link
            href={`/collections/${collectionSlug}`}
            className="group relative block overflow-hidden rounded-[40px] border border-[#D6B36A]/20 bg-[#0D1218] transition-all duration-500 hover:border-[#D6B36A] hover:bg-[#111821]"
          >

            <div className="flex aspect-[5/4] flex-col items-center justify-center px-12 text-center">

              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                End of Exhibition
              </p>

              <h3 className="mt-8 font-serif text-4xl lg:text-5xl">
                Return to {collection}
              </h3>

              <p className="mt-8 max-w-md text-lg leading-8 text-white/60">
                Continue exploring the complete collection and revisit the
                photographs that define this exhibition.
              </p>

              <span className="mt-12 rounded-2xl border border-[#D6B36A] px-8 py-4 text-xs uppercase tracking-[0.35em] transition-all duration-300 group-hover:bg-[#D6B36A] group-hover:text-black">

                View Collection →

              </span>

            </div>

          </Link>

        )}

      </div>

    </section>
  );
}