import { notFound } from "next/navigation";
import ArtworkDetail from "@/components/prints/ArtworkDetail";
import JsonLd from "@/components/seo/JsonLd";
import { artworkAliases, artworks, getArtwork } from "@/data/catalog";
import { routes } from "@/lib/routes";
import { printSizes } from "@/lib/store";
import type { Metadata } from "next";

export const dynamicParams = false;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lkdwnprints.co.uk";

export function generateStaticParams() {
  return [
    ...artworks.map(({ slug }) => ({ slug })),
    ...Object.keys(artworkAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/prints/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) {
    return {};
  }

  return {
    title: artwork.title,
    description: artwork.description,
    alternates: {
      canonical: routes.artwork(artwork.slug),
    },
    openGraph: {
      title: `${artwork.title} | LKDWN Prints`,
      description: artwork.description,
      type: "website",
      images: [{ url: artwork.image, alt: artwork.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${artwork.title} | LKDWN Prints`,
      description: artwork.description,
      images: [artwork.image],
    },
  };
}

export default async function PrintPage({
  params,
}: PageProps<"/prints/[slug]">) {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) {
    notFound();
  }

  const artworkUrl = new URL(routes.artwork(artwork.slug), siteUrl).toString();
  const imageUrl = new URL(artwork.image, siteUrl).toString();

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${artworkUrl}#product`,
            name: artwork.title,
            description: artwork.description,
            image: [imageUrl],
            url: artworkUrl,
            category: "Fine art photography print",
            brand: {
              "@type": "Brand",
              name: "LKDWN Prints",
            },
            creator: {
              "@id": `${siteUrl}/#john-mchugh`,
            },
            material: "Museum-quality fine art paper",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "GBP",
              lowPrice: Math.min(...printSizes.map(({ price }) => price)) / 100,
              highPrice: Math.max(...printSizes.map(({ price }) => price)) / 100,
              offerCount: printSizes.length,
              availability: "https://schema.org/InStock",
              url: artworkUrl,
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
                name: artwork.collection,
                item: new URL(
                  routes.collection(artwork.collection),
                  siteUrl,
                ).toString(),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: artwork.title,
                item: artworkUrl,
              },
            ],
          },
        ]}
      />
      <ArtworkDetail artwork={artwork} />
    </>
  );
}
