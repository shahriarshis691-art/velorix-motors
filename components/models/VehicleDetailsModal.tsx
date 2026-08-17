"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { vehiclePhotos, type Vehicle } from "@/lib/cars";

type VehicleDetailsModalProps = {
  car: Vehicle | null;
  onClose: () => void;
  onBook: (car: Vehicle) => void;
};

export default function VehicleDetailsModal({
  car,
  onClose,
  onBook,
}: VehicleDetailsModalProps) {
  const photos = car ? vehiclePhotos(car) : [];
  const [active, setActive] = useState(car?.media.main ?? "");

  useEffect(() => {
    if (car) setActive(car.media.main);
  }, [car]);

  const activeLabel = car
    ? active === car.media.rear
      ? "Rear"
      : active === car.media.interior
        ? "Interior"
        : active === car.media.main
          ? "Exterior"
          : "Gallery"
    : "";

  return (
    <AnimatePresence>
      {car && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close details"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${car.modelName} details`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="glass-panel relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl md:grid-cols-2"
          >
            <div className="flex min-h-[260px] flex-col bg-black md:min-h-full">
              <div className="relative aspect-[16/10] w-full md:flex-1 md:aspect-auto">
                <Image
                  src={active || car.media.main}
                  alt={`${car.modelName} ${activeLabel.toLowerCase()}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                  {activeLabel}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-[3px] bg-black p-[3px] sm:grid-cols-5">
                {photos.map((src) => {
                  const selected = src === active;
                  const thumbLabel =
                    src === car.media.main
                      ? "Main"
                      : src === car.media.rear
                        ? "Rear"
                        : src === car.media.interior
                          ? "Cabin"
                          : "More";
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActive(src)}
                      aria-label={`Show ${thumbLabel} photo`}
                      aria-pressed={selected}
                      className={`relative aspect-[16/10] overflow-hidden ${
                        selected
                          ? "ring-2 ring-white"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-[10px] tracking-[0.3em] text-vx-red">
                    {car.year} · GRADE {car.grade.toFixed(1)}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.12em]">
                    <span className="metallic-text">{car.modelName}</span>
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md p-1.5 text-vx-silver hover:bg-white/5 hover:text-white"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-4 font-display text-2xl font-bold text-white">
                {car.price}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-vx-silver/70">
                {car.status} · {car.packageName}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <Detail label="Mileage" value={car.mileage} />
                <Detail label="Powertrain" value={car.engine ?? car.fuelType} />
                <Detail label="Transmission" value={car.transmission} />
                <Detail label="Drive" value={car.driveType ?? "FWD"} />
                <Detail label="Exterior" value={car.exteriorColor} />
                <Detail label="Lot ID" value={car.id.toUpperCase()} />
              </dl>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onBook(car)}
                  className="w-full rounded-xl bg-[#0088ff] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0077ee]"
                >
                  Pre-Order
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      <dt className="text-[10px] uppercase tracking-[0.16em] text-vx-silver/60">
        {label}
      </dt>
      <dd className="mt-1 text-vx-metal">{value}</dd>
    </div>
  );
}
