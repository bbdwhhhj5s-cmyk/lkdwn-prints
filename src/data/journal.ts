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
      "The photograph is only the beginning. Through light, colour and interpretation, the finished image becomes an invitation to experience a joyful moment of your own.",
    description:
      "John McHugh reflects on photographing Glencoe and how the creative process continues after the camera, shaping light, colour and atmosphere into a finished fine art print.",
    publishedAt: "2026-08-04",
    location: "Glencoe, Scotland",
    image: "/images/scotland/glencoe-editorial.jpg",
    imageAlt:
      "Atmospheric mountain landscape in Glencoe in the Scottish Highlands",
    imageOrientation: "landscape",
    collectionSlug: "scotland",
    collectionLabel: "Scotland Collection",
    paragraphs: [
      "The photograph is only the beginning. Pressing the shutter records a place and a moment, but it does not fully record what it felt like to stand there.",
      "Glencoe changes constantly. Light moves across the mountains, weather closes in and familiar views become unfamiliar within minutes. Those shifts are part of the experience, but they are also part of what I carry back into the editing process.",
      "For me, editing is not simply correction. It is another stage of making the photograph. I return to the light, colour and atmosphere of the moment and shape the image until it reflects both what I saw and what I felt.",
      "That process may involve lifting a quiet detail from shadow, drawing attention towards a brief break in the cloud, or balancing colour so the finished image holds the mood that first made me stop and look.",
      "The final print is therefore not a literal record of Glencoe. It is my interpretation of a moment: the landscape as it appeared, the emotion it awakened in me and the choices made afterwards to bring those things together.",
      "My hope is not that every viewer feels exactly what I felt. The finished photograph is an invitation to pause, to remember and perhaps to discover a joyful moment of their own.",
    ],
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}
