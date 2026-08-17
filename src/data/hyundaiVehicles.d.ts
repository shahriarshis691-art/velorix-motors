export type HyundaiVehicle = {
  id: string;
  brand: "Hyundai";
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
    engine: string;
    transmission?: string;
    drivetrain?: string;
  };
  highlights?: string[];
  price: string;
};

export const hyundaiVehicles: HyundaiVehicle[];

export function getHyundaiVehicleById(id: string): HyundaiVehicle | undefined;

declare const hyundai: HyundaiVehicle[];
export default hyundai;
