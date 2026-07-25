import type { Artwork } from "@/data/catalog";

export const printSizes = [
  { id: "a2", label: "A2", dimensions: "42 × 59.4 cm", price: 9500 },
  { id: "a1", label: "A1", dimensions: "59.4 × 84.1 cm", price: 14500 },
  { id: "a0", label: "A0", dimensions: "84.1 × 118.9 cm", price: 22500 },
] as const;

export const frameOptions = [
  { id: "unframed", label: "Unframed", price: 0 },
  { id: "black", label: "Black frame", price: 7000 },
  { id: "wood", label: "Natural wood frame", price: 7500 },
] as const;

export type PrintSizeId = (typeof printSizes)[number]["id"];
export type FrameId = (typeof frameOptions)[number]["id"];

export type CartItem = {
  id: string;
  artworkSlug: string;
  title: string;
  image: string;
  size: PrintSizeId;
  frame: FrameId;
  quantity: number;
};

export const getPrintSize = (id: PrintSizeId) =>
  printSizes.find((size) => size.id === id);

export const getFrame = (id: FrameId) =>
  frameOptions.find((frame) => frame.id === id);

export const isFrameAvailableForSize = (
  size: PrintSizeId,
  frame: FrameId,
) => size !== "a0" || frame === "unframed";

export const getUnitPrice = (size: PrintSizeId, frame: FrameId) =>
  (getPrintSize(size)?.price ?? 0) + (getFrame(frame)?.price ?? 0);

export const getCartItemId = (
  artworkSlug: Artwork["slug"],
  size: PrintSizeId,
  frame: FrameId,
) => `${artworkSlug}:${size}:${frame}`;

export const calculateSubtotal = (items: CartItem[]) =>
  items.reduce(
    (total, item) => total + getUnitPrice(item.size, item.frame) * item.quantity,
    0,
  );

export const calculateShipping = (subtotal: number) =>
  subtotal >= 15000 ? 0 : 895;

export const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount / 100);
