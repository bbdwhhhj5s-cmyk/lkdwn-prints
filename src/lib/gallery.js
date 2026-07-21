// src/lib/gallery.js

import galleryData from "@/data/collections/scotland";

/**
 * Returns every artwork in the collection.
 */
export function getAllPrints() {
  return galleryData.filter((item) => item.type === "image");
}

/**
 * Returns a single artwork.
 */
export function getPrintBySlug(slug) {
  return getAllPrints().find((print) => print.slug === slug);
}

/**
 * Previous / Next navigation.
 */
export function getAdjacentPrints(slug) {
  const prints = getAllPrints();

  const index = prints.findIndex((print) => print.slug === slug);

  return {
    previous: index > 0 ? prints[index - 1] : null,
    next: index < prints.length - 1 ? prints[index + 1] : null,
  };
}

/**
 * Related artwork.
 */
export function getRelatedPrints(slug, limit = 3) {
  return getAllPrints()
    .filter((print) => print.slug !== slug)
    .slice(0, limit);
}