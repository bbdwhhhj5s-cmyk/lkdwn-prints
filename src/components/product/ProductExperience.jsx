"use client";

import ProductGallery from "./ProductGallery";
import PurchasePanel from "./PurchasePanel";
import ProductInfo from "./ProductInfo";
import CollectionPanel from "./CollectionPanel";
import RelatedArtworks from "./RelatedArtworks";
import ArtworkNavigation from "./ArtworkNavigation";

export default function ProductExperience({
  artwork,
  previous,
  next,
  related,
}) {
  return (
    <main className="bg-[#090D12] text-white">

      <section className="mx-auto max-w-7xl px-8 pt-24">

        <div className="grid gap-20 lg:grid-cols-[1.25fr_0.75fr]">

          <ProductGallery
            images={artwork.gallery}
            title={artwork.title}
          />

          <PurchasePanel product={artwork} />

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-8 py-32">

        <div className="grid gap-20 lg:grid-cols-[1.25fr_0.75fr]">

          <ProductInfo
            title={artwork.title}
            location={artwork.location}
            description={artwork.description}
            specifications={[
              `Paper: ${artwork.paper}`,
              "Museum Quality Giclée Print",
              "Archival Pigment Inks",
              "Produced to Order",
            ]}
          />

          <CollectionPanel
            collection={artwork.collection}
            location={artwork.location}
          />

        </div>

        <RelatedArtworks
          artworks={related}
          currentSlug={artwork.slug}
        />

        <ArtworkNavigation
          previous={previous}
          next={next}
          collection={artwork.collection}
        />

      </section>

    </main>
  );
}