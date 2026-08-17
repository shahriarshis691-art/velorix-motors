"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";
import VehicleGallery from "@/components/vehicles/VehicleGallery";
import PreOrderModal from "@/components/vehicles/PreOrderModal";
import AppointmentModal from "@/components/vehicles/AppointmentModal";
import type { CatalogVehicle } from "@/src/data/catalog";
import { formatBDT } from "@/src/utils/formatters";

type VehicleDetailViewProps = {
  vehicle: CatalogVehicle;
};

const SPEC_ITEMS = [
  { key: "power", label: "Horsepower" },
  { key: "acceleration", label: "0–60 mph" },
  { key: "topSpeed", label: "Top Speed" },
  { key: "engine", label: "Engine" },
  { key: "transmission", label: "Transmission" },
  { key: "drivetrain", label: "Drivetrain" },
] as const;

export default function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const brand = "brand" in vehicle ? vehicle.brand : undefined;
  const status = "status" in vehicle ? vehicle.status : undefined;
  const highlights = "highlights" in vehicle ? vehicle.highlights : undefined;
  const brandHrefs: Record<string, string> = {
    Honda: "/brands/honda",
    Toyota: "/brands/toyota",
    BMW: "/brands/bmw",
    Nissan: "/brands/nissan",
    Hyundai: "/brands/hyundai",
  };
  const backHref = brand && brandHrefs[brand] ? brandHrefs[brand] : "/vehicles";
  const backLabel = brand && brandHrefs[brand] ? brand : "All vehicles";
  const visibleSpecs = SPEC_ITEMS.filter((row) =>
    Boolean(vehicle.specs[row.key as keyof typeof vehicle.specs]),
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pb-28 pt-28 sm:px-8 sm:pt-32 md:pb-24">
        <Link
          href={backHref}
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280] transition-opacity hover:opacity-70"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          {backLabel}
        </Link>

        <VehicleCard vehicle={vehicle} linked={false} priority />

        {vehicle.tagline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 text-[15px] leading-relaxed text-[#6B7280]"
          >
            {vehicle.tagline}
          </motion.p>
        )}

        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-serif text-xl font-medium text-[#111827] sm:text-2xl">
            {formatBDT(vehicle.price)}
          </p>
          {status && (
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
              {status}
            </p>
          )}
        </div>

        <VehicleGallery images={vehicle.galleryImages} title={vehicle.title} />

        <section className="mt-10 sm:mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
            Specifications
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111827] sm:text-3xl">
            Key specs
          </h3>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200">
            {visibleSpecs.map((row) => (
              <div key={row.key} className="bg-white px-4 py-4 sm:px-5 sm:py-5">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
                  {row.label}
                </dt>
                <dd className="mt-1.5 font-serif text-base font-medium leading-snug text-[#111827] sm:text-lg">
                  {vehicle.specs[row.key as keyof typeof vehicle.specs]}
                </dd>
              </div>
            ))}
          </dl>

          {highlights && highlights.length > 0 && (
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111827]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="mt-12 hidden gap-3 md:flex">
          <button
            type="button"
            onClick={() => setPreOrderOpen(true)}
            className="min-h-12 flex-1 bg-[#111827] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:opacity-90"
          >
            Pre-Order
          </button>
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="min-h-12 flex-1 border border-[#111827] bg-white px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#111827] transition hover:bg-[#111827] hover:text-white"
          >
            Book Appointment
          </button>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-3xl gap-3">
          <button
            type="button"
            onClick={() => setPreOrderOpen(true)}
            className="min-h-12 flex-1 bg-[#111827] px-4 text-xs font-medium uppercase tracking-[0.2em] text-white"
          >
            Pre-Order
          </button>
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="min-h-12 flex-1 border border-[#111827] bg-white px-4 text-xs font-medium uppercase tracking-[0.2em] text-[#111827]"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <PreOrderModal
        open={preOrderOpen}
        onClose={() => setPreOrderOpen(false)}
        vehicleTitle={vehicle.title}
      />
      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        vehicleTitle={vehicle.title}
      />
    </main>
  );
}
