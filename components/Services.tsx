"use client";

import { ShieldCheck, Ship, Wrench } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";

const ICONS = [Ship, Wrench, ShieldCheck] as const;

export default function Services() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-t border-neutral-200 bg-gradient-to-b from-[#faf9f6] to-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-[11px] tracking-[0.4em] text-neutral-500">
          {t.home.servicesEyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em] text-neutral-900">
          <span className="metallic-text">{t.home.servicesTitle}</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {t.home.serviceItems.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                {Icon ? <Icon className="text-neutral-900" size={22} /> : null}
                <h3 className="mt-4 font-display text-sm tracking-[0.18em] text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
