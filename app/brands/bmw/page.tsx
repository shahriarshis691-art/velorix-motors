import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { bmwVehicles } from "@/src/data/bmwVehicles";

export const metadata: Metadata = {
  title: "BMW Collection — VELORIX MOTORS",
  description:
    "3 Series, X1 and 5 Series — practical BMW models from the Bangladesh reconditioned market, at VELORIX MOTORS.",
};

export default function BmwBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl space-y-16 px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
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
