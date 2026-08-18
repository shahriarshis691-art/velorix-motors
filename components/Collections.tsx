"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ConciergeFab from "@/components/ConciergeFab";
import { useLocale } from "@/components/i18n/LocaleProvider";

const CARS = [
  {
    id: "honda",
    name: "HONDA",
    href: "/brands/honda",
    image: "/images/honda-civic.jpg",
    alt: "Metallic grey Honda Civic sedan, front three-quarter view",
    objectClass: "object-[50%_65%]",
  },
  {
    id: "toyota",
    name: "TOYOTA",
    href: "/brands/toyota",
    image: "/images/toyota-avalon.jpg",
    alt: "Silver Toyota sedan in a clean studio render, front three-quarter view",
    objectClass: "object-center",
  },
  {
    id: "bmw",
    name: "BMW",
    href: "/brands/bmw",
    image: "/images/bmw-5-series.jpg",
    alt: "Silver BMW 5 Series sedan in motion, front three-quarter view",
    objectClass: "object-center",
  },
  {
    id: "nissan",
    name: "NISSAN",
    href: "/brands/nissan",
    image: "/images/nissan-versa.jpg",
    alt: "White Nissan Versa sedan on a studio background",
    objectClass: "object-center",
  },
  {
    id: "hyundai",
    name: "HYUNDAI",
    href: "/brands/hyundai",
    image: "/images/hyundai-alcazar.jpg",
    alt: "Dark metallic Hyundai Alcazar SUV, front three-quarter studio view",
    objectClass: "object-center",
  },
] as const;

type CollectionsProps = {
  onBookAppointment?: () => void;
};

export default function Collections({ onBookAppointment }: CollectionsProps) {
  const { t } = useLocale();

  return (
    <section
      id="collections"
      className="relative scroll-mt-20 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[11px] tracking-[0.4em] text-neutral-500">
              {t.home.garage}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[0.14em] text-neutral-900 sm:text-4xl">
              <span className="metallic-text">{t.home.collections}</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs leading-relaxed text-neutral-500 sm:block">
            {t.home.collectionsLead}
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
        href={car.href}
        className="cinematic-frame group relative isolate block aspect-[16/10] w-full"
        aria-label={`View ${car.name} models`}
      >
        <Image
          src={car.image}
          alt={car.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`cinematic-photo h-full w-full object-cover group-hover:scale-105 group-hover:brightness-100 ${car.objectClass}`}
          priority={index < 2}
        />

        <div className="cinematic-grade" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        <span className="absolute bottom-4 left-4 z-10 font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-white sm:text-xs">
          {car.name}
        </span>
      </Link>
    </motion.div>
  );
}
