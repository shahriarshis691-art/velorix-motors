import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { bmwVehicles } from "@/src/data/bmwVehicles";

export const metadata: Metadata = {
  title: "BMW Collection — VELORIX MOTORS",
  description:
    "M5, 7 Series, M4 Competition and X7 M60i — the BMW atelier collection at VELORIX MOTORS.",
};

export default function BmwBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto my-10 max-w-3xl space-y-16 px-4 pb-20 pt-20 sm:px-8 sm:pt-24">
        {bmwVehicles.map((vehicle, index) => (
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
