"use client";

import Image from "next/image";
import { getBrand } from "@/lib/brands";
import { statusLabel, triptychPhotos, type Vehicle } from "@/lib/cars";

const STATUS_STYLE: Record<Vehicle["status"], string> = {
  Available: "border-emerald-400/35 bg-black/55 text-emerald-300",
  "In Transit": "border-cyan-400/35 bg-black/55 text-cyan-200",
  "Pre-Order": "border-[#0088ff]/40 bg-black/55 text-sky-300",
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
  const brand = getBrand(car.brand);
  const shots = triptychPhotos(car);
  const engineFuel = car.engine
    ? car.engine.toLowerCase().includes(car.fuelType.toLowerCase())
      ? car.engine
      : `${car.engine} · ${car.fuelType}`
    : car.fuelType;
  const pills = [
    car.mileage,
    engineFuel,
    car.transmission,
    car.driveType ?? "FWD",
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:border-white/20">
      <button
        type="button"
        onClick={() => onDetails(car)}
        className="relative grid aspect-[16/9] w-full grid-cols-[0.9fr_1.35fr_0.9fr] gap-[3px] bg-black text-left"
        aria-label={`View ${car.modelName} gallery`}
      >
        <MediaTile
          src={shots.left}
          alt={`${car.modelName} alloy wheel rolling shot`}
          label="Rolling"
          sizes="(max-width: 768px) 30vw, 18vw"
          objectClass="object-cover object-[center_80%]"
        />

        <span className="relative overflow-hidden">
          <Image
            src={shots.center}
            alt={`${car.modelName} ${car.year} coastal tracking shot`}
            fill
            sizes="(max-width: 768px) 50vw, 32vw"
            className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />
          <span
            className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] backdrop-blur-md ${STATUS_STYLE[car.status]}`}
          >
            {statusLabel(car.status)}
          </span>
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-md">
            Grade {car.grade.toFixed(1)}
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-2 pb-1.5 pt-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/90">
              Tracking
            </span>
          </span>
        </span>

        <MediaTile
          src={shots.right}
          alt={`${car.modelName} grille and LED headlamp detail`}
          label="Signature"
          sizes="(max-width: 768px) 30vw, 18vw"
          objectClass="object-cover object-[center_35%]"
        />
      </button>

      <div className="flex flex-grow flex-col justify-between gap-4 bg-[#0a0a0a] p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {brand?.name ?? car.brand} · {car.year}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            {car.modelName}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">{car.packageName}</p>
        </div>

        <div className="flex flex-wrap gap-2 border-y border-white/5 py-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-neutral-300"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <p className="text-lg font-bold text-white">{car.price}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onPreOrder(car)}
              className="rounded-lg bg-[#0088ff] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#0077ee]"
            >
              Pre-Order
            </button>
            <button
              type="button"
              onClick={() => onDetails(car)}
              className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function MediaTile({
  src,
  alt,
  label,
  sizes,
  objectClass,
}: {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  objectClass: string;
}) {
  return (
    <span className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${objectClass} transition duration-700 group-hover:scale-[1.04]`}
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-2 pb-1.5 pt-6">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/90">
          {label}
        </span>
      </span>
    </span>
  );
}
