"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ConciergeFab from "@/components/ConciergeFab";

const CARS = [
  {
    id: "honda",
    name: "HONDA",
    image: "/images/honda-civic-coast.png",
    alt: "Metallic crimson Honda Civic sedan on a coastal highway",
  },
  {
    id: "toyota",
    name: "TOYOTA",
    image: "/images/toyota-harrier-coast.png",
    alt: "Pearl white Toyota Harrier SUV on a coastal highway",
  },
  {
    id: "bmw",
    name: "BMW",
    image: "/images/bmw-coast.png",
    alt: "Gunmetal grey BMW sedan cruising a coastal highway",
  },
  {
    id: "nissan",
    name: "NISSAN",
    image: "/images/nissan-z-coast.png",
    alt: "Metallic red Nissan Z on a coastal highway",
  },
  {
    id: "allion",
    name: "ALLION",
    image: "/images/toyota-allion-coast.png",
    alt: "Pearl white Toyota Allion sedan on a coastal highway",
  },
] as const;

type CollectionsProps = {
  onBookAppointment?: () => void;
};

export default function Collections({ onBookAppointment }: CollectionsProps) {
  return (
    <section
      id="collections"
      className="relative scroll-mt-20 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[11px] tracking-[0.4em] text-neutral-500">
              THE GARAGE
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[0.14em] text-neutral-900 sm:text-4xl">
              <span className="metallic-text">COLLECTIONS</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs leading-relaxed text-neutral-500 sm:block">
            Coastal signatures. Open a marque to inspect re-conditioned stock.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car, i) => (
            <CatalogPanel key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>

      <ConciergeFab
        onBookAppointment={onBookAppointment ?? (() => undefined)}
      />
    </section>
  );
}

function CatalogPanel({
  car,
  index,
}: {
  car: (typeof CARS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
    >
      <Link
        href={`/models/${car.id}`}
        className="group relative isolate block aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-500 hover:shadow-md"
        aria-label={`View ${car.name} models`}
      >
        <Image
          src={car.image}
          alt={car.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={index < 2}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/40 to-transparent" />

        <span className="absolute bottom-4 left-5 z-10 font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-900 sm:text-xs">
          {car.name}
        </span>
      </Link>
    </motion.div>
  );
}
