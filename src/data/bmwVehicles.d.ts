export type BmwVehicle = {
  id: string;
  brand: "BMW";
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
    drivetrain: string;
  };
  price: string;
};

export const bmwVehicles: BmwVehicle[];

export function getBmwVehicleById(id: string): BmwVehicle | undefined;

declare const bmw: BmwVehicle[];
export default bmw;
