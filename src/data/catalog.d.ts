import type { LuxuryVehicle } from "@/src/data/vehicles";
import type { HondaVehicle } from "@/src/data/hondaVehicles";
import type { ToyotaVehicle } from "@/src/data/toyotaVehicles";
import type { BmwVehicle } from "@/src/data/bmwVehicles";
import type { NissanVehicle } from "@/src/data/nissanVehicles";
import type { HyundaiVehicle } from "@/src/data/hyundaiVehicles";

export type CatalogVehicle =
  | HondaVehicle
  | ToyotaVehicle
  | BmwVehicle
  | NissanVehicle
  | HyundaiVehicle
  | LuxuryVehicle;

export function getBrandCatalogVehicles(): CatalogVehicle[];

export function getCatalogVehicles(): CatalogVehicle[];

export function getVehicleById(id: string): CatalogVehicle | undefined;

export function getVehicleIds(): string[];
