import type { Metadata } from "next";
import BrandStockList from "@/components/vehicles/BrandStockList";
import { getInventoryByBrand } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Nissan Collection — VELORIX MOTORS",
  description:
    "GT-R NISMO, Z NISMO, Patrol NISMO and Versa — the Nissan atelier collection at VELORIX MOTORS.",
};

export default function NissanBrandPage() {
  return <BrandStockList vehicles={getInventoryByBrand("nissan")} />;
}
