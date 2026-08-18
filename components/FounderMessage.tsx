"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function FounderMessage() {
  const { t } = useLocale();

  return (
    <section
      id="leadership"
      className="relative scroll-mt-24 overflow-hidden bg-[#0B0F19] px-5 py-20 sm:px-8 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.12),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(148,163,184,0.08),transparent_46%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
      />

      <article className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl border border-[#1f2937] shadow-[0_0_24px_-8px_rgba(239,68,68,0.35)] sm:h-48 sm:w-48 lg:h-52 lg:w-52">
            <Image
              src="/images/founder.jpg"
              alt={t.home.founderName}
              fill
              sizes="208px"
              className="object-cover object-top"
            />
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="font-display text-[11px] font-semibold tracking-[0.35em] text-red-400">
              {t.home.founderEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-[0.12em] text-white sm:text-3xl lg:text-4xl">
              {t.home.founderName}
            </h2>
            <p className="mt-3 font-display text-[11px] uppercase tracking-[0.22em] text-zinc-400 sm:text-xs">
              {t.home.founderRole}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4" aria-hidden>
          <Quote className="h-7 w-7 shrink-0 text-red-500/80" strokeWidth={1.5} />
          <span className="h-px flex-1 bg-gradient-to-r from-red-500/70 via-zinc-400/35 to-transparent" />
        </div>

        <blockquote className="mt-6 font-serif text-base leading-relaxed text-zinc-200/90 sm:text-lg sm:leading-relaxed">
          {t.home.founderMessage}
        </blockquote>
      </article>
    </section>
  );
}
