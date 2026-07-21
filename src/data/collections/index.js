import { productList } from "@/data/products";

const collections = [
  {
    slug: "scotland",
    title: "Scotland",
    location: "United Kingdom",
    year: "2021 – Present",

    hero: "/images/scotland/glencoe-editorial.jpg",

    heading: "Land, weather and atmosphere.",

    description:
      "A long-term body of work exploring Scotland's mountains, lochs and coastline through changing light and seasons.",
  },

  {
    slug: "paris",
    title: "Paris",
    location: "France",
    year: "2022",

    hero: "/images/paris/paris.jpg",

    heading: "Geometry, architecture and light.",

    description:
      "A quieter interpretation of Paris through composition, texture and atmosphere.",
  },

  {
    slug: "porto",
    title: "Porto",
    location: "Portugal",
    year: "2023",

    hero: "/images/porto/porto.jpg",

    heading: "Colour, shadow and the Atlantic.",

    description:
      "An editorial study of Porto's streets, riverfront and architecture.",
  },

  {
    slug: "prague",
    title: "Prague",
    location: "Czech Republic",
    year: "2024",

    hero: "/images/Prague/1.jpg",

    heading: "History viewed through simplicity.",

    description:
      "Observations of Prague through light, atmosphere and architectural detail.",
  },
];

const enrichedCollections = collections.map((collection) => {
  const prints = productList.filter(
    (product) =>
      product.collection?.toLowerCase() ===
      collection.slug.toLowerCase()
  );

  return {
    ...collection,
    printCount: prints.length,
    prints,
  };
});

export default enrichedCollections;