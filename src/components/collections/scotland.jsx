import NextCollection from "@/components/collections/NextCollection";
const galleryData = [
  {
    type: "chapter",
    number: "I",
    title: "Arrival",
    subtitle:
      "Scotland reveals itself slowly. Light, weather and landscape combine to create moments that can never be repeated, making every journey through the Highlands unique.",
  },

  {
    type: "image",
    number: "01",
    slug: "buachaille-etive-mor",
    title: "Buachaille Etive Mòr",
    location: "Glencoe",
    image: "/images/scotland/glencoe.jpg",
    description:
      "Morning mist rolled across Rannoch Moor before Buachaille Etive Mòr emerged from cloud.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    heading: "Light changes everything.",
    text:
      "The Highlands reward patience. The same landscape is never seen twice, and the smallest change in light can transform an ordinary view into something unforgettable.",
  },

  {
    type: "diptych",
    left: {
      image: "/images/scotland/scotland-4.jpg",
      title: "Morning Light",
      location: "Glencoe",
    },
    right: {
      image: "/images/scotland/scotland-5.jpg",
      title: "Changing Weather",
      location: "Rannoch Moor",
    },
  },

  {
    type: "quote",
    quote: "You don't simply visit the Highlands. You return to them.",
    author: "LKDWN Prints",
  },

  {
    type: "image",
    number: "02",
    slug: "castle-stalker",
    title: "Castle Stalker",
    location: "Appin",
    image: "/images/scotland/scotland-2.jpg",
    description:
      "Winter light settled across Loch Linnhe while Castle Stalker emerged from the mist.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    heading: "Weather becomes part of the landscape.",
    text:
      "Mist, rain and low cloud are not interruptions. They soften the landscape, reveal depth and create the atmosphere that makes Scotland unforgettable.",
  },

  {
    type: "fullscreen",
    image: "/images/scotland/scotland-6.jpg",
    title: "Where the Highlands Become Silent",
    location: "Glencoe",
  },
  <EditorsSelection prints={featuredPrints} />
];

export default galleryData;
import EditorsSelection from "@/components/collections/EditorsSelection";
import galleryData from "@/data/collections/scotland";
import NextCollection from "@/components/collections/NextCollection";