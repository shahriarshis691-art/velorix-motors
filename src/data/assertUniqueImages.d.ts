export function findDuplicateImages(vehicles: Array<{
  id: string;
  coverImage?: string;
  galleryImages?: string[];
}>): {
  coverDuplicates: string[];
  shared: Array<{ url: string; models: string[] }>;
};

export function assertUniqueBrandImages(
  vehicles: Array<{
    id: string;
    coverImage?: string;
    galleryImages?: string[];
  }>,
): void;
