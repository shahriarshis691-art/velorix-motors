export type NissanVehicle = {
  id: string;
  brand: "Nissan";
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

export const nissanVehicles: NissanVehicle[];

export function getNissanVehicleById(id: string): NissanVehicle | undefined;

declare const nissan: NissanVehicle[];
export default nissan;
