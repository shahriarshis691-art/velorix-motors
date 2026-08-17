export const BRAND_SLUGS = [
  "bmw",
  "nissan",
  "toyota",
  "honda",
  "allion",
] as const;

export type BrandSlug = (typeof BRAND_SLUGS)[number];

export type BrandMeta = {
  slug: BrandSlug;
  name: string;
  displayName: string;
  tagline: string;
  image: string;
  accent: string;
};

export const BRANDS: BrandMeta[] = [
  {
    slug: "bmw",
    name: "BMW",
    displayName: "BMW",
    tagline: "Certified iX, X5 and M Sport inventory from Japan auctions.",
    image: "/images/bmw-coast.png",
    accent: "#1C69D4",
  },
  {
    slug: "nissan",
    name: "Nissan",
    displayName: "NISSAN",
    tagline: "Z, Patrol and e-POWER hybrids prepared for private delivery.",
    image: "/images/nissan-z-coast.png",
    accent: "#C3002F",
  },
  {
    slug: "toyota",
    name: "Toyota",
    displayName: "TOYOTA",
    tagline: "Harrier, Crown, RAV4, Allion, Premio, Prado and Noah from Japan auctions.",
    image: "/images/toyota-harrier-z-coast.png",
    accent: "#EB0A1E",
  },
  {
    slug: "honda",
    name: "Honda",
    displayName: "HONDA",
    tagline: "Civic, Vezel, CR-V, Accord and ZR-V hybrids from Japan auctions.",
    image: "/images/honda-civic-coast.png",
    accent: "#E40521",
  },
  {
    slug: "allion",
    name: "Toyota Allion",
    displayName: "ALLION",
    tagline: "Eight Japan-auction Allion trims — A15, A18 and A20 packages ready for private delivery.",
    image: "/images/toyota-allion-coast.png",
    accent: "#EB0A1E",
  },
];

export function isBrandSlug(value: string): value is BrandSlug {
  return (BRAND_SLUGS as readonly string[]).includes(value);
}

export function getBrand(slug: string): BrandMeta | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}
