export type ToyotaVehicle = {
  id: string;
  brand: "Toyota";
  category: "VEHICLES";
  title: string;
  tagline: string;
  coverImage: string;
  coverFit?: "cover" | "contain";
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

export const toyotaVehicles: ToyotaVehicle[];

export function getToyotaVehicleById(id: string): ToyotaVehicle | undefined;

declare const toyota: ToyotaVehicle[];
export default toyota;
