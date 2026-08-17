"use client";

import Image from "next/image";
import { getBrand } from "@/lib/brands";
import { statusLabel, triptychPhotos, type Vehicle } from "@/lib/cars";
import { formatBDT } from "@/src/utils/formatters";

const STATUS_STYLE: Record<Vehicle["status"], string> = {
  Available: "border-emerald-200 bg-white/90 text-emerald-700",
  "In Transit": "border-sky-200 bg-white/90 text-sky-700",
  "Pre-Order": "border-neutral-300 bg-white/90 text-neutral-800",
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={() => onDetails(car)}
        className="relative grid aspect-[16/9] w-full grid-cols-[0.9fr_1.35fr_0.9fr] gap-px bg-neutral-200 text-left"
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
            className={`absolute left-2 top-2 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] backdrop-blur-md sm:left-3 sm:top-3 ${STATUS_STYLE[car.status]}`}
          >
            {statusLabel(car.status)}
          </span>
          <span className="absolute right-2 top-2 rounded-full border border-neutral-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-neutral-800 backdrop-blur-md sm:right-3 sm:top-3">
            Grade {car.grade.toFixed(1)}
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent px-2 pb-1.5 pt-6">
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white">
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

      <div className="flex flex-grow flex-col justify-between gap-4 bg-white p-4 sm:p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            {brand?.name ?? car.brand} · {car.year}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
            {car.modelName}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{car.packageName}</p>
        </div>

        <div className="flex flex-wrap gap-2 border-y border-neutral-100 py-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="rounded-lg border border-neutral-200/60 bg-neutral-100/80 px-3 py-1.5 text-xs text-neutral-800"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-neutral-900">{formatBDT(car.price)}</p>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
            <button
              type="button"
              onClick={() => onPreOrder(car)}
              className="min-h-11 rounded-full bg-[#0a0a0a] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-neutral-800"
            >
              Pre-Order
            </button>
            <button
              type="button"
              onClick={() => onDetails(car)}
              className="min-h-11 rounded-full border border-neutral-300 bg-white px-3 py-2.5 text-xs font-semibold text-neutral-900 transition-all hover:bg-neutral-100"
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
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent px-2 pb-1.5 pt-6">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white">
          {label}
        </span>
      </span>
    </span>
  );
}
