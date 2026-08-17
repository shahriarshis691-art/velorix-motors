"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { BrandMeta } from "@/lib/brands";

type ListingHeroProps = {
  brand: BrandMeta;
};

export default function ListingHero({ brand }: ListingHeroProps) {
  const scrollToInventory = () => {
    document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-[#faf9f6] sm:h-screen sm:min-h-[100dvh]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={brand.image}
          alt="Brand Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#faf9f6] via-[#faf9f6]/50 to-transparent"
      />

      <div className="relative z-10 flex h-full min-h-[560px] w-full flex-col items-center justify-end px-5 pb-14 text-center sm:min-h-[100dvh] sm:px-6 sm:pb-20">
        <div className="relative mb-3 flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20">
          <Image
            src="/images/velorix-emblem.png"
            alt="VELORIX Motors"
            width={80}
            height={80}
            priority
            className="h-full w-full object-contain drop-shadow-md"
          />
        </div>
        <p className="font-display text-[10px] tracking-[0.32em] text-neutral-700 sm:text-[11px]">
          VELORIX MOTORS
          <span className="mx-2 text-neutral-400">•</span>
          {brand.displayName} COLLECTION
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-[0.16em] text-neutral-900 sm:text-6xl">
          <span className="metallic-text">{brand.displayName}</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {brand.tagline}
        </p>

        <button
          type="button"
          onClick={scrollToInventory}
          className="mt-8 flex min-h-11 flex-col items-center gap-2 text-neutral-700 transition hover:text-neutral-900 sm:mt-10"
          aria-label="Scroll to explore inventory"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.28em]">
            Scroll to Explore Inventory
          </span>
          <ChevronDown size={22} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
