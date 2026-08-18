import type { Metadata } from "next";
import BrandStockList from "@/components/vehicles/BrandStockList";
import { getInventoryByBrand } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "BMW Collection — VELORIX MOTORS",
  description:
    "3 Series, X1, 5 Series, X3, X5 and X7 — BMW models Bangladesh actually waits for, at VELORIX MOTORS.",
};

export default function BmwBrandPage() {
  return <BrandStockList vehicles={getInventoryByBrand("bmw")} />;
}
