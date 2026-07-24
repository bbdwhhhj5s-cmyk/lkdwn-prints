import { notFound } from "next/navigation";
import ArtworkDetail from "@/components/prints/ArtworkDetail";
import { artworkAliases, artworks, getArtwork } from "@/data/catalog";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";

export const dynamicParams = false;

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

  return <ArtworkDetail artwork={artwork} />;
}
