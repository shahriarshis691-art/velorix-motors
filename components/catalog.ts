export type CatalogMode = "zoom" | "rotate" | "play" | "view" | "arrow";

export type CatalogCar = {
  id: string;
  name: string;
  image: string;
  alt: string;
  mode: CatalogMode;
};
