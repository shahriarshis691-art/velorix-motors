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
    <section className="relative h-screen min-h-[100dvh] w-full overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] min-h-[100dvh] w-full">
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
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"
      />

      <div className="relative z-10 flex h-[100dvh] min-h-[100dvh] w-full flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20">
        <div className="relative mb-3 flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20">
          <Image
            src="/images/velorix-emblem.png"
            alt="VELORIX Motors"
            width={80}
            height={80}
            priority
            className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          />
        </div>
        <p className="font-display text-[10px] tracking-[0.32em] sm:text-[11px]">
          <span className="metallic-text">VELORIX MOTORS</span>
          <span className="mx-2 text-white/40">•</span>
          <span className="metallic-text">{brand.displayName} COLLECTION</span>
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold tracking-[0.16em] sm:text-6xl">
          <span className="metallic-text">{brand.displayName}</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
          {brand.tagline}
        </p>

        <button
          type="button"
          onClick={scrollToInventory}
          className="mt-10 flex flex-col items-center gap-2 text-white/70 transition hover:text-white"
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
