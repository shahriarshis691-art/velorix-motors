"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LuxuryVehicle } from "@/lib/vehiclesData";

type VehicleCardProps = {
  vehicle: LuxuryVehicle;
  index?: number;
  href?: string;
  linked?: boolean;
  priority?: boolean;
};

export default function VehicleCard({
  vehicle,
  index = 0,
  href,
  linked = true,
  priority = false,
}: VehicleCardProps) {
  const destination = href ?? `/vehicles/${vehicle.id}`;
  const interactive = linked;

  const body = (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
        {vehicle.category}
      </p>
      <h2 className="mt-3 font-serif text-[2rem] font-medium leading-[1.15] tracking-tight text-neutral-900 sm:text-[2.75rem]">
        {vehicle.title}
      </h2>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        <Image
          src={vehicle.coverImage}
          alt={vehicle.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {interactive && (
        <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-800">
          Explore Vehicle
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      )}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {interactive ? (
        <Link
          href={destination}
          className="group block text-inherit no-underline"
          aria-label={`Explore ${vehicle.title}`}
        >
          {body}
        </Link>
      ) : (
        <div>{body}</div>
      )}
    </motion.article>
  );
}
