import { getArtwork } from "@/data/catalog";
import {
  frameOptions,
  printSizes,
  type CartItem,
  type FrameId,
  type PrintSizeId,
} from "@/lib/store";

const validSizes = new Set<PrintSizeId>(printSizes.map(({ id }) => id));
const validFrames = new Set<FrameId>(frameOptions.map(({ id }) => id));
const cartKeyPattern = /^cart_(\d{2})$/;

export const createCartMetadata = (items: CartItem[]) =>
  Object.fromEntries(
    items.map(({ artworkSlug, size, frame, quantity }, index) => [
      `cart_${index.toString().padStart(2, "0")}`,
      [artworkSlug, size, frame, quantity].join(":"),
    ]),
  );

export function parseCartMetadata(
  metadata: Record<string, string>,
): CartItem[] {
  return Object.entries(metadata)
    .filter(([key]) => cartKeyPattern.test(key))
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, value]) => {
      const [artworkSlug, size, frame, quantityValue] = value.split(":");
      const artwork = getArtwork(artworkSlug);
      const quantity = Number(quantityValue);

      if (
        !artwork ||
        !validSizes.has(size as PrintSizeId) ||
        !validFrames.has(frame as FrameId) ||
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 10
      ) {
        throw new Error("Stripe order metadata contains an invalid item.");
      }

      return {
        id: `${artwork.slug}:${size}:${frame}`,
        artworkSlug: artwork.slug,
        title: artwork.title,
        image: artwork.image,
        size: size as PrintSizeId,
        frame: frame as FrameId,
        quantity,
      };
    });
}
