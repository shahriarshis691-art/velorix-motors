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
      className="relative flex min-h-[85vh] w-full flex-col justify-between overflow-hidden bg-[#faf9f6] px-5 py-10 pt-24 sm:min-h-[90vh] sm:px-8 sm:pt-28"
    >
      <div className="relative mx-auto w-full max-w-5xl flex-1">
        <div className="relative min-h-[42vh] w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm sm:min-h-[520px]">
          <Image
            src="/images/velorix-hero.png"
            alt="Velorix Motors"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 64rem"
            className="object-contain object-center"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto mt-8 flex w-full max-w-5xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
      >
        <button
          type="button"
          onClick={onViewCollections}
          className="rounded-full bg-black px-6 py-3.5 text-xs font-semibold tracking-wider text-white shadow-lg transition-all hover:bg-neutral-800"
        >
          EXPLORE COLLECTION
        </button>
        <button
          type="button"
          onClick={onBookAppointment}
          className="rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-xs font-semibold tracking-wider text-neutral-900 transition-all hover:bg-neutral-100"
        >
          BOOK TEST DRIVE
        </button>
      </motion.div>
    </section>
  );
}
