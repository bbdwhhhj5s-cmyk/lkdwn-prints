export type CollectionSlug = "scotland" | "paris" | "porto" | "prague";

export type Artwork = {
  slug: string;
  title: string;
  collection: CollectionSlug;
  location: string;
  image: string;
  alt: string;
  description: string;
  orientation: "landscape" | "portrait";
};

export type Collection = {
  slug: CollectionSlug;
  name: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  artworks: Artwork[];
};

const titleFromSlug = (slug: string) =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const numberedArtworks = (
  collection: CollectionSlug,
  count: number,
  location: string,
  portraitNumbers: number[] = [],
): Artwork[] =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const slug = `${collection}-${number}`;

    return {
      slug,
      title: titleFromSlug(slug),
      collection,
      location,
      image: `/images/${collection}/${slug}.jpg`,
      alt: `Fine art photograph from ${location}, artwork ${number}`,
      description: `A museum-quality fine art photograph from ${location}.`,
      orientation: portraitNumbers.includes(number) ? "portrait" : "landscape",
    };
  });

const scotlandArtworks: Artwork[] = [
  {
    slug: "glencoe",
    title: "Glencoe",
    collection: "scotland",
    location: "Glencoe, Scotland",
    image: "/images/scotland/glencoe.jpg",
    alt: "Mountain landscape at Glencoe in the Scottish Highlands",
    description:
      "A museum-quality fine art landscape photograph of Glencoe in the Scottish Highlands.",
    orientation: "landscape",
  },
  ...numberedArtworks("scotland", 30, "the Scottish Highlands", [4, 10, 28, 30]),
];

export const collections: Collection[] = [
  {
    slug: "scotland",
    name: "Scotland",
    title: "Where Weather Becomes Light.",
    description:
      "Fine art landscape photography captured throughout the Scottish Highlands.",
    seoTitle: "Scotland Fine Art Photography",
    seoDescription:
      "Explore museum-quality landscape photography from Glencoe and the Scottish Highlands.",
    artworks: scotlandArtworks,
  },
  {
    slug: "paris",
    name: "Paris",
    title: "Studies in Light and Stone.",
    description:
      "Quiet observations of architecture, streets and changing light across Paris.",
    seoTitle: "Paris Fine Art Photography",
    seoDescription:
      "Explore museum-quality architectural and street photography from Paris, France.",
    artworks: numberedArtworks("paris", 11, "Paris, France", [1, 2, 5, 6, 8, 10, 11]),
  },
  {
    slug: "porto",
    name: "Porto",
    title: "Colour Along the Douro.",
    description:
      "A photographic study of Porto's riverside, tiled facades and Atlantic light.",
    seoTitle: "Porto Fine Art Photography",
    seoDescription:
      "Explore museum-quality photography of Porto's riverside, tiled facades and Atlantic light.",
    artworks: numberedArtworks("porto", 12, "Porto, Portugal", [1, 2, 4, 5, 11]),
  },
  {
    slug: "prague",
    name: "Prague",
    title: "A City in Quiet Detail.",
    description:
      "The Prague collection is being prepared for release.",
    seoTitle: "Prague Fine Art Photography",
    seoDescription:
      "Discover the forthcoming LKDWN Prints fine art photography collection from Prague.",
    artworks: [],
  },
];

export const artworks = collections.flatMap((collection) => collection.artworks);

export const getArtwork = (slug: string) =>
  artworks.find((artwork) => artwork.slug === slug);

export const getCollection = (slug: CollectionSlug) =>
  collections.find((collection) => collection.slug === slug);

export const getAdjacentArtworks = (artwork: Artwork) => {
  const collection = getCollection(artwork.collection);
  const index = collection?.artworks.findIndex(({ slug }) => slug === artwork.slug) ?? -1;

  if (!collection || index < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: collection.artworks[index - 1],
    next: collection.artworks[index + 1],
  };
};
