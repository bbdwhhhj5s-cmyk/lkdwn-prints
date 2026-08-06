import Image from "next/image";
import Link from "next/link";

export default function ArtistBio() {
  return (
    <section
      id="photographer"
      aria-labelledby="artist-bio-title"
      className="scroll-mt-28 bg-[#090D12]"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-8 md:py-36 lg:px-12 lg:py-44">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0D1218]">
              <Image
                src="/images/about/john-mchugh.png"
                alt="John McHugh, Glasgow-based fine art photographer and founder of LKDWN Prints"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.32em] text-white/45">
              John McHugh · Glasgow
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              The Photographer
            </p>

            <h2
              id="artist-bio-title"
              className="heading mt-7 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl"
            >
              A Designer&apos;s Eye.
              <br />
              A Photographer&apos;s Instinct.
            </h2>

            <div
              aria-hidden="true"
              className="mt-10 h-px w-24 bg-[#D6B36A]"
            />

            <div className="mt-12 space-y-8 text-lg leading-9 text-white/70 md:text-xl md:leading-10">
              <p>
                I&apos;m John McHugh, a Glasgow-based fine art photographer and
                retired graphic designer. Decades spent working with
                composition, typography, colour and visual balance continue to
                shape the way I see and photograph the world.
              </p>

              <p>
                LKDWN Prints brings together a curated body of work from
                Scotland, Paris, Porto and Prague. Each collection explores
                light, atmosphere, architecture and landscape, with every image
                selected for its ability to hold a sense of place long after
                the moment has passed.
              </p>

              <p>
                Every photograph is captured, edited and prepared for print by
                me, then professionally produced using museum-quality archival
                materials. The result is fine art photography created to bring
                lasting atmosphere and character into the spaces where it is
                displayed.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-12 inline-flex items-center gap-4 border-b border-[#D6B36A] pb-3 text-sm uppercase tracking-[0.3em] text-white transition duration-300 hover:gap-6 hover:text-[#D6B36A]"
            >
              Read the full story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}