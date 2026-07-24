import Link from "next/link";
import type { Collection } from "@/data/catalog";
import ArtworkCard from "@/components/gallery/ArtworkCard";
import { routes } from "@/lib/routes";

type CollectionSectionProps = {
  collection: Collection;
  pageHeading?: boolean;
};

export default function CollectionSection({
  collection,
  pageHeading = false,
}: CollectionSectionProps) {
  const Heading = pageHeading ? "h1" : "h2";

  return (
    <section id={collection.slug} className="scroll-mt-24 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A567]">
          {pageHeading ? (
            collection.name
          ) : (
            <Link href={routes.collection(collection.slug)}>
              {collection.name}
            </Link>
          )}
        </p>
        <Heading className="heading text-5xl leading-tight text-white md:text-7xl">
          {collection.title}
        </Heading>
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
