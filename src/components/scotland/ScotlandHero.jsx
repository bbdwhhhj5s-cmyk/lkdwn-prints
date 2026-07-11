"use client";

import Button from "../ui/Button";

export default function ScotlandHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/scotland/glencoe.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Light Falloff */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-8 text-center">

        <p
          className="
            mb-10
            text-white/90
            italic
            text-xl
            md:text-2xl
            font-light
            tracking-wide
          "
        >
          “Some places become familiar.
          <br />
          Scotland never does.”
        </p>

        <div className="mx-auto mb-8 h-px w-24 bg-[#B8965A]" />

        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[#B8965A]
            text-xs
          "
        >
          Collection
        </p>

        <h1
          className="
            mt-6
            text-white
            font-light
            tracking-[-0.05em]
            leading-none
            text-6xl
            md:text-8xl
            xl:text-[8rem]
          "
        >
          Scotland
        </h1>

        <p
          className="
            mt-8
            uppercase
            tracking-[0.35em]
            text-sm
            text-[#D9D9D9]
          "
        >
          Highlands • Islands • Wild Places
        </p>

        <p
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-lg
            md:text-xl
            leading-9
            text-[#D6D6D6]
          "
        >
          For more than a decade I've returned to Scotland,
          photographing mountains, coastlines and changing
          weather. Every visit has been different.
          Every journey has revealed something new.
        </p>

        <div className="mt-16">
          <Button href="#chapter-one">
            Begin the Journey
          </Button>
        </div>

      </div>

      {/* Scroll Hint */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-white/60
          uppercase
          tracking-[0.45em]
          text-[10px]
          animate-pulse
        "
      >
        Scroll
      </div>
    </section>
  );
}