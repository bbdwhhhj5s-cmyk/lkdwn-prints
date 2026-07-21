const galleryData = [
  {
    type: "chapter",
    number: "I",
    title: "The Golden City",
    subtitle:
      "Prague is a city of quiet grandeur. Gothic architecture, winding streets and changing light reveal a place where every return uncovers something new.",
  },

  {
    type: "image",
    number: "01",
    title: "First Light",
    location: "Prague",
    image: "/images/Prague/1.jpg",
    description:
      "The city awakens beneath soft morning light as Prague begins another day.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    heading: "History lives in the light.",
    text:
      "Prague rewards those who slow down. Every bridge, courtyard and hidden street offers another layer of a city shaped by centuries of history.",
    image: "/images/Prague/2.jpg",
  },

  {
    type: "diptych",
    left: {
      image: "/images/Prague/3.jpg",
      title: "Morning Streets",
      location: "Old Town",
    },
    right: {
      image: "/images/Prague/4.jpg",
      title: "Architectural Detail",
      location: "Malá Strana",
    },
  },

  {
    type: "quote",
    quote:
      "Some cities are visited. Prague is discovered.",
    author: "LKDWN Prints",
  },

  {
    type: "image",
    number: "02",
    title: "Across the Vltava",
    location: "Charles Bridge",
    image: "/images/Prague/5.jpg",
    description:
      "Evening light settles across the Vltava as the skyline reflects centuries of architectural history.",
    medium: "Fine Art Giclée Print",
    printSizes: ["A4", "A3", "A2", "A1"],
  },

  {
    type: "story",
    reverse: true,
    heading: "Every season tells another story.",
    text:
      "Mist, rain, snow and evening light continually reshape the atmosphere of Prague, ensuring no two visits are ever the same.",
    image: "/images/Prague/6.jpg",
  },

  {
    type: "fullscreen",
    image: "/images/Prague/7.jpg",
    title: "Blue Hour over Prague",
    location: "Prague Castle",
  },
];

export default galleryData;