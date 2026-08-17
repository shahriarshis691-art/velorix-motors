export type VehicleStatus = "Available" | "Pre-Order" | "Made to Order";

export type VehicleSpecs = {
  power: string;
  acceleration: string;
  topSpeed: string;
  engine: string;
  transmission?: string;
  drivetrain?: string;
};

export type LuxuryVehicle = {
  id: string;
  brand?: string;
  category: "VEHICLES";
  title: string;
  coverImage: string;
  galleryImages: string[];
  tagline?: string;
  specs: VehicleSpecs;
  highlights?: string[];
  price: string;
  status?: VehicleStatus;
};

export const vehiclesData: LuxuryVehicle[];

export function getVehicleById(id: string): LuxuryVehicle | undefined;

export function getVehicleIds(): string[];

declare const vehicles: LuxuryVehicle[];
export default vehicles;
