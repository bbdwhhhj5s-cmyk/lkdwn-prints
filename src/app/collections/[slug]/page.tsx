import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CollectionHero from "@/components/collections/CollectionHero";
import CollectionSection from "@/components/collections/CollectionSection";
import Navbar from "@/components/layout/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import {
  collections,
  getCollection,
  getCollectionSelection,
} from "@/data/catalog";
import { routes } from "@/lib/routes";

export const dynamicParams = false;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lkdwnprints.com";

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
    twitter: {
      card: "summary_large_image",
      title: `${collection.seoTitle} | LKDWN Prints`,
      description: collection.seoDescription,
      images: featuredArtwork ? [featuredArtwork.image] : undefined,
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

  const collectionUrl = new URL(
    routes.collection(collection.slug),
    siteUrl,
  ).toString();

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": collectionUrl,
            url: collectionUrl,
            name: collection.seoTitle,
            description: collection.seoDescription,
            primaryImageOfPage: new URL(collection.heroImage, siteUrl).toString(),
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: collection.artworks.length,
              itemListElement: collection.artworks.map((artwork, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: artwork.title,
                url: new URL(routes.artwork(artwork.slug), siteUrl).toString(),
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Collections",
                item: new URL(routes.collections, siteUrl).toString(),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: collection.name,
                item: collectionUrl,
              },
            ],
          },
        ]}
      />
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
