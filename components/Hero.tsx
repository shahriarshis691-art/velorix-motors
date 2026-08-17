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
      className="relative min-h-[550px] w-full overflow-hidden bg-[#050505] sm:min-h-[620px] lg:min-h-[720px]"
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
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050505]/35 via-[#050505]/10 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505]/80 via-[#050505]/20 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-12 left-6 z-20 flex flex-row flex-wrap items-center gap-4 sm:left-12"
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
