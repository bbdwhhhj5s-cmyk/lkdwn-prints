import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";

export default function FeaturedCollection() {
  return (
    <section
      aria-labelledby="featured-collection-title"
      className="relative overflow-hidden"
    >
      <Link
        href={routes.collection("scotland")}
        className="group relative block min-h-[78vh] overflow-hidden lg:min-h-screen"
      >
        <Image
          src="/images/scotland/glencoe-editorial.jpg"
          alt="Atmospheric Scottish landscape photographed in Glencoe"
          fill
          sizes="100vw"
          className="object-cover transition duration-[4000ms] ease-out group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/15"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"
        />

        <div className="relative z-10 flex min-h-[78vh] items-end lg:min-h-screen">
          <div className="w-full px-6 pb-20 pt-40 sm:px-10 md:pb-24 lg:px-16 lg:pb-28 xl:px-24">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
                Featured Exhibition · Volume I
              </p>

              <h2
                id="featured-collection-title"
                className="heading mt-7 text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-9xl"
              >
                Scotland
              </h2>

              <div
                aria-hidden="true"
                className="mt-10 h-px w-24 bg-[#D6B36A]"
              />

              <p className="mt-10 max-w-2xl text-xl leading-9 text-white/85 md:text-2xl md:leading-10">
                Where weather becomes light and familiar landscapes reveal a
                different character with every return.
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                A curated collection of fine art landscape photography shaped
                by Scotland&apos;s mountains, coastlines, changing seasons and
                fleeting atmosphere.
              </p>

              <span className="mt-12 inline-flex items-center gap-4 border-b border-[#D6B36A] pb-3 text-sm uppercase tracking-[0.3em] text-white transition duration-300 group-hover:gap-6 group-hover:text-[#D6B36A]">
                Enter the Exhibition
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.35em] text-white/50 md:block">
          Glencoe · Scotland
        </div>
      </Link>
    </section>
  );
}