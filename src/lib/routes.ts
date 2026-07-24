export const routes = {
  home: "/",
  collections: "/#collections",
  collection: (slug: string) => `/#${encodeURIComponent(slug)}`,
  artwork: (slug: string) => `/prints/${encodeURIComponent(slug)}`,
} as const;
