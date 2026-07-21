"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";

export default function EditorsSelection({
  title = "Editor's Selection",
  subtitle = "A curated collection of fine art photographs chosen to represent the spirit of Scotland.",
  prints = [],
}) {
  if (!prints.length) return null;

  return (
    <section className="bg-[#090D12] py-36 lg:py-48">
      <div className="max-w-7xl mx-auto px-8">

        <FadeIn>
          <p className="uppercase tracking-[0.45em] text-[#B8965A] text-xs mb-5">
            Curated Collection
          </p>

          <h2 className="font-serif text-5xl md:text-7xl leading-none text-white">
            {title}
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
            {subtitle}
          </p>
        </FadeIn>

        <div className="mt-24 grid gap-12 lg:grid-cols-3">

          {prints.map((print, index) => (
            <FadeIn key={print.slug} delay={index * 0.12}>

              <article className="group">

                <Link href={`/print/${print.slug}`}>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-black">

                    <Image
                      src={print.image}
                      alt={print.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  <div className="mt-8">

                    <p className="uppercase tracking-[0.35em] text-[#B8965A] text-[11px]">
                      {print.location}
                    </p>

                    <h3 className="mt-3 text-3xl text-white font-serif">
                      {print.title}
                    </h3>

                    <p className="mt-4 text-white/60 leading-8">
                      {print.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <div>

                        <p className="text-white text-sm">
                          {print.medium}
                        </p>

                        <p className="mt-2 text-white/40 text-sm">
                          {print.printSizes.join(" • ")}
                        </p>

                      </div>

                      <span
                        className="
                          uppercase
                          tracking-[0.35em]
                          text-xs
                          text-[#B8965A]
                        "
                      >
                        View Print →
                      </span>

                    </div>

                  </div>

                </Link>

              </article>

            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}