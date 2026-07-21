import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-40">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-24 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Portrait */}

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[36px] border border-white/10">

            <div className="relative aspect-[4/5]">

              <Image
                src="/images/about/photographer.jpg"
                alt="Photographer"
                fill
                sizes="40vw"
                className="object-cover"
              />

            </div>

          </div>

          {/* Editorial */}

          <div>

            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              Photographer's Statement
            </p>

            <h2 className="mt-6 font-serif text-6xl leading-tight">
              Looking Beyond
              <br />
              the Landscape
            </h2>

            <div className="mt-10 h-px w-24 bg-[#D6B36A]" />

            <div className="mt-14 space-y-8 text-lg leading-9 text-white/72">

              <p>
                Landscape photography has never been about collecting
                locations. It is about returning to places often enough to
                understand how they change through weather, season and
                light.
              </p>

              <p>
                Many of the photographs within LKDWN Prints have required
                multiple visits before the conditions felt right. The work
                is driven by patience rather than distance, allowing each
                landscape to reveal itself gradually instead of being
                rushed.
              </p>

              <p>
                Every exhibition continues to evolve as new photographs
                are added, creating collections that grow naturally over
                time rather than reaching a fixed conclusion.
              </p>

            </div>

            <Link
              href="/collections"
              className="mt-14 inline-flex items-center rounded-full border border-[#D6B36A] px-10 py-5 text-sm uppercase tracking-[0.35em] transition-all duration-300 hover:bg-[#D6B36A] hover:text-black"
            >
              Explore the Collections
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}