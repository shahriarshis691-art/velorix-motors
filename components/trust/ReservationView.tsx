"use client";

import Link from "next/link";
import TrustShell from "@/components/trust/TrustShell";
import type { Reservation } from "@/lib/inventory";
import type { InventoryVehicle } from "@/lib/inventory";
import { formatTaka } from "@/src/utils/formatters";
import { paymentLabel } from "@/lib/site";

export default function ReservationView({
  reservation,
  vehicle,
}: {
  reservation: Reservation;
  vehicle?: InventoryVehicle;
}) {
  const shipment = vehicle?.shipment;

  return (
    <TrustShell>
      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
        Reservation
      </p>
      <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
        {reservation.code}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
        {reservation.vehicleTitle}. Deposit {formatTaka(reservation.amount)} via{" "}
        {paymentLabel(reservation.method)}.
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200">
        {[
          { label: "Payment", value: reservation.payment === "confirmed" ? "Confirmed" : "Awaiting" },
          { label: "Method", value: paymentLabel(reservation.method) },
          { label: "Shipment", value: shipment?.stage ?? "—" },
          { label: "ETA", value: shipment?.eta ?? "—" },
        ].map((row) => (
          <div key={row.label} className="bg-white px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
              {row.label}
            </dt>
            <dd className="mt-1.5 font-serif text-base font-medium text-[#111827]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      {shipment?.note ? (
        <p className="mt-6 text-sm leading-relaxed text-neutral-600">
          {shipment.note}
          {shipment.vessel ? ` · ${shipment.vessel}` : ""}
        </p>
      ) : null}

      {vehicle ? (
        <Link
          href={`/vehicles/${vehicle.id}`}
          className="mt-10 inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.2em] text-[#111827] transition-opacity hover:opacity-70"
        >
          View vehicle →
        </Link>
      ) : null}
    </TrustShell>
  );
}
