"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Vehicle } from "@/lib/cars";
import BrushedMetalButton from "@/components/ui/BrushedMetalButton";

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
            className="glass-panel relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl md:grid-cols-2"
          >
            <div className="relative min-h-[240px] bg-white md:min-h-full">
              <Image
                src={car.image}
                alt={car.modelName}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                <Detail label="Fuel" value={car.fuelType} />
                <Detail label="Transmission" value={car.transmission} />
                <Detail label="Exterior" value={car.exteriorColor} />
                <Detail label="Interior grade" value={car.interiorGrade} />
                <Detail label="Lot ID" value={car.id.toUpperCase()} />
              </dl>

              <div className="mt-8">
                <BrushedMetalButton
                  className="w-full"
                  onClick={() => onBook(car)}
                >
                  {car.status === "Pre-Order"
                    ? "Pre-Order Inquiry"
                    : "Book Test Drive"}
                </BrushedMetalButton>
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
