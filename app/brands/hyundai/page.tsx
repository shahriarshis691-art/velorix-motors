import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { hyundaiVehicles } from "@/src/data/hyundaiVehicles";

export const metadata: Metadata = {
  title: "Hyundai Collection — VELORIX MOTORS",
  description:
    "Creta, Alcazar, Tucson and Santa Fe — Hyundai models assembled and available in Bangladesh, at VELORIX MOTORS.",
};

export default function HyundaiBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl space-y-16 px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        {hyundaiVehicles.map((vehicle, index) => (
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
