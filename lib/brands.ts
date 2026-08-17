export const BRAND_SLUGS = [
  "land-rover",
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
    slug: "land-rover",
    name: "Land Rover",
    displayName: "LAND ROVER",
    tagline: "Re-conditioned Defender, Discovery and Range Rover stock.",
    image: "/images/land-rover-defender.png",
    accent: "#C4A574",
  },
  {
    slug: "bmw",
    name: "BMW",
    displayName: "BMW",
    tagline: "Certified iX, X5 and M Sport inventory from Japan auctions.",
    image: "/images/bmw-ix.png",
    accent: "#1C69D4",
  },
  {
    slug: "nissan",
    name: "Nissan",
    displayName: "NISSAN",
    tagline: "Z, Patrol and e-POWER hybrids prepared for private delivery.",
    image: "/images/nissan-z.png",
    accent: "#C3002F",
  },
  {
    slug: "toyota",
    name: "Toyota",
    displayName: "TOYOTA",
    tagline: "Harrier, Crown and Land Cruiser lots graded 4.0 and above.",
    image: "/images/toyota-harrier.png",
    accent: "#EB0A1E",
  },
  {
    slug: "honda",
    name: "Honda",
    displayName: "HONDA",
    tagline: "Civic Type R, CR-V and Accord hybrids ready for atelier viewing.",
    image: "/images/honda-civic.png",
    accent: "#E40521",
  },
  {
    slug: "allion",
    name: "Toyota Allion",
    displayName: "ALLION",
    tagline: "Japan-auction Allion sedans, A15 and A18 grades ready for delivery.",
    image: "/images/toyota-allion.png",
    accent: "#EB0A1E",
  },
];

export function isBrandSlug(value: string): value is BrandSlug {
  return (BRAND_SLUGS as readonly string[]).includes(value);
}

export function getBrand(slug: string): BrandMeta | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}
