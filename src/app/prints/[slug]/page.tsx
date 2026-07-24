import { notFound } from "next/navigation";
import ArtworkDetail from "@/components/prints/ArtworkDetail";
import { artworks, getArtwork } from "@/data/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return artworks.map(({ slug }) => ({ slug }));
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
