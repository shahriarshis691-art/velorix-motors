import type { Metadata } from "next";
import BrandStockList from "@/components/vehicles/BrandStockList";
import { getInventoryByBrand } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hyundai Collection — VELORIX MOTORS",
  description:
    "Creta, Alcazar, Tucson and Santa Fe — Hyundai models assembled and available in Bangladesh, at VELORIX MOTORS.",
};

export default function HyundaiBrandPage() {
  return <BrandStockList vehicles={getInventoryByBrand("hyundai")} />;
}
