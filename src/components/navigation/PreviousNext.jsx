import Link from "next/link";
import Image from "next/image";

export default function PreviousNext({ previous, next }) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-10 py-20 md:grid-cols-2">

        {previous ? (
          <Link
          href={`/prints/${slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#D6B36A]"
          >
            <div className="relative h-64">

              <Image
                src={previous.gallery[0]}
                alt={previous.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-8">

              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
                ← Previous Artwork
              </p>

              <h3 className="font-serif text-3xl">
                {previous.title}
              </h3>

              <p className="mt-2 text-white/60">
                {previous.location}
              </p>

            </div>

          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/print/${next.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#D6B36A]"
          >
            <div className="relative h-64">

              <Image
                src={next.gallery[0]}
                alt={next.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>

            <div className="p-8 text-right">

              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/40">
                Next Artwork →
              </p>

              <h3 className="font-serif text-3xl">
                {next.title}
              </h3>

              <p className="mt-2 text-white/60">
                {next.location}
              </p>

            </div>

          </Link>
        ) : (
          <div />
        )}

      </div>
    </section>
  );
}