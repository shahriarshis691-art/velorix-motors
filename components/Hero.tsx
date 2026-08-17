"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  onViewCollections: () => void;
  onBookAppointment: () => void;
};

export default function Hero({
  onViewCollections,
  onBookAppointment,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      <div className="relative grid min-h-[600px] lg:block lg:min-h-[720px]">
        <div className="relative order-2 h-[300px] w-full sm:h-[400px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-[720px]">
          <Image
            src="/images/hero-night-drive.png"
            alt="VELORIX MOTORS luxury sedan on a night city street"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] lg:object-[78%_center]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:via-transparent lg:to-[#050505]/25"
          />
        </div>

        <div className="relative z-10 order-1 flex flex-col justify-center px-6 pb-8 pt-28 text-left md:pl-16 lg:min-h-[720px] lg:max-w-xl lg:pb-20 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <span
                aria-hidden
                className="h-4 w-4 shrink-0 rounded-[3px] bg-gradient-to-br from-vx-red via-white to-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.45)]"
              />
              <span className="font-display text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-[10px]">
                Velorix Verified · 100% Auction Grade
              </span>
            </span>

            <p className="mt-6 font-display text-[11px] font-semibold uppercase tracking-[0.38em]">
              <span className="metallic-text">VELORIX MOTORS</span>
            </p>

            <h1 className="mt-3 text-3xl font-light tracking-tight text-white md:text-5xl md:leading-[1.12]">
              Drive Beyond with Premium Re-Conditioned Luxury
            </h1>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-300 md:text-[15px]">
              Performance you can feel, with authentic Japan auction sheets,
              verified mileage, and hybrid / EV efficiency — each lot inspected
              to VELORIX atelier standard before it reaches the showroom.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <motion.button
                type="button"
                onClick={onViewCollections}
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="rounded-full bg-[#1E90FF] px-7 py-3.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_rgba(30,144,255,0.38)] transition hover:bg-[#3aa0ff]"
              >
                Explore Collection
              </motion.button>
              <motion.button
                type="button"
                onClick={onBookAppointment}
                whileHover={{ y: -2, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-white/45 hover:bg-white/10"
              >
                Book Test Drive
              </motion.button>
            </div>
          </motion.div>

          <p className="mt-10 text-xs text-neutral-400 lg:absolute lg:bottom-8 lg:left-16 lg:mt-0">
            Velorix Motors Official Selection • Genuine Auction Grade 4.5+ Verified
          </p>
        </div>
      </div>
    </section>
  );
}
