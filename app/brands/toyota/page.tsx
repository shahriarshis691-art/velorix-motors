import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { toyotaVehicles } from "@/src/data/toyotaVehicles";

export const metadata: Metadata = {
  title: "Toyota Collection — VELORIX MOTORS",
  description:
    "Axio, Premio, Allion, Aqua, Noah, Harrier and more — 16 Toyota models popular and accessible in Bangladesh, at VELORIX MOTORS.",
};

export default function ToyotaBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl space-y-16 px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        {toyotaVehicles.map((vehicle, index) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            index={index}
            priority={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
