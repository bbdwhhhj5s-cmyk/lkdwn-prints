import Image from "next/image";
import Link from "next/link";

import collections from "@/data/collections";
import galleryData from "@/data/collections/scotland";

import ArtworkCard from "@/components/collections/ArtworkCard";

export default function ScotlandCollectionPage() {
  const collection = collections.find(
    (item) => item.slug === "scotland"
  );

  const artworks = galleryData.filter(
    (item) => item.type === "image"
  );

  return (
    <main className="bg-[#090D12] text-white">

      {/* Hero */}

      <section className="relative h-[92vh] overflow-hidden">

        <Image
          src="/images/scotland/glencoe-editorial.jpg"
          alt="Scotland"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-black/20 to-black/40" />

        <div className="absolute bottom-24 left-1/2 w-full max-w-7xl -translate-x-1/2 px-8">

          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            Collection
          </p>

          <h1 className="font-serif text-7xl md:text-8xl">
            Scotland
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
            Volume I presents twelve photographs exploring Scotland's
            mountains, coastlines and cities. Rather than documenting a
            single journey, the exhibition brings together moments gathered
            over multiple seasons, united by changing weather, dramatic
            light and a quieter way of seeing the landscape.
          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="mx-auto max-w-5xl px-8 py-32">

        <p className="text-sm uppercase tracking-[0.4em] text-[#D6B36A]">
          Editorial
        </p>

        <h2 className="mt-8 font-serif text-5xl leading-tight">
          Volume I
        </h2>

        <p className="mt-10 text-lg leading-9 text-white/70">
          This is the opening chapter of an ongoing body of work. New
          photographs will be added as the collection grows, allowing the
          exhibition to evolve naturally over time rather than reaching an
          artificial conclusion. Each visit to Scotland reveals something
          different, making every return part of the same continuing
          narrative.
        </p>

      </section>

      {/* Feature Image */}

      <section className="mx-auto max-w-7xl px-8">

        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">

          <Image
            src="/images/scotland/scotland-1.jpg"
            alt="Scotland landscape"
            fill
            className="object-cover"
          />

        </div>

      </section>

      {/* Quote */}

      <section className="mx-auto max-w-4xl px-8 py-32">

        <blockquote className="font-serif text-5xl leading-tight text-white/90">
          “Every exhibition begins with a single photograph.
          Every collection grows one journey at a time.”
        </blockquote>

      </section>

      {/* Exhibition Catalogue */}

      <section className="mx-auto max-w-7xl px-8 pb-32">

        <div className="mb-20 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#D6B36A]">
              Exhibition
            </p>

            <h2 className="mt-5 font-serif text-5xl">
              Exhibition Catalogue
            </h2>

          </div>

          <Link
            href="/collections"
            className="border border-white/10 px-8 py-4 text-xs uppercase tracking-[0.35em] transition hover:border-[#D6B36A]"
          >
            All Collections
          </Link>

        </div>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">

          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.slug}
              artwork={{
                ...artwork,
                gallery: [artwork.image],
              }}
            />
          ))}

        </div>

      </section>

    </main>
  );
}