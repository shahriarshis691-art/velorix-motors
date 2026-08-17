"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LuxuryVehicle } from "@/src/data/vehicles";

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

  const body = (
    <>
      <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
        {vehicle.category}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111111] md:text-3xl">
        {vehicle.title}
      </h2>

      <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-100 md:mt-6">
        <Image
          src={vehicle.coverImage}
          alt={vehicle.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 720px"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {linked && (
        <span className="mt-4 inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-widest text-[#111111] transition-opacity duration-300 group-hover:opacity-50 group-active:opacity-50">
          Explore Vehicle →
        </span>
      )}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {linked ? (
        <Link
          href={destination}
          className="group block min-h-[44px] py-1 text-inherit no-underline"
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
