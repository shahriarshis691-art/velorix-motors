"use client";

import TrustShell from "@/components/trust/TrustShell";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function ImportProcessView() {
  const { t } = useLocale();
  const page = t.import;

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

      <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {page.steps.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="font-display text-sm tracking-[0.18em] text-neutral-900">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {step.copy}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-14 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
        {page.timelineEyebrow}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-medium text-[#111827]">
        {page.timelineTitle}
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
        {page.timeline.map((row) => (
          <div key={row.label} className="bg-white px-4 py-4 sm:px-5 sm:py-5">
            <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
              {row.label}
            </dt>
            <dd className="mt-1.5 font-serif text-lg font-medium text-[#111827]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </TrustShell>
  );
}
