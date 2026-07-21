const galleryData = [
  {
    type: "chapter",
    number: "I",
    title: "The City of Light",
    subtitle:
      "Paris is revealed through architecture, quiet streets and changing light. Every visit offers new perspectives on a familiar city.",
  },

  {
    type: "image",
    number: "01",
    title: "Morning in Paris",
    location: "Paris",
    image: "/images/paris/paris.jpg",
    description:
      "Early light settles across the city before the streets begin to fill, revealing the quiet elegance that defines Paris.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    heading: "The city rewards observation.",
    text:
      "Paris is a city best explored on foot. Small details, changing weather and reflected light create photographs that could never be planned.",
    image: "/images/paris/paris-2.jpg",
  },

  {
    type: "diptych",
    left: {
      image: "/images/paris/paris-3.jpg",
      title: "Quiet Streets",
      location: "Le Marais",
    },
    right: {
      image: "/images/paris/paris-4.jpg",
      title: "Architectural Rhythm",
      location: "Paris",
    },
  },

  {
    type: "quote",
    quote:
      "The finest photographs are often found between the landmarks.",
    author: "LKDWN Prints",
  },

  {
    type: "image",
    number: "02",
    title: "Evening Light",
    location: "Paris",
    image: "/images/paris/paris-5.jpg",
    description:
      "As daylight fades, the city slows and its timeless character begins to emerge.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    reverse: true,
    heading: "Every return tells a different story.",
    text:
      "The atmosphere of Paris changes with every season and every hour. Returning again and again reveals a city that is never quite the same.",
    image: "/images/paris/paris-6.jpg",
  },

  {
    type: "fullscreen",
    image: "/images/paris/paris-7.jpg",
    title: "Paris at Dusk",
    location: "Paris",
  },
];

export default galleryData;