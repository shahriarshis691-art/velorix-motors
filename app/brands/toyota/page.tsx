import type { Metadata } from "next";
import BrandStockList from "@/components/vehicles/BrandStockList";
import { getInventoryByBrand } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Toyota Collection — VELORIX MOTORS",
  description:
    "Axio, Premio, Allion, Aqua, Noah, Harrier and more — 16 Toyota models popular and accessible in Bangladesh, at VELORIX MOTORS.",
};

export default function ToyotaBrandPage() {
  return <BrandStockList vehicles={getInventoryByBrand("toyota")} />;
}
