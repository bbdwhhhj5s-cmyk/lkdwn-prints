"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "../ui/FadeIn";

export default function NextCollection({
  image = "/images/paris/paris.jpg",
  eyebrow = "Continue the Journey",
  title = "Paris",
  description = "A study of architecture, atmosphere and early morning light.",
  href = "/collections/paris",
}) {
  return (
    <section className="relative h-[90vh] overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority={false}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#090D12] via-transparent to-black/70" />

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-8">

          <FadeIn>

            <p className="uppercase tracking-[0.45em] text-[#B8965A] text-xs mb-6">
              {eyebrow}
            </p>

            <h2 className="font-serif text-6xl md:text-8xl text-white leading-none">
              {title}
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-white/75">
              {description}
            </p>

            <Link
              href={href}
              className="
                inline-flex
                items-center
                mt-14
                border
                border-[#B8965A]
                px-8
                py-4
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#B8965A]
                transition
                duration-300
                hover:bg-[#B8965A]
                hover:text-black
              "
            >
              Explore Collection →
            </Link>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}