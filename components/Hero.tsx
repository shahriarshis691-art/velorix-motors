"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BrushedMetalButton from "@/components/ui/BrushedMetalButton";
import { VEmblem } from "@/components/ui/VelorixLogo";

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
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-showroom"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,23,42,0.28)_0%,_transparent_58%)]" />

        <div className="neon-pillar absolute left-[6%] top-[10%] hidden h-[70%] w-[6px] rounded-full sm:block md:left-[9%] md:w-[7px]" />
        <div className="neon-pillar absolute right-[6%] top-[10%] hidden h-[70%] w-[6px] rounded-full sm:block md:right-[9%] md:w-[7px]" />
        <div className="absolute left-[5.5%] top-[20%] hidden h-[46%] w-[18px] rounded-full bg-cyan-300/10 blur-md sm:block md:left-[8.5%]" />
        <div className="absolute right-[5.5%] top-[20%] hidden h-[46%] w-[18px] rounded-full bg-cyan-300/10 blur-md sm:block md:right-[8.5%]" />

        <div className="floor-stage absolute inset-x-0 bottom-0 h-[38%]">
          <div className="floor-grid absolute inset-0 opacity-70" />
          <div className="floor-strip absolute bottom-0 left-1/2 h-[72%] w-[3px] -translate-x-1/2 sm:w-[4px]" />
        </div>

        <div className="showroom-vignette absolute inset-0" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center px-4 pb-8 pt-[88px] sm:pb-10">
        <div className="relative flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="relative mx-auto h-[min(52svh,36rem)] w-full max-w-5xl">
              <Image
                src="/images/hero-car.png"
                alt="VELORIX luxury electric supercar in a dark showroom"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-contain object-center drop-shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
              />
              <div className="pointer-events-none absolute inset-x-[20%] top-[38%] h-12">
                <div className="absolute left-[6%] h-8 w-16 rounded-full bg-white/80 blur-xl sm:h-10 sm:w-24" />
                <div className="absolute right-[6%] h-8 w-16 rounded-full bg-white/80 blur-xl sm:h-10 sm:w-24" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="pointer-events-none absolute left-1/2 top-[2%] z-20 w-[42%] max-w-[240px] -translate-x-1/2 sm:top-[-2%] sm:w-[28%] sm:max-w-[260px]"
            >
              <VEmblem
                className="h-auto w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
                size={320}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-20 -mt-4 flex flex-col items-center text-center sm:-mt-8"
        >
          <h1 className="font-display text-3xl font-extrabold tracking-[0.16em] sm:text-5xl md:text-6xl">
            <span className="metallic-text">VELORI</span>
            <span className="relative inline-block">
              <span className="metallic-text">X</span>
              <span
                aria-hidden
                className="absolute left-[46%] top-[8%] h-[84%] w-[3px] -translate-x-1/2 rotate-[-32deg] rounded-full bg-vx-red shadow-[0_0_14px_#ef4444]"
              />
            </span>
          </h1>
          <p className="mt-2 flex items-center gap-3 font-display text-[10px] font-medium uppercase tracking-[0.55em] text-vx-silver sm:text-xs">
            <span className="h-px w-8 bg-vx-silver/40 sm:w-12" />
            Motors
            <span className="h-px w-8 bg-vx-silver/40 sm:w-12" />
          </p>
          <p className="mt-4 font-display text-[11px] font-medium uppercase tracking-[0.55em] text-vx-silver/70 sm:mt-5 sm:text-sm sm:tracking-[0.72em]">
            Drive Beyond
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative z-20 mt-6 flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
        >
          <BrushedMetalButton
            onClick={onViewCollections}
            className="min-h-[52px] sm:min-h-[56px] sm:min-w-[220px]"
          >
            View Collections
          </BrushedMetalButton>
          <BrushedMetalButton
            onClick={onBookAppointment}
            className="min-h-[52px] sm:min-h-[56px] sm:min-w-[300px]"
          >
            <span className="block leading-tight">
              Apply for a Test Drive
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Appointment
            </span>
          </BrushedMetalButton>
        </motion.div>
      </div>
    </section>
  );
}
