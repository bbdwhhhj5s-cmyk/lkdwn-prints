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
  gallery: string[];
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

const mockupGalleries: Partial<Record<string, string>> = {
  "buachaille-etive-mor": "buachaille-etive-mor",
  "rannoch-moor": "rannoch-moor",
  "castle-stalker-by-moonlight": "castle-stalker-by-moonlight",
  "light-after-the-storm": "light-after-the-storm",
  "glenfinnan-monument": "glenfinnan-monument",
  "castle-stalker": "castle-stalker",
  "glasgow-green": "glasgow-green",
  "highland-reflections": "highland-reflections",
  "highland-light": "highland-light",
  "winter-light": "winter-light",
  "mountain-silence": "mountain-silence",
  "the-clyde": "the-clyde",
  "eiffel-ironwork": "eiffel-ironwork",
  "passage-into-light": "passage-into-light",
  "across-the-seine": "across-the-seine",
  "rue-de-buci": "rue-de-buci",
  "beneath-the-pyramid": "beneath-the-pyramid",
  "arc-against-the-storm": "arc-against-the-storm",
  metropolitain: "metropolitain",
};

const galleryForArtwork = (slug: string, image: string) => {
  const mockupDirectory = mockupGalleries[slug];

  if (!mockupDirectory) {
    return [image];
  }

  return [
    image,
    `/images/mockups/${mockupDirectory}/living-room.jpg`,
    `/images/mockups/${mockupDirectory}/boutique-hotel.jpg`,
    `/images/mockups/${mockupDirectory}/executive-office.jpg`,
    `/images/mockups/${mockupDirectory}/collector-detail.jpg`,
  ];
};

const numberedArtworks = (
  collection: CollectionSlug,
  count: number,
  location: string,
  portraitNumbers: number[] = [],
): Artwork[] =>
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const slug = `${collection}-${number}`;
    const image = `/images/${collection}/${slug}.jpg`;

    return {
      slug,
      title: titleFromSlug(slug),
      collection,
      location,
      image,
      alt: `Fine art photograph from ${location}, artwork ${number}`,
      description: `A museum-quality fine art photograph from ${location}.`,
      orientation: portraitNumbers.includes(number) ? "portrait" : "landscape",
      gallery: galleryForArtwork(slug, image),
    };
  });

const scotlandArtwork = ({
  slug,
  title,
  location,
  image,
  description,
}: Pick<
  Artwork,
  "slug" | "title" | "location" | "image" | "description"
>): Artwork => ({
  slug,
  title,
  collection: "scotland",
  location,
  image,
  alt: `${title}, a fine art photograph from ${location}`,
  description,
  orientation: "landscape",
  gallery: galleryForArtwork(slug, image),
});

const parisArtwork = ({
  slug,
  title,
  location,
  image,
  description,
  orientation,
}: Pick<
  Artwork,
  "slug" | "title" | "location" | "image" | "description" | "orientation"
>): Artwork => ({
  slug,
  title,
  collection: "paris",
  location,
  image,
  alt: `${title}, a fine art photograph from ${location}`,
  description,
  orientation,
  gallery: galleryForArtwork(slug, image),
});

const scotlandArtworks: Artwork[] = [
  scotlandArtwork({
    slug: "buachaille-etive-mor",
    title: "Buachaille Etive Mòr",
    location: "Glencoe",
    image: "/images/scotland/glencoe.jpg",
    description:
      "Morning mist rolled across Rannoch Moor before Buachaille Etive Mòr emerged from cloud.",
  }),
  scotlandArtwork({
    slug: "rannoch-moor",
    title: "Rannoch Moor",
    location: "Highlands",
    image: "/images/scotland/scotland-1.jpg",
    description:
      "Low cloud drifted across Rannoch Moor as the first light reached the distant hills.",
  }),
  scotlandArtwork({
    slug: "castle-stalker-by-moonlight",
    title: "Castle Stalker by Moonlight",
    location: "Appin",
    image: "/images/scotland/scotland-2.jpg",
    description:
      "Castle Stalker standing in silence beneath an evening sky.",
  }),
  scotlandArtwork({
    slug: "light-after-the-storm",
    title: "Light After the Storm",
    location: "Glencoe",
    image: "/images/scotland/scotland-3.jpg",
    description:
      "Sunlight briefly broke through heavy cloud following an afternoon storm.",
  }),
  scotlandArtwork({
    slug: "glenfinnan-monument",
    title: "Glenfinnan Monument",
    location: "Loch Shiel",
    image: "/images/scotland/glenfinnan-monument.jpg",
    description:
      "The Glenfinnan Monument overlooking Loch Shiel beneath dramatic Highland skies.",
  }),
  scotlandArtwork({
    slug: "castle-stalker",
    title: "Castle Stalker",
    location: "Appin",
    image: "/images/scotland/castle-stalker-winter.jpg",
    description:
      "Castle Stalker reflected in calm coastal waters beneath a dramatic Highland sky.",
  }),
  scotlandArtwork({
    slug: "glasgow-green",
    title: "Glasgow Green",
    location: "Glasgow",
    image: "/images/scotland/glasgow-green.jpg",
    description:
      "Autumn colour surrounding one of Glasgow's most historic public parks.",
  }),
  scotlandArtwork({
    slug: "highland-reflections",
    title: "Highland Reflections",
    location: "Scottish Highlands",
    image: "/images/scotland/scotland-6.jpg",
    description:
      "Still water mirrored the surrounding landscape as dawn gradually lifted the mist.",
  }),
  scotlandArtwork({
    slug: "winter-light",
    title: "Winter Light",
    location: "Highlands",
    image: "/images/scotland/scotland-11.jpg",
    description:
      "Soft winter light settled across the landscape after an overnight frost.",
  }),
  scotlandArtwork({
    slug: "the-clyde",
    title: "The Clyde",
    location: "Glasgow",
    image: "/images/scotland/scotland-9.jpg",
    description:
      "Evening light reflected across the River Clyde beneath Glasgow's modern skyline.",
  }),
  scotlandArtwork({
    slug: "highland-light",
    title: "Highland Light",
    location: "Scottish Highlands",
    image: "/images/scotland/scotland-23.jpg",
    description:
      "Breaking light illuminated the Highland landscape beneath dramatic cloud.",
  }),
  scotlandArtwork({
    slug: "mountain-silence",
    title: "Mountain Silence",
    location: "Scottish Highlands",
    image: "/images/scotland/scotland-7.jpg",
    description:
      "A quiet study of Scotland's changing mountain light.",
  }),
];

const parisArtworks: Artwork[] = [
  parisArtwork({
    slug: "eiffel-ironwork",
    title: "Eiffel Ironwork",
    location: "Champ de Mars",
    image: "/images/paris/paris-1.jpg",
    description:
      "The intricate iron structure of the Eiffel Tower seen from beneath its sweeping arches.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "passage-into-light",
    title: "Passage Into Light",
    location: "Saint-Germain-des-Prés",
    image: "/images/paris/paris-2.jpg",
    description:
      "A shaded Parisian passage opens onto café tables and the bright green canopy beyond.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "across-the-seine",
    title: "Across the Seine",
    location: "River Seine",
    image: "/images/paris/across-the-seine.jpg",
    description:
      "The Eiffel Tower rises beyond the Seine beneath a dramatic break in the evening clouds.",
    orientation: "landscape",
  }),
  parisArtwork({
    slug: "rue-de-buci",
    title: "Rue de Buci",
    location: "Saint-Germain-des-Prés",
    image: "/images/paris/paris-4.jpg",
    description:
      "A spontaneous street-level view of daily life along the lively Rue de Buci.",
    orientation: "landscape",
  }),
  parisArtwork({
    slug: "beneath-the-pyramid",
    title: "Beneath the Pyramid",
    location: "Musée du Louvre",
    image: "/images/paris/paris-5.jpg",
    description:
      "The Louvre's historic architecture is framed by the geometric lattice of its glass pyramid.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "arc-against-the-storm",
    title: "Arc Against the Storm",
    location: "Place Charles de Gaulle",
    image: "/images/paris/arc-against-the-storm.jpg",
    description:
      "The Arc de Triomphe stands in stark monochrome beneath a gathering storm.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "life-along-the-seine",
    title: "Life Along the Seine",
    location: "River Seine",
    image: "/images/paris/paris-7.jpg",
    description:
      "A vivid houseboat rests beneath the trees and iron bridges lining the Seine.",
    orientation: "landscape",
  }),
  parisArtwork({
    slug: "metropolitain",
    title: "Métropolitain",
    location: "Paris Métro",
    image: "/images/paris/metropolitain.jpg",
    description:
      "A classic Art Nouveau Métropolitain sign reaches into a turbulent Paris sky.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "triumph-in-stone",
    title: "Triumph in Stone",
    location: "Place Charles de Gaulle",
    image: "/images/paris/paris-9.jpg",
    description:
      "Sculpture, shadow and monumental stone define a close study of the Arc de Triomphe.",
    orientation: "landscape",
  }),
  parisArtwork({
    slug: "eiffel-sky",
    title: "Eiffel Sky",
    location: "Champ de Mars",
    image: "/images/paris/paris-10.jpg",
    description:
      "The Eiffel Tower rises into a sky crossed by luminous trails of cloud.",
    orientation: "portrait",
  }),
  parisArtwork({
    slug: "paris-rooftops",
    title: "Paris Rooftops",
    location: "Paris",
    image: "/images/paris/paris-11.jpg",
    description:
      "A layered view across zinc rooftops, balconies and tree-lined Parisian streets.",
    orientation: "portrait",
  }),
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
    artworks: parisArtworks,
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

export const artworkAliases: Record<string, string> = {
  glencoe: "buachaille-etive-mor",
  "scotland-1": "rannoch-moor",
  "scotland-2": "castle-stalker-by-moonlight",
  "scotland-3": "light-after-the-storm",
  "scotland-4": "glenfinnan-monument",
  "scotland-5": "castle-stalker",
  "scotland-6": "glasgow-green",
  "scotland-7": "mountain-silence",
  "scotland-8": "winter-light",
  "scotland-9": "the-clyde",
  "scotland-10": "highland-light",
  "scotland-11": "winter-light",
  "scotland-23": "highland-light",
  "scotland-25": "glasgow-green",
  "paris-1": "eiffel-ironwork",
  "paris-2": "passage-into-light",
  "paris-3": "across-the-seine",
  "paris-4": "rue-de-buci",
  "paris-5": "beneath-the-pyramid",
  "paris-6": "arc-against-the-storm",
  "paris-7": "life-along-the-seine",
  "paris-8": "metropolitain",
  "paris-9": "triumph-in-stone",
  "paris-10": "eiffel-sky",
  "paris-11": "paris-rooftops",
};

export const getArtwork = (slug: string) =>
  artworks.find(
    (artwork) => artwork.slug === (artworkAliases[slug] ?? slug),
  );

export const getCollection = (slug: string) =>
  collections.find((collection) => collection.slug === slug);

export const getCollectionSelection = (collection: Collection) =>
  collection.artworks.slice(0, 12);

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
