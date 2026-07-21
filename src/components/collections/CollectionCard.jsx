"use client";

import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({
  collection,
  reverse = false,
}) {
  return (
    <article
      className={`grid items-center gap-20 xl:grid-cols-2 ${
        reverse ? "xl:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
        <Image
          src={collection.hero}
          alt={collection.title}
          fill
          priority={false}
          sizes="(min-width:1280px) 50vw,100vw"
          className="object-cover transition duration-700 hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-10 left-10">
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Collection
          </div>

          <h2 className="font-serif text-5xl">{collection.title}</h2>
        </div>
      </div>

      <div className="max-w-2xl">

        <div className="mb-5 text-xs uppercase tracking-[0.4em] text-[#D6B36A]">
          {collection.location}
        </div>

        <h3 className="mb-8 font-serif text-5xl leading-tight">
          {collection.heading}
        </h3>

        <p className="mb-10 text-lg leading-9 text-white/70">
          {collection.description}
        </p>

        <div className="mb-12 flex flex-wrap gap-8 text-sm uppercase tracking-[0.35em] text-white/50">
          <span>{collection.printCount} Prints</span>
          <span>{collection.year}</span>
        </div>

        <Link
          href={`/collections/${collection.slug}`}
          className="inline-flex items-center gap-4 border border-[#D6B36A] px-8 py-5 uppercase tracking-[0.35em] text-sm transition hover:bg-[#D6B36A] hover:text-black"
        >
          Explore Collection

          <span className="text-xl">→</span>
        </Link>
      </div>
    </article>
  );
}