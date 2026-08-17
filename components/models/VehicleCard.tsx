"use client";

import Image from "next/image";
import { getBrand } from "@/lib/brands";
import { statusLabel, vehiclePhotos, type Vehicle } from "@/lib/cars";

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
  const driveTrim = [car.driveType, car.packageName].filter(Boolean).join(" / ");
  const photoCount = vehiclePhotos(car).length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-300 hover:border-white/20">
      <button
        type="button"
        onClick={() => onDetails(car)}
        className="relative grid aspect-[16/10] w-full grid-cols-[1.7fr_1fr] grid-rows-2 gap-[3px] bg-black text-left"
        aria-label={`View ${car.modelName} gallery`}
      >
        <span className="relative row-span-2 overflow-hidden">
          <Image
            src={car.media.main}
            alt={`${car.modelName} ${car.year} front three-quarter`}
            fill
            sizes="(max-width: 768px) 70vw, (max-width: 1280px) 40vw, 28vw"
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
          <span className="absolute bottom-2.5 left-3 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
            {photoCount} Photos
          </span>
        </span>

        <MediaTile
          src={car.media.rear}
          alt={`${car.modelName} rear angle`}
          label="Rear"
          sizes="(max-width: 768px) 40vw, (max-width: 1280px) 22vw, 16vw"
        />
        <MediaTile
          src={car.media.interior}
          alt={`${car.modelName} interior`}
          label="Interior"
          sizes="(max-width: 768px) 40vw, (max-width: 1280px) 22vw, 16vw"
        />
      </button>

      <div className="flex flex-grow flex-col justify-between gap-4 bg-[#0a0a0a] p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {brand?.displayName ?? car.brand}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">
            {car.modelName} {car.year}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 border-y border-white/5 py-3 text-xs text-neutral-300">
          <span>{car.mileage}</span>
          <span>{car.engine ?? car.fuelType}</span>
          <span>{car.transmission}</span>
          <span>{driveTrim || "FWD"}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
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
              className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white transition-all hover:bg-white/10"
            >
              Details / Test Drive
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
}: {
  src: string;
  alt: string;
  label: string;
  sizes: string;
}) {
  return (
    <span className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-2 pb-1.5 pt-6">
        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/90">
          {label}
        </span>
      </span>
    </span>
  );
}
