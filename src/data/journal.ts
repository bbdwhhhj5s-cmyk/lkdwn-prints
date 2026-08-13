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
  relatedLinks?: {
    href: string;
    label: string;
  }[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "portrait-or-landscape-wall-art",
    title: "How to Choose Between Portrait and Landscape Wall Art",
    excerpt:
      "A practical guide to choosing the orientation that suits your wall while allowing the photograph to retain its natural composition.",
    description:
      "Learn how to choose between portrait and landscape wall art, with guidance on room proportions, furniture, print sizes and fine art photography placement.",
    publishedAt: "2026-08-13",
    location: "The Collector’s Guide",
    image: "/images/paris/metropolitain.jpg",
    imageAlt:
      "Portrait fine art photograph of a classic Paris Métropolitain sign against a dramatic sky",
    imageOrientation: "portrait",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "The orientation of a photograph changes the way it occupies a room. A landscape print extends across the wall and creates a broad visual horizon. A portrait print draws the eye upwards and gives a space height, focus and structure.",
          "Choosing between them is partly practical, but it should never mean forcing a photograph into a shape it was not made to fill. The strongest result respects both the architecture of the room and the original composition of the artwork.",
          "Begin with the wall, consider the furniture around it, and then choose a photograph whose natural orientation belongs in that space.",
        ],
      },
      {
        heading: "When landscape wall art works best",
        paragraphs: [
          "Landscape-format art naturally suits walls that are wider than they are tall. It works particularly well above a sofa, bed, sideboard, dining table or desk, where the horizontal shape can relate to the furniture beneath it.",
          "The format is especially effective for photographs built around open skies, coastlines, mountain ranges, rivers and city panoramas. Their width allows the eye to travel through the scene rather than settling immediately on one central subject.",
          "A landscape print does not need to span the entire piece of furniture. Leaving clear wall around the frame gives the photograph presence and keeps the arrangement from feeling crowded.",
        ],
      },
      {
        heading: "When portrait wall art is the stronger choice",
        paragraphs: [
          "Portrait-format art works naturally on narrower walls, between windows, beside a doorway, above a console or in rooms with generous ceiling height.",
          "It can bring balance to spaces that would make a landscape print feel compressed. A strong vertical composition also encourages the eye to move upwards, which can make the architecture around it feel taller and more deliberate.",
          "Portrait photographs often give greater emphasis to a single mountain, tower, figure or architectural detail. Their narrower field of view creates concentration, making them particularly effective in hallways, studies and quieter corners of a room.",
        ],
      },
      {
        heading: "Let the architecture guide you",
        paragraphs: [
          "Before selecting the artwork, look at the shape of the available wall rather than its total area alone.",
          "A long wall above low furniture usually asks for a horizontal relationship. A tall section of wall between architectural features often suits a vertical one. In an open wall without furniture, either orientation may work, but the surrounding doors, windows and sightlines will still influence the balance.",
          "Mark the proposed outer frame dimensions with low-tack tape or paper. View the outline from the entrance to the room and from the position where you will spend most time. The right orientation will usually become clear before the photograph is even in place.",
        ],
      },
      {
        heading: "Orientation and print size work together",
        paragraphs: [
          "An A1 portrait and an A1 landscape use the same paper dimensions, but they feel very different on a wall. The portrait creates height; the landscape creates breadth.",
          "At A2, a portrait print can form an intimate focal point on a narrow wall, while a landscape print can sit quietly above a smaller console or desk. At A1, both formats have enough presence to become principal artworks in most domestic rooms. At A0, orientation becomes an architectural decision because the finished print occupies a substantial part of the wall.",
          "Remember that a mount and frame increase the overall dimensions. Measure for the complete framed artwork, not only the paper size.",
        ],
      },
      {
        heading: "Never stretch a photograph to fit",
        paragraphs: [
          "A portrait photograph should not be widened into a landscape frame, and a landscape photograph should not be compressed into a portrait one.",
          "Stretching changes the relationships within the image: mountains become broader, buildings lose their proportions and people no longer look natural. Even when the distortion is subtle, the photograph loses its integrity.",
          "LKDWN prints retain their true portrait or landscape orientation within consistent A-series proportions. Where a crop is needed for the final print, it is made deliberately within the composition; the image itself is never distorted.",
        ],
      },
      {
        heading: "Consider how the photograph moves",
        paragraphs: [
          "Orientation is not only about fitting a wall. It also affects how the eye moves through the photograph.",
          "A landscape composition often invites a journey from one side to the other: along a shoreline, through a valley or across layers of city architecture. A portrait composition tends to lead upwards or downwards, following a tower, mountain face, street or shaft of light.",
          "Choose the movement that complements the room. A broad landscape can make a seating area feel calm and expansive. A portrait can introduce energy and visual height to a contained space.",
        ],
      },
      {
        heading: "What if either orientation would fit?",
        paragraphs: [
          "Some walls can comfortably support either format. In that case, return to the photograph rather than trying to solve the room as a design exercise.",
          "Which image holds your attention? Which atmosphere do you want to live with? The connection to the artwork matters more than achieving a perfectly conventional arrangement.",
          "A thoughtfully placed portrait can be more memorable above a wide piece of furniture than the expected landscape format. A large landscape can bring openness to a tall room. Proportion provides guidance, but the photograph should still be the reason for the choice.",
        ],
      },
      {
        heading: "Choose the photograph first, then give it space",
        paragraphs: [
          "The most successful wall art does not feel as though it was selected merely to fill a gap.",
          "Choose the photograph whose place, light or atmosphere continues to draw you back. Then give its natural orientation enough room to work. When the wall and the composition support one another, the artwork becomes part of the architecture without losing its own identity.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "metropolitain",
        title: "Métropolitain",
        description:
          "A vertical Paris composition that brings height and graphic structure to a narrower wall.",
      },
      {
        slug: "across-the-seine",
        title: "Across the Seine",
        description:
          "A broad landscape view whose horizon and changing sky suit a wall above low furniture.",
      },
      {
        slug: "weathered-porto",
        title: "Weathered Porto",
        description:
          "A portrait study of Porto architecture with a strong upward rhythm and concentrated detail.",
      },
    ],
    relatedLinks: [
      {
        href: "/journal/choosing-the-right-size-fine-art-print",
        label: "How to choose the right fine art print size",
      },
      {
        href: "/collections",
        label: "Explore all collections",
      },
    ],
  },
  {
    slug: "choosing-the-right-size-fine-art-print",
    title: "How to Choose the Right Size Fine Art Print for Your Wall",
    excerpt:
      "A practical guide to choosing between A2, A1 and A0 fine art prints while keeping the photograph and the room in balance.",
    description:
      "Learn how to choose the right fine art print size for your wall, with practical guidance on A2, A1 and A0 prints, orientation, viewing distance and framing.",
    publishedAt: "2026-08-13",
    location: "The Collector’s Guide",
    image: "/images/mockups/buachaille-etive-mor/living-room.jpg",
    imageAlt:
      "A landscape-format fine art photography print displayed above a sofa in a contemporary living room",
    imageOrientation: "landscape",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "Choosing a photograph is an emotional decision. Choosing its size is a practical one, but it has a considerable effect on how the finished artwork feels within a room.",
          "A print that is too small can become disconnected from the furniture and architecture around it. One that is too large can leave the room without enough space to breathe.",
          "The aim is not simply to fill a wall. It is to give the photograph enough presence for its light, detail and atmosphere to be experienced properly.",
        ],
      },
      {
        heading: "Understanding A2, A1 and A0",
        paragraphs: [
          "LKDWN fine art prints are available in three standard A-series sizes. The proportions remain identical as the print becomes larger, so the relationship between the height and width is always consistent.",
          "A2 measures 42 × 59.4 cm. A1 measures 59.4 × 84.1 cm. A0 measures 84.1 × 118.9 cm. For landscape photographs those measurements are rotated, but the proportion remains the same.",
          "This consistency matters. Portrait photographs remain clearly portrait, landscape photographs remain clearly landscape, and the image is never stretched into an artificial frame shape.",
        ],
      },
      {
        heading: "When A2 works best",
        paragraphs: [
          "A2 is the most intimate of the three sizes.",
          "It works well above a console, beside a reading chair, in a bedroom, study or hallway, and on walls where the photograph will often be seen at close range. It can also suit a smaller living space where a larger print would dominate the architecture.",
          "A2 still carries considerable detail, but its relationship with the viewer is quieter and more personal. It rewards approaching the photograph rather than asking to be the focal point from across the room.",
        ],
      },
      {
        heading: "When to choose A1",
        paragraphs: [
          "A1 is a versatile size for a principal artwork within the home.",
          "It has enough scale to hold the wall above a sofa, bed, sideboard or desk while leaving room around the frame. In many living rooms and bedrooms, it creates the strongest balance between presence and restraint.",
          "For landscapes with open skies, water or distant detail, A1 gives the photograph room to unfold without making the room feel arranged around a single object.",
        ],
      },
      {
        heading: "When A0 becomes the right choice",
        paragraphs: [
          "A0 is intended for a wall that can support a genuinely large photograph.",
          "It suits generous living spaces, entrance halls, stairwells, hospitality settings and commercial interiors where the artwork needs to remain visually strong from a distance.",
          "At this scale, a landscape photograph can begin to feel architectural. Weather, texture and small elements within the scene become more apparent, creating a stronger sense of looking into a place rather than at a picture.",
          "A0 prints are supplied unframed, allowing framing to be selected for the particular room and installation.",
        ],
      },
      {
        heading: "Measure the wall, then consider the furniture",
        paragraphs: [
          "The empty wall is only part of the calculation. Furniture provides the visual anchor beneath or beside the artwork.",
          "Above a sofa, bed or sideboard, the framed work should relate clearly to the width below it without matching it edge to edge. Leaving visible wall around the frame gives the artwork more authority and prevents the arrangement from feeling crowded.",
          "Before choosing, mark the proposed outer dimensions on the wall with low-tack tape or paper. Step back to the position from which you will usually enter or view the room. This simple test is far more reliable than judging dimensions on a screen.",
        ],
      },
      {
        heading: "Portrait and landscape change the balance",
        paragraphs: [
          "Orientation affects how a print occupies the wall even when its paper size is the same.",
          "A landscape print spreads visual weight horizontally and naturally suits spaces above sofas, beds and desks. A portrait print draws the eye upwards and can bring structure to narrower walls, spaces between windows or rooms with generous ceiling height.",
          "Choose the orientation that works with the architecture, but let the photograph remain true to itself. The room should adapt to the artwork rather than forcing the artwork into the wrong shape.",
        ],
      },
      {
        heading: "Think about viewing distance",
        paragraphs: [
          "A print seen from across a room needs enough scale for its main shapes, light and atmosphere to remain clear. A photograph in a hallway or beside a desk can work at a smaller size because the viewer naturally comes closer.",
          "Larger is not automatically better. The right size is the one that allows both the overall composition and the quieter details to be appreciated from the way the room is actually used.",
        ],
      },
      {
        heading: "Allow for the frame",
        paragraphs: [
          "The stated A-size refers to the print itself. A frame and mount increase the final dimensions on the wall.",
          "A2 and A1 photographs can be supplied ready to hang in black or natural wood frames with shatterproof plexiglass. The surrounding frame gives the finished work additional presence, so always consider the complete framed size when planning the wall.",
          "The mount should support the photograph without making it appear square or changing its underlying A-series proportion.",
        ],
      },
      {
        heading: "Choose for the room you live in",
        paragraphs: [
          "There is no single correct size for every home.",
          "A restrained A2 can become the photograph you notice every morning. An A1 can quietly hold a living room together. An A0 can create the experience of standing before a landscape rather than simply viewing it.",
          "The best choice respects both the photograph and the space around it. When those two things are in balance, the print begins to feel as though it has always belonged there.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "buachaille-etive-mor",
        title: "Buachaille Etive Mòr",
        description:
          "A landscape with the scale and atmosphere to work particularly well as a principal A1 or A0 print.",
      },
      {
        slug: "metropolitain",
        title: "Métropolitain",
        description:
          "A strong portrait composition suited to a narrower wall or space with generous height.",
      },
      {
        slug: "blue-hour-on-the-douro",
        title: "Blue Hour on the Douro",
        description:
          "A wide riverside scene whose light and fine detail become increasingly immersive at larger sizes.",
      },
    ],
    relatedLinks: [
      {
        href: "/collections",
        label: "Explore all collections",
      },
      {
        href: "/print-delivery",
        label: "Print, framing and delivery information",
      },
    ],
  },
  {
    slug: "prague-light-stone-and-silence",
    title: "Prague: Light, Stone and Silence",
    excerpt:
      "Photographing Prague through Gothic silhouettes, quiet waterways and the layered traces of time across the city.",
    description:
      "John McHugh reflects on photographing Prague, from the Gothic architecture of Prague Castle to Malá Strana’s red roofs, quiet canals and changing light.",
    publishedAt: "2026-08-13",
    location: "Prague, Czech Republic",
    image: "/images/prague/prague-10.jpg",
    imageAlt:
      "St Vitus Cathedral and Prague Castle beneath a dramatic storm sky",
    imageOrientation: "landscape",
    collectionSlug: "prague",
    collectionLabel: "Explore the Prague Collection",
    paragraphs: [],
    sections: [
      {
        heading: "",
        paragraphs: [
          "Prague often feels as though it has been built from accumulated time.",
          "Gothic spires rise above Baroque domes. Weathered statues stand over the Vltava. Red roofs, painted façades and narrow streets gather closely together, while the city’s history remains visible in stone, plaster and shadow.",
          "It is a place that encourages a slower kind of looking. The most memorable photographs are not always found in its grandest views, but in the relationships between architecture, light and silence.",
        ],
      },
      {
        heading: "A city seen in layers",
        paragraphs: [
          "Prague rarely presents itself as a single clean subject.",
          "A statue may frame the castle beyond it. Trees interrupt a view across the river. Roofs and façades overlap until the city becomes a pattern of colour, texture and changing scale.",
          "Those layers are part of its character. Rather than separating one landmark from everything around it, I look for ways in which the different periods and surfaces of Prague can remain in conversation inside the frame.",
        ],
      },
      {
        heading: "Stone beneath a changing sky",
        paragraphs: [
          "The architecture of Prague can feel permanent, but the weather continually changes how it is seen.",
          "St Vitus Cathedral beneath a gathering storm becomes something different from the same building in clear morning light. Deep cloud can simplify the city into silhouette, while a sudden break in the sky reveals ornament, towers and distant rooftops.",
          "I am drawn to that contrast between the endurance of stone and the brief life of light around it.",
        ],
      },
      {
        heading: "Quiet places within the city",
        paragraphs: [
          "Prague is not only monumental.",
          "Along the Čertovka Canal, water moves quietly between old houses and gardens. In Malá Strana, streets rise and turn away from the busiest routes. From Petřín, the city can appear through a dark frame of trees, distant and almost still.",
          "These quieter spaces offer a different rhythm. They allow the photograph to become less about recognition and more about atmosphere.",
        ],
      },
      {
        heading: "Looking up",
        paragraphs: [
          "Prague continually draws the eye upwards.",
          "Spire, dome, clock tower and street lamp create strong vertical relationships against the sky. Looking up also removes much of the noise of street level and turns the city into a more graphic arrangement of line, form and open space.",
          "A familiar façade can become something less literal when seen at a sharp angle, and a small element in the sky can suddenly give scale to the architecture beneath it.",
        ],
      },
      {
        heading: "Interpreting the atmosphere",
        paragraphs: [
          "The photograph begins on the street, but the creative process continues when I return to the image.",
          "I work with tone, colour and contrast to bring forward the quality that first held my attention: the depth of a storm sky, the warmth of old plaster, the separation between a stone figure and the city beyond.",
          "The aim is not to make Prague more dramatic than it was. It is to shape the photograph so that the finished print carries the atmosphere of being there.",
        ],
      },
      {
        heading: "Choosing a Prague photograph for your home",
        paragraphs: [
          "Prague offers both architectural drama and quieter visual detail.",
          "A landscape view of the castle and cathedral can create scale across a larger wall. Portrait studies of statues, towers and rooftops bring height and structure to narrower spaces. Canal scenes and layered city views introduce warmth without demanding attention immediately.",
          "The right photograph is the one that continues to reveal its relationships over time: a distant spire, a weathered surface or a brief line of light that was not the first thing you noticed.",
        ],
      },
      {
        heading: "What remains",
        paragraphs: [
          "What stays with me about Prague is the balance between presence and quietness.",
          "Its architecture carries great visual weight, yet the city also offers moments of stillness: water beneath a bridge, a figure above the roofs, or light moving across stone.",
          "Those are the moments I want the finished photographs to preserve — not Prague as a checklist of landmarks, but as a city that rewards returning to the image and looking again.",
        ],
      },
    ],
    featuredArtworks: [
      {
        slug: "cathedral-under-storm",
        title: "Cathedral Under Storm",
        description:
          "St Vitus Cathedral and Prague Castle standing beneath a turbulent sky above Malá Strana.",
      },
      {
        slug: "stone-witness",
        title: "Stone Witness",
        description:
          "A timeworn figure watching over the Vltava with Prague Castle held softly in the distance.",
      },
      {
        slug: "canal-through-mala-strana",
        title: "Canal Through Malá Strana",
        description:
          "Warm afternoon light following the quiet canal between old houses and gardens.",
      },
    ],
  },
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
