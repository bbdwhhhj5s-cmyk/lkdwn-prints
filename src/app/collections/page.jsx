import collections from "@/data/collections";
import CollectionCard from "@/components/collections/CollectionCard";

export const metadata = {
  title: "Collections | LKDWN Prints",
  description:
    "Explore the complete LKDWN Prints collection of fine art photography.",
};

export default function CollectionsPage() {
  return (
    <main className="bg-[#090D12] text-white">

      {/* HERO */}

      <section className="border-b border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col px-8 py-40">

          <span className="mb-6 text-xs uppercase tracking-[0.45em] text-[#D6B36A]">
            LKDWN PRINTS
          </span>

          <h1 className="max-w-5xl font-serif text-6xl leading-[1.05] md:text-8xl">
            Photography Collections
          </h1>

          <p className="mt-12 max-w-3xl text-lg leading-9 text-white/65">
            Every collection represents years of observation rather than
            individual trips. Together they form an evolving archive of
            landscape, architecture and place.
          </p>

        </div>

      </section>

      {/* COLLECTIONS */}

      <section className="mx-auto max-w-[1700px] px-8 py-32">

        <div className="space-y-40">

          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.slug}
              collection={collection}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

      </section>

    </main>
  );
}