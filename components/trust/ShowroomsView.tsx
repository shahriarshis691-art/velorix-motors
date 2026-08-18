"use client";

import TrustShell from "@/components/trust/TrustShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { SHOWROOMS, mapsUrl } from "@/lib/site";

export default function ShowroomsView() {
  const { locale, t } = useLocale();
  const page = t.showrooms;
  const bn = locale === "bn";

  return (
    <TrustShell>
      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
        {page.eyebrow}
      </p>
      <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
        {page.title}
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
        {page.lead}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6">
        {SHOWROOMS.map((showroom) => (
          <article
            key={showroom.id}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              {page.hoursLabel}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#111827]">
              {bn ? showroom.nameBn : showroom.name}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              {bn ? showroom.addressBn : showroom.address}
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              {bn ? showroom.daysBn : showroom.days} · {showroom.hours}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
              {page.closed}
            </p>
            <a
              href={mapsUrl(showroom.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.2em] text-[#111827] transition-opacity hover:opacity-70"
            >
              {page.map}
            </a>
          </article>
        ))}
      </div>
    </TrustShell>
  );
}
