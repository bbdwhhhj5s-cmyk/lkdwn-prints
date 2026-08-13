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
  sections?: {
    heading: string;
    paragraphs: string[];
  }[];
  featuredArtworks?: {
    slug: string;
    title: string;
    description: string;
  }[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "porto-in-blue-and-gold",
    title: "Porto in Blue and Gold: Photographing the City’s Light and Architecture",
    excerpt:
      "A photographic journey through Porto’s riverside light, tiled façades and the shifting colours of the Douro.",
    description:
      "John McHugh reflects on photographing Porto, from the blue hour on the Douro to the city’s ochre façades, tiled architecture and layered riverside light.",
    publishedAt: "2026-08-13",
    location: "Porto, Portugal",
    image: "/images/porto/porto-9.jpg",
    imageAlt:
      "Porto's colourful Ribeira waterfront and Dom Luís I Bridge beside the Douro",
    imageOrientation: "landscape",
    collectionSlug: "porto",
    collectionLabel: "Explore the Porto Collection",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "Porto is a city of colour, but it is the light that holds everything together.",
          "Blue tiles, ochre plaster, red roofs and dark iron balconies gather along steep streets before descending towards the Douro. As the day changes, those colours move between brightness and shadow, warmth and coolness, detail and silhouette.",
          "That constant change is what draws me through the city with a camera. Porto never feels like one fixed view. It reveals itself through layers.",
        ],
      },
      {
        heading: "The Douro as a line through the city",
        paragraphs: [
          "The river gives Porto its sense of space.",
          "From above, the Douro separates and connects the city at the same time. At street level, it reflects façades, bridges, boats and changing skies. The traditional rabelo boats introduce a quieter rhythm against the dense architecture of the Ribeira.",
          "I often use the river as a visual path through a photograph. It leads the eye towards the city, creates breathing room around the architecture and records the colour of the light in a way that stone cannot.",
        ],
      },
      {
        heading: "Blue hour and golden stone",
        paragraphs: [
          "The transition between daylight and evening is particularly important in Porto.",
          "As the sky cools towards blue, the first lights appear along the river and the warmer surfaces of the city begin to glow. The contrast does not last long, but for a few minutes Porto seems to hold two kinds of light at once.",
          "Those moments are less about photographing darkness than balancing colour: the cool atmosphere of the river against the gold and terracotta of the city.",
        ],
      },
      {
        heading: "Architecture shaped by time",
        paragraphs: [
          "Porto’s buildings are compelling because they carry visible histories.",
          "Patterned tiles sit beside weathered plaster. Iron balconies project from narrow façades. Churches rise above closely packed roofs, while the structure of Dom Luís I Bridge cuts a bold industrial line across the older city.",
          "I am interested in those contrasts rather than perfection. Wear, repair and irregularity give the architecture a human presence. They turn a building from a subject into evidence of the lives that have passed through it.",
        ],
      },
      {
        heading: "Finding order in a layered place",
        paragraphs: [
          "Porto can appear visually crowded. Roofs overlap, streets climb sharply and façades compete for attention.",
          "The challenge is to find a structure within that density. Sometimes it comes from repeated windows or rooflines. Sometimes a figure, a shadow or a single bright wall gives the composition its centre.",
          "The photograph begins when those separate elements stop feeling accidental and start speaking to one another.",
        ],
      },
      {
        heading: "The creative process continues",
        paragraphs: [
          "What the camera records is the beginning of the final image.",
          "When I return to a Porto photograph, I work to preserve the relationship between its colours and its atmosphere. I may hold detail in a bright façade, deepen the blue of the river or simplify a busy area so that the movement through the photograph becomes clearer.",
          "The aim is not to polish away the character of the city. It is to give more life to the moment and shape the story that first made me stop.",
        ],
      },
      {
        heading: "Living with a Porto photograph",
        paragraphs: [
          "Porto prints can bring warmth and architectural character into an interior without becoming decorative in the ordinary sense.",
          "A wide view of the Ribeira and bridge creates openness and works naturally above a sofa, bed or desk. A portrait study of a weathered façade or hillside church brings height, texture and a more intimate sense of place.",
          "What matters most is the feeling you return to: the calm of the river, the energy of the streets, or the particular balance of blue and gold that belongs to Porto.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "ribeira-and-the-bridge",
        title: "Ribeira and the Bridge",
        description:
          "The colourful Ribeira waterfront follows the Douro towards the arch of Dom Luís I Bridge.",
      },
      {
        slug: "blue-hour-on-the-douro",
        title: "Blue Hour on the Douro",
        description:
          "Rabelo boats rest on blue water as the first city lights shimmer across the river.",
      },
      {
        slug: "weathered-porto",
        title: "Weathered Porto",
        description:
          "Iron balconies, patterned stone and ochre plaster carrying the texture of generations.",
      },
    ],
  },
  {
    slug: "photographing-paris-beyond-the-postcard",
    title: "Photographing Paris Beyond the Postcard",
    excerpt:
      "Looking past the familiar landmarks to find quieter moments of light, architecture and everyday life in Paris.",
    description:
      "John McHugh reflects on photographing Paris beyond its familiar postcard views, exploring changing light, architecture and everyday life through fine art photography.",
    publishedAt: "2026-08-13",
    location: "Paris, France",
    image: "/images/paris/across-the-seine.jpg",
    imageAlt:
      "The Eiffel Tower seen across the River Seine beneath dramatic evening clouds",
    imageOrientation: "landscape",
    collectionSlug: "paris",
    collectionLabel: "Explore the Paris Collection",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "Paris arrives with its own collection of familiar images. The Eiffel Tower, the Seine, café terraces and pale stone façades have been photographed countless times.",
          "That familiarity is both the attraction and the challenge. I am not trying to pretend those landmarks do not matter. I am trying to look beyond the version of Paris that already exists in our minds and find a moment that feels personally observed.",
          "Sometimes that moment is hidden in a reflection, a passing figure or a sudden change in the sky. Sometimes it appears when a well-known structure is seen from an unfamiliar angle.",
        ],
      },
      {
        heading: "Looking beyond the landmark",
        paragraphs: [
          "A landmark can easily dominate a photograph. Its reputation arrives before the image does.",
          "I find it more interesting when the Eiffel Tower or the Louvre becomes part of a larger visual relationship: ironwork against open sky, architecture seen through glass, or a distant silhouette held beneath changing weather.",
          "The place remains recognisable, but recognition is only the beginning. The photograph needs its own structure, atmosphere and reason to exist.",
        ],
      },
      {
        heading: "Paris is built from layers",
        paragraphs: [
          "Paris rewards looking up, looking through and looking across.",
          "Old stone sits beside glass and steel. Art Nouveau entrances rise into turbulent skies. Zinc rooftops, balconies, trees and streets gather into dense layers that change as you move through the city.",
          "These relationships are often more compelling to me than a clear view of a single monument. They describe how the city feels: ordered and accidental, historic and contemporary, monumental and intimate at the same time.",
        ],
      },
      {
        heading: "Waiting for the city to change",
        paragraphs: [
          "Even in a busy city, photography asks for patience.",
          "Light moves across façades. Clouds gather above the Seine. A street briefly clears, or a person enters the frame and gives scale to the architecture around them.",
          "Those small changes can turn a familiar scene into something that belongs to a particular moment. The photograph is made not only from where I stand, but from deciding when the relationships inside the frame have come together.",
        ],
      },
      {
        heading: "From observation to interpretation",
        paragraphs: [
          "The camera records the raw material, but the finished photograph continues to take shape afterwards.",
          "When I return to the image, I work with tone, colour, contrast and atmosphere. I may draw attention towards light reflected on the river, hold detail in a dramatic sky or simplify competing elements so that the structure of the photograph becomes clearer.",
          "This is not separate from the act of photographing. It is another part of the same creative process: giving the image more life and allowing a new story to emerge from the original moment.",
        ],
      },
      {
        heading: "A Paris print within a home",
        paragraphs: [
          "Paris photography can bring very different qualities into a room.",
          "A landscape view across the Seine creates space and atmosphere. A portrait study of ironwork or architecture has a more graphic presence and can suit a narrower wall. Street scenes can introduce colour, movement and the feeling of everyday life.",
          "The strongest choice is not necessarily the most recognisable view. It is the photograph that continues to hold your attention after the first glance and gives you something new each time you return to it.",
        ],
      },
      {
        heading: "The city beyond the postcard",
        paragraphs: [
          "For me, photographing Paris is not about avoiding beauty or familiarity. It is about staying with the city long enough for those familiar surfaces to shift.",
          "Beyond the postcard is another Paris: one made from weather, geometry, reflections and brief human moments.",
          "That is the Paris I want the finished prints to hold — recognisable, but never entirely predictable.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "across-the-seine",
        title: "Across the Seine",
        description:
          "The Eiffel Tower rises beyond the river beneath a dramatic break in the evening clouds.",
      },
      {
        slug: "eiffel-ironwork",
        title: "Eiffel Ironwork",
        description:
          "The structure of the Eiffel Tower seen from beneath its sweeping iron arches.",
      },
      {
        slug: "metropolitain",
        title: "Métropolitain",
        description:
          "A classic Art Nouveau Métropolitain sign reaching into a turbulent Paris sky.",
      },
    ],
  },
  {
    slug: "fine-art-photography-prints-scotland",
    title:
      "Fine Art Photography Prints of Scotland: Choosing a Landscape for Your Home",
    excerpt:
      "How scale, orientation and atmosphere can help you choose a Scottish landscape photograph that becomes part of your home.",
    description:
      "Discover how to choose a Scottish fine art photography print for your home, from atmospheric Glencoe landscapes to dramatic Highland light, scale and framing.",
    publishedAt: "2026-08-13",
    location: "Scotland",
    image: "/images/scotland/scotland-3.jpg",
    imageAlt:
      "Sunlight breaking through dramatic storm clouds over the Scottish landscape",
    imageOrientation: "landscape",
    collectionSlug: "scotland",
    collectionLabel: "Explore the Scotland Collection",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "There is something about the Scottish landscape that refuses to remain simply a view.",
          "Weather changes quickly. Light moves across mountains and lochs. A familiar place can feel entirely different from one hour to the next. For me, that unpredictability is part of the attraction of photographing Scotland — and part of what makes a Scottish landscape photograph work so well within a home.",
          "Choosing a fine art print is not simply about finding a photograph that matches a sofa or fills an empty wall. The strongest pieces create an atmosphere. They remind us of a place, a journey, a memory, or sometimes a feeling that is difficult to explain.",
          "A landscape becomes part of the room.",
        ],
      },
      {
        heading: "Start with the feeling, not the colour scheme",
        paragraphs: [
          "It is tempting to choose artwork by matching colours already present in an interior. That can work, but it is rarely where I would begin.",
          "Instead, ask what you want the room to feel like.",
          "A photograph of Glencoe beneath heavy weather can bring drama and depth to a quiet room. Reflections across Highland water can create something more contemplative. Warm evening light can soften a contemporary interior, while a more graphic architectural photograph can add structure and contrast.",
          "The photograph does not need to disappear into the room. Often, the most successful piece is the one that introduces something the room did not already have.",
          "That might be movement. Stillness. Scale. Or simply a sense of somewhere beyond the walls.",
        ],
      },
      {
        heading: "Why Scottish landscapes work particularly well as large prints",
        paragraphs: [
          "Scotland has a natural sense of scale.",
          "Mountains, open skies, valleys and changing weather often need space to breathe. When a landscape photograph is printed larger, small details begin to emerge: buildings beneath a mountain, light crossing a hillside, mist separating one ridge from another.",
          "A larger print also changes the relationship between the viewer and the photograph. Instead of looking at a small image on a wall, you begin to feel as though you are looking into a place.",
          "For larger living rooms, hallways and commercial interiors, an A1 or A0 fine art print can become the focal point of the space. An A2 print can work beautifully in a more intimate room, above a console, beside a reading chair or as part of a carefully considered group of objects.",
          "The important thing is proportion. The artwork should have enough presence to hold the wall without overwhelming the room.",
        ],
      },
      {
        heading: "Portrait or landscape?",
        paragraphs: [
          "The orientation of the photograph matters just as much as its size.",
          "Landscape-format photographs naturally suit long walls, spaces above sofas, beds and desks, and rooms where the artwork can stretch visually across the architecture.",
          "Portrait photographs work differently. They draw the eye upward and can be particularly effective between windows, on narrower walls, in hallways or where a room has generous ceiling height.",
          "Neither is better. The architecture of the room usually tells you which format it wants.",
          "At LKDWN Prints, every artwork is presented in its true orientation and within standard A-series proportions. The photograph may be carefully cropped for the final print, but it is never stretched or distorted to fit an artificial frame. The integrity of the original image always comes first.",
        ],
      },
      {
        heading: "Choosing between dramatic and quiet landscapes",
        paragraphs: [
          "Not every Scottish photograph has to be dark and brooding.",
          "Scotland certainly provides drama — particularly around Glencoe, Rannoch Moor and the Highlands — but the landscape also contains moments of remarkable calm.",
          "A photograph such as Buachaille Etive Mòr can bring a strong sense of place and scale into a room. The mountain is immediately recognisable, but what interests me just as much is the atmosphere around it: cloud, mist, changing light and the feeling of arriving in the Highlands.",
          "Other images work more quietly. Water, reflections, winter light and distant mountains can create a slower experience. These photographs tend to reveal themselves over time rather than demanding attention immediately.",
          "For a main living space, you may want something with presence. For a bedroom, study or reading space, something quieter may feel more appropriate.",
          "There are no fixed rules, but thinking about how you use the room can make the decision much easier.",
        ],
      },
      {
        heading: "The photograph is only the beginning",
        paragraphs: [
          "Taking the photograph is the beginning of my creative process rather than the end of it.",
          "Once I return to the image, I work with light, colour, contrast and atmosphere to shape the final piece. The aim is not to reproduce exactly what the camera recorded. It is to create the photograph as I remember experiencing the place.",
          "A landscape photograph can be technically accurate and still fail to communicate how a place felt.",
          "The finished print is an interpretation — a combination of the original moment and the work that follows afterwards. For me, that is where photography becomes fine art.",
        ],
      },
      {
        heading: "Think about where you will see the photograph",
        paragraphs: [
          "One useful question when choosing a print is very simple: Where will I see it most often?",
          "A piece hanging opposite the entrance to a room needs to work from a distance. Artwork beside a desk or dining area will be viewed much more closely.",
          "A large photograph above a sofa becomes part of the architecture of the room, while a smaller framed print can create a more personal relationship with the viewer.",
          "Also consider natural light. A photograph containing dramatic skies or deep Highland colours can look particularly beautiful as daylight changes across the room. More delicate images can benefit from quieter spaces where their tonal detail is easier to appreciate.",
          "The best placement allows the photograph to become part of everyday life rather than simply decoration.",
        ],
      },
      {
        heading: "Choose the landscape you keep returning to",
        paragraphs: [
          "Ultimately, I think the best reason to choose a photograph is because something about it stays with you.",
          "Perhaps you know the place. Perhaps you have driven through Glencoe in winter, stood beside a Highland loch, or watched the weather move across Rannoch Moor. Or perhaps you have never been there at all.",
          "That does not matter. A photograph can create its own memory.",
          "The landscapes I photograph mean something to me, but once the finished print leaves my studio, I want the viewer to bring something of their own to it.",
          "The picture begins with my experience of a place. What happens afterwards belongs to whoever chooses to live with it.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "buachaille-etive-mor",
        title: "Buachaille Etive Mòr",
        description:
          "Morning mist, changing Highland weather and one of Scotland's most recognisable mountains.",
      },
      {
        slug: "highland-reflections",
        title: "Highland Reflections",
        description: "A quieter exploration of landscape, water and light.",
      },
      {
        slug: "winter-light",
        title: "Winter Light",
        description:
          "Scottish landscape photography shaped by the restrained colour and atmosphere of winter.",
      },
    ],
  },
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
