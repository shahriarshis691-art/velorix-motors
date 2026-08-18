"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";

export default function About() {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 border-t border-neutral-200 bg-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-[11px] tracking-[0.4em] text-neutral-500">
          {t.home.aboutEyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em] text-neutral-900">
          <span className="metallic-text">{t.home.aboutTitle}</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {t.home.aboutBody}
        </p>
      </div>
    </section>
  );
}
