import type { MetadataRoute } from "next";
import { artworks, collections } from "@/data/catalog";
import { journalArticles } from "@/data/journal";
import { routes } from "@/lib/routes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lkdwnprints.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(routes.collections, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: new URL(routes.printDelivery, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: new URL(routes.tradeProjects, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: new URL(routes.journal, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...journalArticles.map((article) => ({
      url: new URL(routes.journalArticle(article.slug), siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [new URL(article.image, siteUrl).toString()],
    })),
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
