export const BRAND_SLUGS = [
  "bmw",
  "nissan",
  "toyota",
  "honda",
  "hyundai",
] as const;

export type BrandSlug = (typeof BRAND_SLUGS)[number] | "allion";

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
    tagline: "3 Series, X1, 5 Series, X3 and X5 from Japan and UK auctions.",
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
    tagline: "Axio, Premio, Allion, Aqua, Noah and Harrier from Japan auctions.",
    image: "/images/toyota-harrier-z-coast.png",
    accent: "#EB0A1E",
  },
  {
    slug: "honda",
    name: "Honda",
    displayName: "HONDA",
    tagline: "Grace, Vezel, Civic, Fit and City from Japan auctions.",
    image: "/images/honda-civic.jpg",
    accent: "#E40521",
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    displayName: "HYUNDAI",
    tagline: "Creta, Tucson, Alcazar and Santa Fe prepared for Dhaka delivery.",
    image: "/images/hyundai-alcazar.jpg",
    accent: "#002C5F",
  },
];

export function isBrandSlug(value: string): value is BrandSlug {
  return (BRAND_SLUGS as readonly string[]).includes(value);
}

export function getBrand(slug: string): BrandMeta | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}
