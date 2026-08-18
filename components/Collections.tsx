"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ConciergeFab from "@/components/ConciergeFab";
import { useLocale } from "@/components/i18n/LocaleProvider";

const FEATURED = [
  {
    id: "toy-prado-txl-2023",
    name: "Toyota Land Cruiser Prado",
    grade: "TX-L Package / V8 SUV",
    year: 2023,
    transmission: "Automatic",
    fuel: "Petrol",
    image: "/images/cars/prado.jpg",
    alt: "Pearl white Toyota Land Cruiser Prado on a misty mountain coastal highway",
  },
  {
    id: "toy-harrier-z-2023",
    name: "Toyota Harrier",
    grade: "Z Leather Package / Hybrid Crossover",
    year: 2023,
    transmission: "e-CVT Automatic",
    fuel: "Hybrid",
    image: "/images/cars/harrier.jpg",
    alt: "Metallic black Toyota Harrier on an asphalt road beside a calm lake",
  },
  {
    id: "hon-vezel-2023",
    name: "Honda Vezel",
    grade: "e:HEV Z / Compact SUV",
    year: 2023,
    transmission: "e-CVT Automatic",
    fuel: "Hybrid",
    image: "/images/cars/vezel.jpg",
    alt: "Dark blue Honda Vezel on a winding cliffside coastal road",
  },
  {
    id: "toy-crown-g-2024",
    name: "Toyota Crown",
    grade: "Executive Sedan / Luxury Import",
    year: 2024,
    transmission: "e-CVT Automatic",
    fuel: "Hybrid",
    image: "/images/cars/crown.jpg",
    alt: "White Toyota Crown executive sedan cruising a scenic coastal road",
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
      className="relative scroll-mt-20 overflow-hidden bg-[#0B0F19] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.08),transparent_42%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[11px] tracking-[0.4em] text-red-400/90">
              {t.home.garage}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[0.14em] text-white sm:text-4xl">
              {t.home.collections}
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs leading-relaxed text-zinc-400 sm:block">
            {t.home.collectionsLead}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {FEATURED.map((car, i) => (
            <FeaturedCard key={car.id} car={car} index={i} inquire={t.home.inquire} />
          ))}
        </div>
      </div>

      <ConciergeFab
        onBookAppointment={onBookAppointment ?? (() => undefined)}
      />
    </section>
  );
}

function FeaturedCard({
  car,
  index,
  inquire,
}: {
  car: (typeof FEATURED)[number];
  index: number;
  inquire: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 shadow-2xl shadow-black/60"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={car.image}
          alt={car.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover brightness-90 contrast-105 saturate-[0.85] transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-100"
          priority={index < 2}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-950/30 via-transparent to-emerald-900/15 mix-blend-multiply" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-white sm:text-[15px]">
          {car.name}
        </h3>
        <p className="mt-2 font-display text-[11px] uppercase tracking-[0.18em] text-zinc-400">
          {car.year} · {car.grade}
        </p>
        <p className="mt-2 text-xs tracking-wide text-zinc-500">
          {car.transmission} · {car.fuel}
        </p>
        <Link
          href={`/vehicles/${car.id}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-red-400/40 hover:bg-white/10"
        >
          {inquire}
        </Link>
      </div>
    </motion.article>
  );
}
