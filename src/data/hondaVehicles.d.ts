export type HondaVehicle = {
  id: string;
  brand: "Honda";
  category: "VEHICLES";
  title: string;
  tagline: string;
  coverImage: string;
  galleryImages: string[];
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
    transmission: string;
  };
  price: string;
};

export const hondaVehicles: HondaVehicle[];

export function getHondaVehicleById(id: string): HondaVehicle | undefined;

declare const honda: HondaVehicle[];
export default honda;
