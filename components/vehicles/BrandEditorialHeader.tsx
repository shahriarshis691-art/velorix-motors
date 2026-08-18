"use client";

import Link from "next/link";
import LanguageToggle from "@/components/i18n/LanguageToggle";

type BrandEditorialHeaderProps = {
  brand: string;
  href: string;
};

export default function BrandEditorialHeader({
  brand,
  href,
}: BrandEditorialHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-neutral-950">
      <div className="relative mx-auto grid h-14 max-w-3xl grid-cols-3 items-center px-4 sm:h-16 sm:px-8">
        <Link
          href="/"
          className="justify-self-start text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
        >
          Velorix
        </Link>
        <Link
          href={href}
          className="justify-self-center text-xs font-medium uppercase tracking-[0.28em] text-white"
        >
          {brand}
        </Link>
        <div className="justify-self-end">
          <LanguageToggle tone="paper" />
        </div>
      </div>
    </header>
  );
}
