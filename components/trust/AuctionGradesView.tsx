"use client";

import TrustShell from "@/components/trust/TrustShell";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function AuctionGradesView() {
  const { t } = useLocale();
  const page = t.grades;

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

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200">
        {page.items.map((item) => (
          <div key={item.grade} className="bg-white px-4 py-5 sm:px-5 sm:py-6">
            <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
              {item.label}
            </dt>
            <dd className="mt-1.5 font-serif text-2xl font-medium text-[#111827]">
              {item.grade}
            </dd>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {item.copy}
            </p>
          </div>
        ))}
      </dl>

      <h2 className="mt-14 font-serif text-2xl font-medium text-[#111827]">
        {page.interiorTitle}
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
        {page.interior.map((item) => (
          <div key={item.grade} className="bg-white px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
              {item.grade}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-600">
              {item.copy}
            </dd>
          </div>
        ))}
      </dl>
    </TrustShell>
  );
}
