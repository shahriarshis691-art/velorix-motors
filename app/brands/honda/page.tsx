import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { hondaVehicles } from "@/src/data/hondaVehicles";

export const metadata: Metadata = {
  title: "Honda Collection — VELORIX MOTORS",
  description:
    "Civic Type R, Accord Hybrid and CR-V — the Honda atelier collection at VELORIX MOTORS.",
};

export default function HondaBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto my-10 max-w-3xl space-y-16 px-4 pb-20 pt-20 sm:px-8 sm:pt-24">
        {hondaVehicles.map((vehicle, index) => (
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
