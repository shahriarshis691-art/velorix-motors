"use client";

import Image from "next/image";
import Link from "next/link";
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
      className="relative flex min-h-[60vh] w-full flex-col bg-black pt-16 md:min-h-[100dvh] md:pt-[72px]"
    >
      <div className="relative aspect-square w-full max-h-[calc(100dvh-11rem)] md:max-h-none md:min-h-0 md:flex-1 md:aspect-auto">
        <Image
          src="/images/velorix-hero.png"
          alt="Velorix Motors"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center p-4 md:p-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex w-full flex-col items-stretch gap-3 px-5 pb-8 pt-4 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:px-6 md:pb-14"
      >
        <Link
          href="/#collections"
          onClick={(event) => {
            event.preventDefault();
            onViewCollections();
          }}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0088ff] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:bg-[#0077ee] sm:min-w-[220px] sm:px-8 sm:text-sm"
        >
          Explore Collection
        </Link>
        <button
          type="button"
          onClick={onBookAppointment}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 sm:min-w-[220px] sm:px-8 sm:text-sm"
        >
          Book Test Drive
        </button>
      </motion.div>
    </section>
  );
}
