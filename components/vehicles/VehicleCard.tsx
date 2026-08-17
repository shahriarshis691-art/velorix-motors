"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CatalogVehicle } from "@/src/data/catalog";

type VehicleCardProps = {
  vehicle: CatalogVehicle;
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
      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
        {vehicle.category}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111827] sm:text-3xl">
        {vehicle.title}
      </h2>

      <div className="relative mt-3 mb-4 aspect-[16/10] w-full overflow-hidden rounded-none bg-neutral-50">
        <Image
          src={vehicle.coverImage}
          alt={vehicle.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className={
            "coverFit" in vehicle && vehicle.coverFit === "contain"
              ? "h-full w-full object-contain object-center p-4"
              : "h-full w-full object-cover object-center"
          }
        />
      </div>

      {linked && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-70 group-hover:opacity-70">
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
