"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Play, Search } from "lucide-react";
import CatalogViewer from "@/components/CatalogViewer";
import ConciergeFab from "@/components/ConciergeFab";
import type { CatalogCar } from "@/components/catalog";

const CARS: CatalogCar[] = [
  {
    id: "land-rover",
    name: "LAND ROVER",
    image: "/images/land-rover-defender.png",
    alt: "Metallic red Land Rover Defender circular LED headlight, grille and emblem",
    mode: "zoom",
  },
  {
    id: "bmw",
    name: "BMW",
    image: "/images/bmw-ix.png",
    alt: "Gunmetal grey BMW iX geometric kidney grille and sharp LED lights",
    mode: "rotate",
  },
  {
    id: "nissan",
    name: "NISSAN",
    image: "/images/nissan-z.png",
    alt: "Crimson red Nissan Z signature LED daytime running lamp and honeycomb grille",
    mode: "play",
  },
  {
    id: "toyota",
    name: "TOYOTA",
    image: "/images/toyota-harrier.png",
    alt: "Pearl-white metallic bronze Toyota Harrier chrome grille wing and matrix LED headlight",
    mode: "view",
  },
  {
    id: "honda",
    name: "HONDA",
    image: "/images/honda-civic.png",
    alt: "Platinum-grey Honda CR-V aggressive fascia, LED light bar and Honda emblem",
    mode: "arrow",
  },
];

type CollectionsProps = {
  onBookAppointment?: () => void;
};

export default function Collections({ onBookAppointment }: CollectionsProps) {
  const [active, setActive] = useState<CatalogCar | null>(null);

  return (
    <section
      id="collections"
      className="relative scroll-mt-20 overflow-hidden bg-black px-3 py-16 sm:px-5 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-[11px] tracking-[0.4em] text-vx-red">
              THE GARAGE
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[0.14em] sm:text-4xl">
              <span className="metallic-text">COLLECTIONS</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs leading-relaxed text-vx-silver/70 sm:block">
            Five signatures. Inspect, orbit, play, view, or traverse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-5">
          {CARS.map((car, i) => (
            <CatalogPanel
              key={car.id}
              car={car}
              index={i}
              onOpen={() => setActive(car)}
            />
          ))}
        </div>
      </div>

      <ConciergeFab
        onBookAppointment={onBookAppointment ?? (() => setActive(CARS[0]))}
      />
      <CatalogViewer car={active} onClose={() => setActive(null)} />
    </section>
  );
}

function CatalogPanel({
  car,
  index,
  onOpen,
}: {
  car: CatalogCar;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      whileHover={{ y: -4 }}
      className="group relative isolate aspect-[3/4] w-full overflow-hidden border border-white/[0.12] bg-white text-left"
      aria-label={`Open ${car.name} ${car.mode} view`}
    >
      <Image
        src={car.image}
        alt={car.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className="object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        priority={index < 3}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-3 pb-6 pt-16">
        <span className="mb-3 flex h-8 w-8 items-center justify-center text-white/85 opacity-80 transition group-hover:opacity-100">
          {car.mode === "zoom" && <Search size={16} strokeWidth={1.75} />}
          {car.mode === "rotate" && <Icon360 />}
          {car.mode === "play" && (
            <Play size={15} strokeWidth={1.75} fill="currentColor" />
          )}
          {car.mode === "view" && <Eye size={16} strokeWidth={1.75} />}
          {car.mode === "arrow" && <ArrowUpRight size={16} strokeWidth={1.75} />}
        </span>
        <span className="metallic-text font-display text-[15px] font-bold uppercase tracking-[0.28em] sm:text-base lg:text-[15px] xl:text-lg">
          {car.name}
        </span>
      </div>
    </motion.button>
  );
}

function Icon360() {
  return (
    <svg
      viewBox="0 0 32 32"
      width={22}
      height={22}
      fill="none"
      aria-hidden
      className="text-white"
    >
      <path
        d="M7 16a9 9 0 0 1 14.5-7.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M21.2 5.8v4.2h-4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 16a9 9 0 0 1-14.5 7.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.8 26.2v-4.2h4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="16"
        y="18.2"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7.2"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
      >
        360
      </text>
    </svg>
  );
}
