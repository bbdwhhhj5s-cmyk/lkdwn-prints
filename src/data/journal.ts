export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  location: string;
  image: string;
  imageAlt: string;
  imageOrientation: "landscape" | "portrait";
  collectionSlug?: string;
  collectionLabel?: string;
  paragraphs: string[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "why-i-keep-returning-to-glencoe",
    title: "Why I Keep Returning to Glencoe",
    excerpt:
      "A landscape shaped by weather, memory and the brief moments when light changes everything.",
    description:
      "John McHugh reflects on photographing Glencoe, returning to the Scottish Highlands and waiting for fleeting changes in light and atmosphere.",
    publishedAt: "2026-08-04",
    location: "Glencoe, Scotland",
    image: "/images/scotland/glencoe-editorial.jpg",
    imageAlt:
      "Atmospheric mountain landscape in Glencoe in the Scottish Highlands",
    imageOrientation: "landscape",
    collectionSlug: "scotland",
    collectionLabel: "Scotland Collection",
    paragraphs: [
      "Glencoe is never quite the place I remember. The mountains remain, but the landscape changes with every passing cloud, shift in weather and movement of light.",
      "That uncertainty is part of what keeps drawing me back. Familiar viewpoints can become entirely new places within minutes. A hillside disappears into rain, a break in the cloud catches the edge of a ridge, or still water briefly holds a reflection before the wind returns.",
      "I rarely arrive with one photograph in mind. The process is quieter than that. It begins with walking, looking and waiting long enough for the landscape to reveal something that was not obvious at first.",
      "Some visits produce a photograph. Others do not. Both matter. Returning to the same place builds an understanding that cannot be hurried, and each visit becomes part of a longer visual record shaped by weather, season and memory.",
      "The photographs in the Scotland collection are not intended as a complete description of Glencoe or the Highlands. They are individual moments—brief alignments of place, atmosphere and light that existed only long enough to be photographed.",
    ],
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}
