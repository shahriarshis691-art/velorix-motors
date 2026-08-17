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
      className="relative flex h-screen min-h-[100dvh] w-full items-end justify-center overflow-hidden bg-black pb-12 sm:pb-16"
    >
      <Image
        src="/images/velorix-hero.png"
        alt="Velorix Motors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-row items-center gap-3 px-6 sm:gap-5"
      >
        <Link
          href="/#collections"
          onClick={(event) => {
            event.preventDefault();
            onViewCollections();
          }}
          className="rounded-full bg-[#0088ff] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:bg-[#0077ee] sm:px-8 sm:text-sm"
        >
          Explore Collection
        </Link>
        <button
          type="button"
          onClick={onBookAppointment}
          className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:text-sm"
        >
          Book Test Drive
        </button>
      </motion.div>
    </section>
  );
}
