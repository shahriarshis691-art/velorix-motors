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
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#050505] pt-16 sm:pt-[72px]"
    >
      <div className="relative mx-auto min-h-[520px] w-full max-w-5xl flex-1">
        <Image
          src="/images/velorix-hero.png"
          alt="Velorix Motors"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 64rem"
          className="object-contain object-center"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-transparent to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-row flex-wrap items-center justify-center gap-4 px-6 pb-12 pt-2 sm:pb-16"
      >
        <button
          type="button"
          onClick={onViewCollections}
          className="rounded-full bg-[#0088ff] px-6 py-3 font-medium text-white shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:bg-[#0077ee]"
        >
          EXPLORE COLLECTION
        </button>
        <button
          type="button"
          onClick={onBookAppointment}
          className="rounded-full border border-white/20 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
        >
          BOOK TEST DRIVE
        </button>
      </motion.div>
    </section>
  );
}
