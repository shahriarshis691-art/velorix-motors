import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { vehiclesData } from "@/src/data/vehicles";

export const metadata: Metadata = {
  title: "Vehicles — VELORIX MOTORS",
  description:
    "A private Mercedes-Benz atelier collection — Maybach, AMG and EQ, prepared for discreet delivery.",
};

export default function VehiclesPage() {
  return (
    <main className="bg-white px-4 pb-16 pt-20 md:px-6 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-xl space-y-12 md:max-w-[720px] md:space-y-16">
        {vehiclesData.map((vehicle, index) => (
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
