export const routes = {
  home: "/",
  collections: "/collections",
  printDelivery: "/print-delivery",
  tradeProjects: "/trade-projects",
  journal: "/journal",
  journalArticle: (slug: string) => `/journal/${encodeURIComponent(slug)}`,
  cart: "/cart",
  confirmation: "/order-confirmation",
  collection: (slug: string) => `/collections/${encodeURIComponent(slug)}`,
  artwork: (slug: string) => `/prints/${encodeURIComponent(slug)}`,
} as const;
