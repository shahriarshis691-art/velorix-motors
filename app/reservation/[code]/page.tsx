import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReservationView from "@/components/trust/ReservationView";
import { getReservation, getInventoryById } from "@/lib/inventory-store";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  return { title: `${code.toUpperCase()} — VELORIX MOTORS` };
}

export default async function ReservationPage({ params }: PageProps) {
  const { code } = await params;
  const reservation = getReservation(code);
  if (!reservation) notFound();
  const vehicle = getInventoryById(reservation.vehicleId);

  return <ReservationView reservation={reservation} vehicle={vehicle} />;
}
