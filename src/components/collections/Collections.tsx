import CollectionSection from "./CollectionSection";
import { collections } from "@/data/catalog";

export default function Collections() {
  return (
    <main id="collections" className="bg-[#07131C] px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {collections.map((collection) => (
          <CollectionSection key={collection.slug} collection={collection} />
        ))}
      </div>
    </main>
  );
}
