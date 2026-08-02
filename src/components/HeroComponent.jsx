import Image from "next/image";

import Navbar from "./layout/Navbar";
import Button from "./ui/Button";
import ScrollIndicator from "./hero/ScrollIndicator";
import { routes } from "../lib/routes";

export default function HeroComponent() {
  return (
    <section
      aria-labelledby="homepage-hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero/Hero.jpg"
        alt="Atmospheric fine art landscape photography by LKDWN Prints"
        fill
        preload
        quality={80}
        sizes="100vw"
        className="object-cover"
      />

      <Navbar />

      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 py-32 text-center md:px-10">
        <Image
          src="/logo/lkdwn logo white.png"
          alt="LKDWN Prints"
          width={320}
          height={124}
          sizes="(max-width: 768px) 240px, 320px"
          className="mx-auto mb-10 w-60 md:w-72 lg:w-80"
        />

        <h1
          id="homepage-hero-title"
          className="heading mx-auto max-w-5xl text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl"
        >
          Collected Landscapes.
          <br />
          Crafted as Fine Art.
        </h1>

        <p className="body-text mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#E3E0DA] md:text-lg lg:text-xl">
          Museum-quality fine art photography from Scotland, Paris, Porto and
          Prague. Each image is selected for its light, atmosphere and enduring
          sense of place, then produced as an archival print for your home.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button href={routes.collection("scotland")}>
            Explore the Collection
          </Button>

          <a
            href="/about"
            className="body-text inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white transition-opacity duration-300 hover:opacity-70"
          >
            Meet the Photographer
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}