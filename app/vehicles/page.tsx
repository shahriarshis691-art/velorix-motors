import type { Metadata } from "next";
import VehicleCard from "@/components/vehicles/VehicleCard";
import { vehiclesData } from "@/lib/vehiclesData";

export const metadata: Metadata = {
  title: "Mercedes-Benz Collection — VELORIX MOTORS",
  description:
    "A private Mercedes-Benz atelier collection — Maybach, AMG and EQ, prepared for discreet delivery.",
};

export default function VehiclesPage() {
  return (
    <main className="mx-auto max-w-[720px] px-5 pb-28 pt-[7.5rem] sm:px-6 sm:pt-36">
      <div className="space-y-20 sm:space-y-28">
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
