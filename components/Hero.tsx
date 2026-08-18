"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

type HeroProps = {
  onViewCollections: () => void;
  onBookAppointment: () => void;
};

export default function Hero({
  onViewCollections,
  onBookAppointment,
}: HeroProps) {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative flex w-full flex-col bg-black pt-16 md:min-h-[100dvh] md:overflow-hidden md:bg-[#faf9f6] md:pt-0"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black md:absolute md:inset-0 md:aspect-auto md:h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/velorix-hero-coast.jpg"
          className="h-full w-full object-contain object-center md:object-cover md:object-[center_35%]"
        >
          <source src="/videos/velorix-hero.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden bg-[#faf9f6]/20 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-28 bg-gradient-to-b from-[#faf9f6]/55 to-transparent md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/50 to-transparent md:block"
        />
      </div>

      <div className="relative z-10 bg-black px-5 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:absolute md:inset-0 md:flex md:min-h-[100dvh] md:flex-col md:justify-end md:bg-transparent md:pb-14 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <Link
            href="/#collections"
            onClick={(event) => {
              event.preventDefault();
              onViewCollections();
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#111827] px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 sm:min-w-[200px]"
          >
            {t.home.explore}
          </Link>
          <button
            type="button"
            onClick={onBookAppointment}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/80 bg-white/15 px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/25 sm:min-w-[200px]"
          >
            {t.home.testDrive}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
