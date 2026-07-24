import type { Collection } from "@/data/catalog";
import ArtworkCard from "@/components/gallery/ArtworkCard";

type CollectionSectionProps = {
  collection: Collection;
};

export default function CollectionSection({ collection }: CollectionSectionProps) {
  return (
    <section id={collection.slug} className="scroll-mt-24 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A567]">
          {collection.name}
        </p>
        <h2 className="heading text-5xl leading-tight text-white md:text-7xl">
          {collection.title}
        </h2>
        <p className="mt-7 text-lg leading-relaxed text-[#9AA4AE]">
          {collection.description}
        </p>
      </div>

      {collection.artworks.length > 0 ? (
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collection.artworks.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      ) : (
        <p className="border-t border-white/10 py-8 text-[#9AA4AE]">
          New work coming soon.
        </p>
      )}
    </section>
  );
}
