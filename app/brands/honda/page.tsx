import type { Metadata } from "next";
import BrandStockList from "@/components/vehicles/BrandStockList";
import { getInventoryByBrand } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Honda Collection — VELORIX MOTORS",
  description:
    "Grace, Vezel, Civic, Fit, City and Freed — Honda models Bangladesh actually drives, plus CR-V and Accord from Japan auctions.",
};

export default function HondaBrandPage() {
  return <BrandStockList vehicles={getInventoryByBrand("honda")} />;
}
