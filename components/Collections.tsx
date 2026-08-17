"use client";

import { motion } from "framer-motion";

const CARS = [
  {
    id: "vx-1",
    name: "VX-1 APEX",
    tag: "HYPER GT",
    power: "1,120 HP",
    range: "620 KM",
  },
  {
    id: "vx-s",
    name: "VX-S COUPE",
    tag: "GRAND TOURER",
    power: "860 HP",
    range: "710 KM",
  },
  {
    id: "vx-gt",
    name: "VX-GT TOURING",
    tag: "EXECUTIVE",
    power: "740 HP",
    range: "780 KM",
  },
  {
    id: "vx-r",
    name: "VX-R TRACK",
    tag: "COMPETITION",
    power: "1,340 HP",
    range: "480 KM",
  },
  {
    id: "vx-l",
    name: "VX-LIMO SIGNATURE",
    tag: "BESPOKE",
    power: "690 HP",
    range: "740 KM",
  },
  {
    id: "vx-c",
    name: "VX-CROSS SUV",
    tag: "ALL-TERRAIN",
    power: "780 HP",
    range: "650 KM",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative scroll-mt-24 border-t border-white/5 bg-[#050505] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-[11px] tracking-[0.4em] text-vx-red">
          THE GARAGE
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em] text-white sm:text-4xl">
          <span className="metallic-text">COLLECTIONS</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-vx-silver">
          Six signatures. One house. Each VELORIX is hand-commissioned, track
          calibrated, and finished in brushed night metal.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car, i) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B0F19] to-[#050505] p-5 transition hover:border-vx-red/40"
            >
              <div className="relative mb-5 flex h-36 items-end justify-center overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08),_transparent_70%)]">
                <CarSilhouette className="h-28 w-[85%] text-vx-silver/80 transition duration-500 group-hover:text-white" />
                <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-[2px]" />
              </div>
              <p className="font-display text-[10px] tracking-[0.28em] text-vx-red">
                {car.tag}
              </p>
              <h3 className="mt-1 font-display text-lg tracking-[0.12em] text-white">
                {car.name}
              </h3>
              <div className="mt-4 flex gap-6 text-[11px] uppercase tracking-[0.16em] text-vx-silver">
                <span>{car.power}</span>
                <span>{car.range}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M28 78 C48 78 58 52 86 48 C118 43 140 22 168 20 C198 18 214 36 248 46 C276 54 292 72 304 78 H28 Z"
        fill="currentColor"
        opacity="0.22"
      />
      <path
        d="M20 80 C42 80 56 58 84 54 C120 48 142 28 172 26 C204 24 222 42 254 52 C280 60 298 78 312 80"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="78" cy="84" rx="22" ry="8" fill="currentColor" opacity="0.35" />
      <ellipse cx="246" cy="84" rx="22" ry="8" fill="currentColor" opacity="0.35" />
      <circle cx="78" cy="84" r="7" fill="#0B0F19" stroke="currentColor" />
      <circle cx="246" cy="84" r="7" fill="#0B0F19" stroke="currentColor" />
      <path
        d="M118 50 C138 36 162 34 190 44"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.6"
      />
    </svg>
  );
}
