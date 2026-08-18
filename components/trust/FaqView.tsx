"use client";

import TrustShell from "@/components/trust/TrustShell";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function FaqView() {
  const { t } = useLocale();
  const page = t.faq;

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

      <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
        {page.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="cursor-pointer list-none font-serif text-xl font-medium text-[#111827] marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span className="mt-1 shrink-0 text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-open:hidden">
                  +
                </span>
                <span className="mt-1 hidden shrink-0 text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-open:inline">
                  –
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </TrustShell>
  );
}
