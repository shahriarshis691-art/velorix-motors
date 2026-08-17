"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";
import VehicleGallery from "@/components/vehicles/VehicleGallery";
import PreOrderModal from "@/components/vehicles/PreOrderModal";
import AppointmentModal from "@/components/vehicles/AppointmentModal";
import type { LuxuryVehicle } from "@/src/data/vehicles";

type VehicleDetailViewProps = {
  vehicle: LuxuryVehicle;
};

const SPEC_ITEMS: { key: keyof LuxuryVehicle["specs"]; label: string }[] = [
  { key: "power", label: "Horsepower" },
  { key: "acceleration", label: "0–100 km/h" },
  { key: "topSpeed", label: "Top Speed" },
  { key: "engine", label: "Engine / Drivetrain" },
];

export default function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="bg-white px-4 pb-28 pt-20 md:px-6 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-xl md:max-w-[720px]">
        <Link
          href="/vehicles"
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-400 transition-opacity hover:opacity-60"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          All vehicles
        </Link>

        <VehicleCard vehicle={vehicle} linked={false} priority />

        {vehicle.tagline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[15px] leading-relaxed text-neutral-500"
          >
            {vehicle.tagline}
          </motion.p>
        )}

        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="font-serif text-xl font-medium text-[#111111] md:text-2xl">
            {vehicle.price}
          </p>
          <p className="text-xs uppercase tracking-widest text-neutral-400">
            {vehicle.status}
          </p>
        </div>

        <VehicleGallery images={vehicle.galleryImages} title={vehicle.title} />

        <section className="mt-10 md:mt-14">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Specifications
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111111] md:text-3xl">
            Key specs
          </h3>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-neutral-200 bg-neutral-200">
            {SPEC_ITEMS.map((row) => (
              <div key={row.key} className="bg-white px-4 py-4 md:px-5 md:py-5">
                <dt className="text-[10px] uppercase tracking-widest text-neutral-400">
                  {row.label}
                </dt>
                <dd className="mt-1.5 font-serif text-base font-medium leading-snug text-[#111111] md:text-lg">
                  {vehicle.specs[row.key]}
                </dd>
              </div>
            ))}
          </dl>

          {vehicle.highlights && vehicle.highlights.length > 0 && (
            <ul className="mt-8 space-y-3">
              {vehicle.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-[#111111]" />
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
            className="min-h-12 flex-1 bg-[#111111] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-neutral-800"
          >
            Pre-Order
          </button>
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="min-h-12 flex-1 border border-[#111111] bg-white px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-[#111111] transition hover:bg-[#111111] hover:text-white"
          >
            Book Appointment
          </button>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-xl gap-3">
          <button
            type="button"
            onClick={() => setPreOrderOpen(true)}
            className="min-h-12 flex-1 bg-[#111111] px-4 text-xs font-medium uppercase tracking-widest text-white"
          >
            Pre-Order
          </button>
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="min-h-12 flex-1 border border-[#111111] bg-white px-4 text-xs font-medium uppercase tracking-widest text-[#111111]"
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
