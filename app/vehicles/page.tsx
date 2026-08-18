import type { Metadata } from "next";
import VehicleSearchIndex from "@/components/vehicles/VehicleSearchIndex";
import { loadInventory } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Inventory — VELORIX MOTORS",
  description:
    "Search Toyota, Honda, BMW, Nissan and Hyundai Japan-import stock in Bangladesh — Axio, Premio, Creta and more.",
};

export default function VehiclesPage() {
  return <VehicleSearchIndex vehicles={loadInventory()} />;
}
