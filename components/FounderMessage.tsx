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

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl bg-gradient-to-br from-zinc-200/50 via-red-500/25 to-zinc-700/40 p-px shadow-[0_24px_80px_-24px_rgba(239,68,68,0.35),0_0_40px_-12px_rgba(226,232,240,0.18)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111827]">
              <Image
                src="/images/founder.jpg"
                alt={t.home.founderName}
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/55 via-transparent to-white/5"
              />
            </div>
          </div>
        </div>

        <article className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
          <p className="font-display text-[11px] font-semibold tracking-[0.35em] text-red-400">
            {t.home.founderEyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[0.12em] text-white sm:text-4xl">
            {t.home.founderName}
          </h2>
          <p className="mt-3 font-display text-[11px] uppercase tracking-[0.22em] text-zinc-400 sm:text-xs">
            {t.home.founderRole}
          </p>

          <div className="mt-8 flex items-center gap-4" aria-hidden>
            <Quote className="h-7 w-7 shrink-0 text-red-500/80" strokeWidth={1.5} />
            <span className="h-px flex-1 bg-gradient-to-r from-red-500/70 via-zinc-400/35 to-transparent" />
          </div>

          <blockquote className="mt-6 font-serif text-base leading-relaxed text-zinc-200/90 sm:text-lg sm:leading-relaxed">
            {t.home.founderMessage}
          </blockquote>
        </article>
      </div>
    </section>
  );
}
