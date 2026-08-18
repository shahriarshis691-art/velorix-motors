import { vehiclesData } from "@/src/data/vehicles";
import { hondaVehicles } from "@/src/data/hondaVehicles";
import { toyotaVehicles } from "@/src/data/toyotaVehicles";
import { bmwVehicles } from "@/src/data/bmwVehicles";
import { nissanVehicles } from "@/src/data/nissanVehicles";
import { hyundaiVehicles } from "@/src/data/hyundaiVehicles";
import { assertUniqueBrandImages } from "@/src/data/assertUniqueImages";

const brandVehicles = [
  ...hondaVehicles,
  ...toyotaVehicles,
  ...bmwVehicles,
  ...nissanVehicles,
  ...hyundaiVehicles,
];

assertUniqueBrandImages(brandVehicles);

export function getBrandCatalogVehicles() {
  return brandVehicles;
}

export function getCatalogVehicles() {
  return [...brandVehicles, ...vehiclesData];
}

export function getVehicleById(id) {
  return (
    hondaVehicles.find((vehicle) => vehicle.id === id) ||
    toyotaVehicles.find((vehicle) => vehicle.id === id) ||
    bmwVehicles.find((vehicle) => vehicle.id === id) ||
    nissanVehicles.find((vehicle) => vehicle.id === id) ||
    hyundaiVehicles.find((vehicle) => vehicle.id === id) ||
    vehiclesData.find((vehicle) => vehicle.id === id)
  );
}

export function getVehicleIds() {
  return getCatalogVehicles().map((vehicle) => vehicle.id);
}
