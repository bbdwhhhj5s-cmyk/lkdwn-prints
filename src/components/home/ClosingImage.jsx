import Image from "next/image";
import Link from "next/link";

export default function ClosingImage() {
  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src="/images/scotland/glencoe-editorial.jpg"
        alt="Closing Landscape"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <div className="absolute inset-0 flex items-end">

        <div className="mx-auto w-full max-w-7xl px-8 pb-24">

          <div className="max-w-2xl">

            <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
              Continue the Journey
            </p>

            <h2 className="mt-8 font-serif text-6xl leading-tight text-white">

              The Landscape
              <br />
              Never Stops
              <br />
              Changing.

            </h2>

            <p className="mt-10 max-w-xl text-xl leading-9 text-white/80">

              Every collection continues to grow as new journeys,
              changing seasons and returning light reveal another
              chapter of the landscape.

            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <Link
                href="/collections"
                className="rounded-full bg-[#D6B36A] px-8 py-4 text-sm uppercase tracking-[0.35em] text-black transition hover:scale-105"
              >
                View Collections
              </Link>

              <Link
                href="/journal"
                className="rounded-full border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.35em] text-white transition hover:border-[#D6B36A]"
              >
                Read Journal
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}