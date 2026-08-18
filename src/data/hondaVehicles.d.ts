export type HondaVehicle = {
  id: string;
  brand: "Honda";
  category: "VEHICLES";
  title: string;
  tagline: string;
  coverImage: string;
  coverFit?: "cover" | "contain";
  galleryImages: string[];
  specs: {
    power: string;
    acceleration?: string;
    topSpeed?: string;
    mileage?: string;
    engine: string;
    transmission?: string;
    drivetrain?: string;
    seating?: string;
  };
  price: string;
};

export const hondaVehicles: HondaVehicle[];

export function getHondaVehicleById(id: string): HondaVehicle | undefined;

declare const honda: HondaVehicle[];
export default honda;
