import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CollectionHero from "@/components/collections/CollectionHero";
import CollectionSection from "@/components/collections/CollectionSection";
import Navbar from "@/components/layout/Navbar";
import {
  collections,
  getCollection,
  getCollectionSelection,
} from "@/data/catalog";
import { routes } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return {};
  }

  const featuredArtwork = collection.artworks[0];

  return {
    title: collection.seoTitle,
    description: collection.seoDescription,
    alternates: {
      canonical: routes.collection(collection.slug),
    },
    openGraph: {
      title: `${collection.seoTitle} | LKDWN Prints`,
      description: collection.seoDescription,
      type: "website",
      images: featuredArtwork
        ? [{ url: featuredArtwork.image, alt: featuredArtwork.alt }]
        : undefined,
    },
  };
}

export default async function CollectionPage({
  params,
}: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#07131C]">
        <CollectionHero collection={collection} />
        <div className="mx-auto max-w-7xl px-8 pb-16 pt-12">
          <Link
            href={routes.collections}
            className="text-xs uppercase tracking-[0.3em] text-[#C9A567]"
          >
            ← All collections
          </Link>
          <CollectionSection
            collection={collection}
            artworks={getCollectionSelection(collection)}
            showIntroduction={false}
          />
        </div>
      </main>
    </>
  );
}
