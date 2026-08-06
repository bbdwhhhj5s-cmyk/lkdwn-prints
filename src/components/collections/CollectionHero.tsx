import Image from "next/image";
import type { Collection } from "@/data/catalog";

type CollectionHeroProps = {
  collection: Collection;
};

export default function CollectionHero({
  collection,
}: CollectionHeroProps) {
  return (
    <section
      aria-labelledby="collection-title"
      className="relative h-screen overflow-hidden bg-black"
    >
      <Image
        src={collection.heroImage}
        alt={collection.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Cinematic overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b
        from-black/45
        via-black/10
        to-[#090D12]"
      />

      {/* Exhibition title */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-7xl px-8 pb-24 md:pb-32">
          <p className="body-text text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Exhibition I
          </p>

          <h1
            id="collection-title"
            className="heading mt-6 text-6xl leading-[0.9] text-white md:text-8xl lg:text-9xl"
          >
            {collection.name}
          </h1>

          <div
            aria-hidden="true"
            className="mt-10 h-px w-24 bg-[#D6B36A]"
          />

          <p className="mt-10 max-w-3xl text-lg leading-9 text-white/75 md:text-xl md:leading-10">
            {collection.description}
          </p>
        </div>
      </div>
    </section>
  );
}