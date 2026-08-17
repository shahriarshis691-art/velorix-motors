import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VehicleDetailView from "@/components/vehicles/VehicleDetailView";
import { getVehicleById, getVehicleIds } from "@/src/data/vehicles";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getVehicleIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  if (!vehicle) {
    return { title: "Vehicle — VELORIX MOTORS" };
  }
  return {
    title: `${vehicle.title} — VELORIX MOTORS`,
    description: vehicle.tagline ?? vehicle.title,
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const vehicle = getVehicleById(id);
  if (!vehicle) notFound();

  return <VehicleDetailView vehicle={vehicle} />;
}
