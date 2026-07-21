import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">

      {/* Background */}

      <Image
        src="/images/hero/Hero.jpg"
        alt="LKDWN Prints"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-black/35 to-black/25" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-36">

        <div className="max-w-3xl">

          {/* Logo */}

          <Image
            src="/logo/lkdwn logo white.png"
            alt="LKDWN Prints"
            width={340}
            height={90}
            priority
            className="w-[260px] md:w-[340px]"
          />

          <div className="mt-12 h-px w-24 bg-[#D6B36A]" />

          <h1 className="mt-12 font-serif text-5xl leading-tight md:text-7xl">
            Collected
            <br />
            Landscapes
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-white/70">
            Fine art landscape photography exploring atmosphere, light and
            place. Curated as evolving exhibitions and printed using
            museum-quality archival materials.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">

            <Link
              href="/collections/scotland"
              className="rounded-full bg-[#D6B36A] px-10 py-5 text-sm font-medium uppercase tracking-[0.35em] text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Enter Exhibition
            </Link>

            <Link
              href="/collections"
              className="rounded-full border border-white/20 px-10 py-5 text-sm uppercase tracking-[0.35em] transition-all duration-300 hover:border-[#D6B36A] hover:bg-white/5"
            >
              View Collections
            </Link>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center">

          <span className="mb-4 text-[10px] uppercase tracking-[0.45em] text-white/45">
            Scroll
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">

            <div className="mt-2 h-3 w-1 rounded-full bg-[#D6B36A] animate-bounce" />

          </div>

        </div>

      </div>

    </section>
  );
}