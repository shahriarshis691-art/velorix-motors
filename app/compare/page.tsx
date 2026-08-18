import type { Metadata } from "next";
import CompareView from "@/components/compare/CompareView";
import { getInventoryById } from "@/lib/inventory-store";

type PageProps = {
  searchParams: Promise<{ ids?: string }>;
};

export const metadata: Metadata = {
  title: "Compare — VELORIX MOTORS",
  description:
    "Compare Japan-import Toyotas, Hondas, BMWs, Nissans and Hyundais side by side.",
};

export const dynamic = "force-dynamic";

export default async function ComparePage({ searchParams }: PageProps) {
  const { ids: raw } = await searchParams;
  const ids = (raw ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean)
    .slice(0, 3);

  const vehicles = ids
    .map((id) => getInventoryById(id))
    .filter((vehicle): vehicle is NonNullable<typeof vehicle> => Boolean(vehicle));

  return <CompareView vehicles={vehicles} />;
}
