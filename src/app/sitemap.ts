import type { MetadataRoute } from "next";
import { artworks, collections } from "@/data/catalog";
import { routes } from "@/lib/routes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lkdwnprints.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...collections.map((collection) => ({
      url: new URL(routes.collection(collection.slug), siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: collection.artworks[0]
        ? [new URL(collection.artworks[0].image, siteUrl).toString()]
        : undefined,
    })),
    ...artworks.map((artwork) => ({
      url: new URL(routes.artwork(artwork.slug), siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [new URL(artwork.image, siteUrl).toString()],
    })),
  ];
}
