import Image from "next/image";
import type { Collection } from "@/data/catalog";

type CollectionHeroProps = {
  collection: Collection;
};

export default function CollectionHero({ collection }: CollectionHeroProps) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden">
      <Image
        src={collection.heroImage}
        alt={collection.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07131C] via-black/20 to-black/40" />

      <div className="absolute inset-x-0 bottom-16 px-8 md:bottom-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#C9A567]">
            Collection
          </p>
          <h1 className="heading text-6xl leading-none text-white md:text-8xl">
            {collection.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            {collection.description}
          </p>
        </div>
      </div>
    </section>
  );
}
