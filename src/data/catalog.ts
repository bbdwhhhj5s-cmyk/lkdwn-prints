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
  heroImage: string;
  heroAlt: string;
  seoTitle: string;
  seoDescription: string;
  artworks: Artwork[];
};

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
  "life-along-the-seine": "life-along-the-seine",
  metropolitain: "metropolitain",
  "triumph-in-stone": "triumph-in-stone",
  "eiffel-sky": "eiffel-sky",
  "paris-rooftops": "paris-rooftops",
  "crossing-lines": "crossing-lines",
  "cafe-sagres": "cafe-sagres",
  "douro-from-above": "douro-from-above",
  "towers-over-the-valley": "towers-over-the-valley",
  "iron-over-the-douro": "iron-over-the-douro",
  "ribeira-geometry": "ribeira-geometry",
  "rabelo-on-the-douro": "rabelo-on-the-douro",
  "sanctuary-in-gold": "sanctuary-in-gold",
  "ribeira-and-the-bridge": "ribeira-and-the-bridge",
  "blue-hour-on-the-douro": "blue-hour-on-the-douro",
  "weathered-porto": "weathered-porto",
  "above-the-ribeira": "above-the-ribeira",
  "saint-above-the-city": "saint-above-the-city",
  "canal-through-mala-strana": "canal-through-mala-strana",
  "balloon-over-mala-strana": "balloon-over-mala-strana",
  "prague-through-the-trees": "prague-through-the-trees",
  "red-roofs-of-prague": "red-roofs-of-prague",
  "sky-lines": "sky-lines",
  "st-nicholas-rising": "st-nicholas-rising",
  "stone-witness": "stone-witness",
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

const portoArtwork = ({
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
  collection: "porto",
  location,
  image,
  alt: `${title}, a fine art photograph from ${location}`,
  description,
  orientation,
  gallery: galleryForArtwork(slug, image),
});

const pragueArtwork = ({
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
  collection: "prague",
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
    location: "Avenue des Champs-Élysées",
    image: "/images/paris/life-along-the-seine.jpg",
    description:
      "Parisian fashion houses rise beneath a richly textured sky crossed by luminous trails.",
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
    title: "Eiffel Afloat",
    location: "River Seine",
    image: "/images/paris/eiffel-afloat.jpg",
    description:
      "The Eiffel Tower appears through the glass and reflections of a riverboat crossing the Seine.",
    orientation: "portrait",
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
    image: "/images/paris/paris-rooftops.jpg",
    description:
      "A layered view across zinc rooftops, balconies and tree-lined Parisian streets.",
    orientation: "portrait",
  }),
];

const portoArtworks: Artwork[] = [
  portoArtwork({
    slug: "crossing-lines",
    title: "Crossing Lines",
    location: "Porto",
    image: "/images/porto/porto-1.jpg",
    description:
      "Pedestrians cast long shadows across the graphic lines of a Porto crossing.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "cafe-sagres",
    title: "Café Sagres",
    location: "Porto",
    image: "/images/porto/porto-2.jpg",
    description:
      "Timeworn stone, red tile and shuttered windows frame a traditional Porto café.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "douro-from-above",
    title: "Douro From Above",
    location: "Douro",
    image: "/images/porto/porto-3.jpg",
    description:
      "Terracotta roofs descend toward the Douro in a sweeping view across the city.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "towers-over-the-valley",
    title: "Towers Over the Valley",
    location: "Porto",
    image: "/images/porto/porto-4.jpg",
    description:
      "Twin church towers rise beyond a green hillside beneath sculpted Atlantic clouds.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "iron-over-the-douro",
    title: "Iron Over the Douro",
    location: "Dom Luís I Bridge",
    image: "/images/porto/porto-5.jpg",
    description:
      "The layered ironwork of Dom Luís I Bridge spans the Douro and the city beyond.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "ribeira-geometry",
    title: "Ribeira Geometry",
    location: "Ribeira",
    image: "/images/porto/porto-6.jpg",
    description:
      "White walls, tiled roofs and vivid façades form a tightly layered riverside pattern.",
    orientation: "landscape",
  }),
  portoArtwork({
    slug: "rabelo-on-the-douro",
    title: "Rabelo on the Douro",
    location: "Douro",
    image: "/images/porto/porto-7.jpg",
    description:
      "A traditional rabelo boat moves quietly across the broad water of the Douro.",
    orientation: "landscape",
  }),
  portoArtwork({
    slug: "sanctuary-in-gold",
    title: "Sanctuary in Gold",
    location: "Porto",
    image: "/images/porto/porto-8.jpg",
    description:
      "Warm light reveals gilded ornament, painted ceilings and the layered geometry of a Porto church.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "ribeira-and-the-bridge",
    title: "Ribeira and the Bridge",
    location: "Douro",
    image: "/images/porto/porto-9.jpg",
    description:
      "The colourful Ribeira waterfront follows the Douro toward the arch of Dom Luís I Bridge.",
    orientation: "landscape",
  }),
  portoArtwork({
    slug: "blue-hour-on-the-douro",
    title: "Blue Hour on the Douro",
    location: "Douro",
    image: "/images/porto/porto-10.jpg",
    description:
      "Rabelo boats rest on blue water as the first city lights shimmer across the Douro.",
    orientation: "landscape",
  }),
  portoArtwork({
    slug: "weathered-porto",
    title: "Weathered Porto",
    location: "Porto",
    image: "/images/porto/porto-11.jpg",
    description:
      "Iron balconies, patterned stone and ochre plaster carry the texture of generations.",
    orientation: "portrait",
  }),
  portoArtwork({
    slug: "above-the-ribeira",
    title: "Above the Ribeira",
    location: "Ribeira",
    image: "/images/porto/porto-12.jpg",
    description:
      "A hillside church stands above the stacked façades of Porto's historic riverside.",
    orientation: "portrait",
  }),
];

const pragueArtworks: Artwork[] = [
  pragueArtwork({
    slug: "saint-above-the-city",
    title: "Saint Above the City",
    location: "Malá Strana",
    image: "/images/prague/prague-1.jpg",
    description:
      "A weathered saint stands above Prague's red roofs as the Gothic spires of St Vitus Cathedral rise beyond.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "canal-through-mala-strana",
    title: "Canal Through Malá Strana",
    location: "Čertovka Canal",
    image: "/images/prague/prague-2.jpg",
    description:
      "Warm afternoon light follows the quiet canal between the old houses and gardens of Malá Strana.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "balloon-over-mala-strana",
    title: "Balloon Over Malá Strana",
    location: "Malá Strana",
    image: "/images/prague/prague-3.jpg",
    description:
      "A solitary balloon hangs above the rooftops in a graphic study of line, scale and open sky.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "prague-through-the-trees",
    title: "Prague Through the Trees",
    location: "Petřín",
    image: "/images/prague/prague-4.jpg",
    description:
      "The Old Town and the Vltava appear through a dark frame of trees high above the city.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "red-roofs-of-prague",
    title: "Red Roofs of Prague",
    location: "Malá Strana",
    image: "/images/prague/prague-5.jpg",
    description:
      "Terracotta roofs and ornamented façades gather into a dense pattern across the historic quarter.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "sky-lines",
    title: "Sky Lines",
    location: "Prague",
    image: "/images/prague/prague-6.jpg",
    description:
      "White trails rise above a classical façade, drawing bold lines through the clear Prague sky.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "st-nicholas-rising",
    title: "St Nicholas Rising",
    location: "Malá Strana",
    image: "/images/prague/prague-7.jpg",
    description:
      "The clock tower and green dome of St Nicholas Church rise between the close-set streets of Malá Strana.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "stone-witness",
    title: "Stone Witness",
    location: "Charles Bridge",
    image: "/images/prague/prague-9.jpg",
    description:
      "A timeworn figure watches over the Vltava with Prague Castle held softly in the distance.",
    orientation: "portrait",
  }),
  pragueArtwork({
    slug: "cathedral-under-storm",
    title: "Cathedral Under Storm",
    location: "Prague Castle",
    image: "/images/prague/prague-10.jpg",
    description:
      "St Vitus Cathedral and Prague Castle stand beneath a turbulent sky above the roofs of Malá Strana.",
    orientation: "landscape",
  }),
  pragueArtwork({
    slug: "the-painted-house",
    title: "The Painted House",
    location: "Prague",
    image: "/images/prague/prague-11.jpg",
    description:
      "Painted figures, flowers and classical ornament turn a Prague façade into an intricate urban tapestry.",
    orientation: "landscape",
  }),
  pragueArtwork({
    slug: "looking-up-in-prague",
    title: "Looking Up in Prague",
    location: "Old Town",
    image: "/images/prague/prague-12.jpg",
    description:
      "A modern street lamp and a historic façade converge in a sharply angled view toward a deep blue sky.",
    orientation: "landscape",
  }),
];

export const collections: Collection[] = [
  {
    slug: "scotland",
    name: "Scotland",
    title: "Where Weather Becomes Light.",
    description:
      "Fine art landscape photography captured throughout the Scottish Highlands.",
    heroImage: "/images/scotland/glencoe-editorial.jpg",
    heroAlt: "A dramatic mountain landscape in the Scottish Highlands",
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
    heroImage: "/images/paris/across-the-seine.jpg",
    heroAlt: "Paris and the Eiffel Tower beneath a dramatic sky",
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
    heroImage: "/images/porto/porto-9.jpg",
    heroAlt: "Porto's Ribeira and the Dom Luís I Bridge above the Douro",
    seoTitle: "Porto Fine Art Photography",
    seoDescription:
      "Explore museum-quality photography of Porto's riverside, tiled facades and Atlantic light.",
    artworks: portoArtworks,
  },
  {
    slug: "prague",
    name: "Prague",
    title: "Stone, Spire and Shadow.",
    description:
      "A photographic study of Prague's Gothic silhouettes, red roofs and richly layered streets.",
    heroImage: "/images/prague/prague-10.jpg",
    heroAlt: "St Vitus Cathedral and Prague Castle beneath a dramatic sky",
    seoTitle: "Prague Fine Art Photography",
    seoDescription:
      "Explore museum-quality architectural and city photography from Prague, including Malá Strana, Charles Bridge and Prague Castle.",
    artworks: pragueArtworks,
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
  "porto-1": "crossing-lines",
  "porto-2": "cafe-sagres",
  "porto-3": "douro-from-above",
  "porto-4": "towers-over-the-valley",
  "porto-5": "iron-over-the-douro",
  "porto-6": "ribeira-geometry",
  "porto-7": "rabelo-on-the-douro",
  "porto-8": "sanctuary-in-gold",
  "porto-9": "ribeira-and-the-bridge",
  "porto-10": "blue-hour-on-the-douro",
  "porto-11": "weathered-porto",
  "porto-12": "above-the-ribeira",
  "prague-1": "saint-above-the-city",
  "prague-2": "canal-through-mala-strana",
  "prague-3": "balloon-over-mala-strana",
  "prague-4": "prague-through-the-trees",
  "prague-5": "red-roofs-of-prague",
  "prague-6": "sky-lines",
  "prague-7": "st-nicholas-rising",
  "prague-8": "st-nicholas-rising",
  "prague-9": "stone-witness",
  "prague-10": "cathedral-under-storm",
  "prague-11": "the-painted-house",
  "prague-12": "looking-up-in-prague",
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
