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
      <div className="mx-auto my-10 max-w-3xl space-y-16 px-4 pb-20 pt-20 sm:px-8 sm:pt-24">
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
