import type { Artwork } from "@/data/catalog";

export const printSizes = [
  { id: "a4", label: "A4", dimensions: "21 × 29.7 cm", price: 4500 },
  { id: "a3", label: "A3", dimensions: "29.7 × 42 cm", price: 6500 },
  { id: "a2", label: "A2", dimensions: "42 × 59.4 cm", price: 9500 },
] as const;

export const frameOptions = [
  { id: "unframed", label: "Unframed", price: 0 },
  { id: "black", label: "Black frame", price: 7000 },
  { id: "oak", label: "Natural oak frame", price: 7500 },
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
