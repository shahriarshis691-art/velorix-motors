"use client";

import Link from "next/link";
import MercedesStar from "@/components/vehicles/MercedesStar";

export default function VehiclesHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-neutral-950">
      <div className="relative mx-auto grid h-[72px] max-w-6xl grid-cols-3 items-center px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="justify-self-start text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white"
        >
          Velorix
        </Link>

        <Link
          href="/vehicles"
          className="justify-self-center text-white"
          aria-label="Mercedes-Benz collection"
        >
          <MercedesStar className="h-11 w-11 sm:h-12 sm:w-12" />
        </Link>

        <span className="justify-self-end text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
          Atelier
        </span>
      </div>
    </header>
  );
}
