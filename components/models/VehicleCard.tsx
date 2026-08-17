"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Gauge, Cog, Fuel, Waypoints } from "lucide-react";
import { statusLabel, type Vehicle } from "@/lib/cars";

const STATUS_STYLE: Record<Vehicle["status"], string> = {
  Available: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  "In Transit": "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  "Pre-Order": "border-[#0088ff]/40 bg-[#0088ff]/10 text-sky-300",
};

type VehicleCardProps = {
  car: Vehicle;
  onPreOrder: (car: Vehicle) => void;
  onDetails: (car: Vehicle) => void;
};

export default function VehicleCard({
  car,
  onPreOrder,
  onDetails,
}: VehicleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] transition-all duration-300 hover:border-white/20">
      <div className="relative aspect-video overflow-hidden bg-black">
        <Image
          src={car.image}
          alt={`${car.modelName} ${car.year}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] backdrop-blur-sm ${STATUS_STYLE[car.status]}`}
        >
          {statusLabel(car.status)}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm">
          Grade {car.grade.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-medium text-white">
          {car.modelName}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">{car.year}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <SpecChip icon={<Gauge size={12} />} label={car.mileage} />
          <SpecChip
            icon={<Fuel size={12} />}
            label={car.engine ?? car.fuelType}
          />
          <SpecChip icon={<Cog size={12} />} label={car.transmission} />
          <SpecChip
            icon={<Waypoints size={12} />}
            label={car.driveType ?? "FWD"}
          />
        </div>

        <p className="mt-5 text-xl font-semibold tracking-tight text-white">
          {car.price}
        </p>
        <p className="mt-1 text-xs text-neutral-500">{car.exteriorColor}</p>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => onPreOrder(car)}
            className="flex-1 rounded-xl bg-[#0088ff] px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-[#0077ee]"
          >
            Pre-Order
          </button>
          <button
            type="button"
            onClick={() => onDetails(car)}
            className="flex-1 rounded-xl border border-white/20 px-4 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

function SpecChip({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-neutral-300">
      {icon}
      {label}
    </span>
  );
}
