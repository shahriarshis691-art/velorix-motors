"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import VehicleCard from "@/components/vehicles/VehicleCard";
import VehicleGallery from "@/components/vehicles/VehicleGallery";
import PreOrderModal from "@/components/vehicles/PreOrderModal";
import AppointmentModal from "@/components/vehicles/AppointmentModal";
import type { LuxuryVehicle } from "@/lib/vehiclesData";

type VehicleDetailViewProps = {
  vehicle: LuxuryVehicle;
};

const specOrder: { key: keyof LuxuryVehicle["specs"]; label: string }[] = [
  { key: "engine", label: "Engine" },
  { key: "power", label: "Power" },
  { key: "transmission", label: "Transmission" },
  { key: "acceleration", label: "Acceleration" },
  { key: "topSpeed", label: "Top speed" },
];

export default function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="mx-auto max-w-[720px] px-5 pb-28 pt-[7.5rem] sm:px-6 sm:pt-36">
      <Link
        href="/vehicles"
        className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-400 transition-colors hover:text-neutral-900"
      >
        <ArrowLeft size={13} strokeWidth={1.5} />
        All vehicles
      </Link>

      <VehicleCard vehicle={vehicle} linked={false} priority />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-500 sm:text-base"
      >
        {vehicle.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1"
      >
        <p className="font-serif text-2xl font-medium text-neutral-900">
          {vehicle.price}
        </p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          {vehicle.status}
        </p>
      </motion.div>

      <VehicleGallery images={vehicle.galleryImages} title={vehicle.title} />

      <section className="mt-16 sm:mt-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
          Specifications
        </p>
        <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
          Key specs
        </h3>

        <dl className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {specOrder.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-8"
            >
              <dt className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                {row.label}
              </dt>
              <dd className="font-serif text-xl font-medium text-neutral-900 sm:text-[1.35rem]">
                {vehicle.specs[row.key]}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 space-y-3">
          {vehicle.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-neutral-600"
            >
              <span className="mt-2 h-px w-4 shrink-0 bg-neutral-900" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 flex flex-col gap-3 sm:mt-16 sm:flex-row">
        <button
          type="button"
          onClick={() => setPreOrderOpen(true)}
          className="min-h-12 flex-1 bg-neutral-950 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800"
        >
          Pre-Order
        </button>
        <button
          type="button"
          onClick={() => setAppointmentOpen(true)}
          className="min-h-12 flex-1 border border-neutral-900 bg-white px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-900 transition hover:bg-neutral-950 hover:text-white"
        >
          Book an Appointment
        </button>
      </section>

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
