import buachailleEtiveMor from "./buachaille-etive-mor";
import rannochMoor from "./rannoch-moor";
import castleStalkerByMoonlight from "./castle-stalker-by-moonlight";
import lightAfterTheStorm from "./light-after-the-storm";
import glenfinnanMonument from "./glenfinnan-monument";
import castleStalker from "./castle-stalker";
import glasgowGreen from "./glasgow-green";
import highlandReflections from "./highland-reflections";
import winterLight from "./winter-light";
import theClyde from "./the-clyde";
import highlandLight from "./highland-light";
import mountainSilence from "./mountain-silence";

export const products = {
  "buachaille-etive-mor": buachailleEtiveMor,
  "rannoch-moor": rannochMoor,
  "castle-stalker-by-moonlight": castleStalkerByMoonlight,
  "light-after-the-storm": lightAfterTheStorm,
  "glenfinnan-monument": glenfinnanMonument,
  "castle-stalker": castleStalker,
  "glasgow-green": glasgowGreen,
  "highland-reflections": highlandReflections,
  "winter-light": winterLight,
  "the-clyde": theClyde,
  "highland-light": highlandLight,
  "mountain-silence": mountainSilence,
};

export const productList = Object.entries(products).map(([slug, product]) => ({
  slug,
  ...product,
}));

export default products;