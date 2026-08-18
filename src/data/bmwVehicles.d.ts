export type BmwVehicle = {
  id: string;
  brand: "BMW";
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

export const bmwVehicles: BmwVehicle[];

export function getBmwVehicleById(id: string): BmwVehicle | undefined;

declare const bmw: BmwVehicle[];
export default bmw;
