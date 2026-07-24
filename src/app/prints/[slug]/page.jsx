import { notFound } from "next/navigation";

import { productList } from "@/data/products";

import ProductExperience from "@/components/product/ProductExperience";

export async function generateStaticParams() {
  return productList.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const artwork = productList.find(
    (item) => item.slug === slug
  );

  if (!artwork) {
    return {};
  }

  return {
    title: `${artwork.title} | LKDWN Prints`,
    description: artwork.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const artwork = productList.find(
    (item) => item.slug === slug
  );

  if (!artwork) {
    notFound();
  }

  const collectionArtworks = productList.filter(
    (item) => item.collection === artwork.collection
  );

  const currentIndex = collectionArtworks.findIndex(
    (item) => item.slug === artwork.slug
  );

  const previous =
    currentIndex > 0
      ? collectionArtworks[currentIndex - 1]
      : null;

  const next =
    currentIndex < collectionArtworks.length - 1
      ? collectionArtworks[currentIndex + 1]
      : null;

  const related = collectionArtworks.filter(
    (item) => item.slug !== artwork.slug
  );

  return (
    <ProductExperience
      artwork={artwork}
      previous={previous}
      next={next}
      related={related}
    />
  );
}