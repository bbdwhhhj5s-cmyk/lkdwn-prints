export const routes = {
  home: "/",
  collections: "/collections",
  printDelivery: "/print-delivery",
  cart: "/cart",
  confirmation: "/order-confirmation",
  collection: (slug: string) => `/collections/${encodeURIComponent(slug)}`,
  artwork: (slug: string) => `/prints/${encodeURIComponent(slug)}`,
} as const;
