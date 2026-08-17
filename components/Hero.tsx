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
      className="relative flex min-h-[550px] w-full items-center overflow-hidden bg-[#050505] sm:min-h-[620px] lg:min-h-[720px]"
    >
      <Image
        src="/images/hero-night-drive.png"
        alt="VELORIX MOTORS luxury sedan on a night city street"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] sm:object-right"
      />

      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent sm:via-[#050505]/70 sm:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-transparent to-transparent"
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-start px-5 py-12 pt-24 text-left sm:px-8 sm:pt-28 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col items-start"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] tracking-wider text-neutral-300 backdrop-blur-md sm:text-xs">
            <span
              aria-hidden
              className="h-3.5 w-3.5 shrink-0 rounded-[3px] bg-gradient-to-br from-vx-red via-white to-[#0088ff]"
            />
            VELORIX VERIFIED | 100% AUCTION GRADE
          </span>

          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400 sm:text-xs">
            VELORIX MOTORS
          </p>

          <h1 className="mb-4 text-2xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Drive Beyond with Premium Re-Conditioned Luxury
          </h1>

          <p className="mb-6 max-w-md text-xs font-normal leading-relaxed text-neutral-300/90 sm:mb-8 sm:text-sm">
            Performance you can feel, with authentic Japan auction sheets,
            verified mileage, and hybrid / EV efficiency — each lot inspected
            to VELORIX atelier standard before it reaches the showroom.
          </p>

          <div className="flex w-full flex-row flex-wrap items-center gap-3 sm:w-auto">
            <button
              type="button"
              onClick={onViewCollections}
              className="whitespace-nowrap rounded-full bg-[#0088ff] px-5 py-3 text-xs font-medium text-white shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:bg-[#0077ee] sm:px-7 sm:text-sm"
            >
              EXPLORE COLLECTION
            </button>
            <button
              type="button"
              onClick={onBookAppointment}
              className="whitespace-nowrap rounded-full border border-white/20 bg-transparent px-5 py-3 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-7 sm:text-sm"
            >
              BOOK TEST DRIVE
            </button>
          </div>
        </motion.div>

        <p className="mt-8 text-xs text-neutral-400">
          Velorix Motors Official Selection • Genuine Auction Grade 4.5+ Verified
        </p>
      </div>
    </section>
  );
}
