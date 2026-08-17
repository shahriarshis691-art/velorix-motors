"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Gauge, Fuel, Cog, Sparkles } from "lucide-react";
import type { Vehicle } from "@/lib/cars";

const STATUS_STYLE: Record<Vehicle["status"], string> = {
  Available: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  "In Transit": "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  "Pre-Order": "border-vx-red/40 bg-vx-red/10 text-red-300",
};

type VehicleCardProps = {
  car: Vehicle;
  onBook: (car: Vehicle) => void;
  onDetails: (car: Vehicle) => void;
};

export default function VehicleCard({ car, onBook, onDetails }: VehicleCardProps) {
  const detailsLabel =
    car.status === "Pre-Order" ? "Pre-Order Inquiry" : "View Details";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_24px_50px_-28px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        <Image
          src={car.image}
          alt={`${car.modelName} ${car.year}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-[center_22%] transition duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-white backdrop-blur-sm">
          GRADE {car.grade.toFixed(1)} / 5.0
        </span>
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm ${STATUS_STYLE[car.status]}`}
        >
          {car.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-[10px] tracking-[0.28em] text-vx-silver/70">
          {car.year}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold uppercase tracking-[0.12em]">
          <span className="metallic-text">{car.modelName}</span>
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          <SpecChip icon={<Gauge size={12} />} label={car.mileage} />
          <SpecChip icon={<Cog size={12} />} label={car.transmission} />
          <SpecChip icon={<Fuel size={12} />} label={car.fuelType} />
          <SpecChip icon={<Sparkles size={12} />} label={car.packageName} />
        </div>

        <p className="mt-5 font-display text-xl font-bold tracking-[0.06em] text-white">
          {car.price}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-vx-silver/60">
          {car.exteriorColor} · Interior {car.interiorGrade}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onBook(car)}
            className="rounded-lg bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#64748b] px-3 py-2.5 font-display text-[10px] font-bold uppercase tracking-[0.12em] text-vx-ink shadow-red-glow transition hover:shadow-red-glow-lg sm:text-[11px]"
          >
            Book Test Drive
          </button>
          <button
            type="button"
            onClick={() => onDetails(car)}
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-cyan-300/40 hover:bg-white/10 sm:text-[11px]"
          >
            {detailsLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function SpecChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-vx-silver">
      {icon}
      {label}
    </span>
  );
}
