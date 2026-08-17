import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { nissanVehicles } from "@/src/data/nissanVehicles";

export const metadata: Metadata = {
  title: "Nissan Collection — VELORIX MOTORS",
  description:
    "GT-R NISMO, Z NISMO, Patrol NISMO and Versa — the Nissan atelier collection at VELORIX MOTORS.",
};

export default function NissanBrandPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto my-10 max-w-3xl space-y-16 px-4 pb-20 pt-20 sm:px-8 sm:pt-24">
        {nissanVehicles.map((vehicle, index) => (
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
