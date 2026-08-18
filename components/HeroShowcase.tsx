"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function HeroShowcase() {
  const { t } = useLocale();

  return (
    <section
      id="showcase"
      className="relative scroll-mt-24 border-t border-neutral-200 bg-[#faf9f6] px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-[11px] tracking-[0.4em] text-neutral-500">
          {t.home.showcaseEyebrow}
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-[0.14em] text-neutral-900">
          <span className="metallic-text">{t.home.showcaseTitle}</span>
        </h2>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm bg-neutral-100 sm:mt-12">
          <Image
            src="/images/velorix-hero-coast.jpg"
            alt="VELORIX MOTORS — Japan-import cars prepared for Bangladesh"
            fill
            sizes="(min-width: 1280px) 72rem, 100vw"
            className="object-cover object-[center_35%]"
          />
        </div>
      </div>
    </section>
  );
}
