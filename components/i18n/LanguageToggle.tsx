"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";

type LanguageToggleProps = {
  tone?: "ink" | "paper";
};

export default function LanguageToggle({ tone = "ink" }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();
  const idle = tone === "paper" ? "text-white/40" : "text-neutral-400";
  const active = tone === "paper" ? "text-white" : "text-neutral-900";
  const hover =
    tone === "paper" ? "hover:text-white/80" : "hover:text-neutral-700";

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${idle}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`transition ${locale === "en" ? active : hover}`}
      >
        EN
      </button>
      <span aria-hidden>|</span>
      <button
        type="button"
        onClick={() => setLocale("bn")}
        className={`transition ${locale === "bn" ? active : hover}`}
      >
        বাং
      </button>
    </div>
  );
}
