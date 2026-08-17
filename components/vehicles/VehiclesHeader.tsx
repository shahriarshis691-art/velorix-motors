"use client";

import Link from "next/link";
import MercedesStar from "@/components/vehicles/MercedesStar";

export default function VehiclesHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-neutral-950">
      <div className="relative mx-auto grid h-14 grid-cols-3 items-center px-4 md:h-[72px] md:max-w-6xl md:px-8">
        <Link
          href="/"
          className="justify-self-start text-[10px] font-medium uppercase tracking-widest text-white/55 transition-colors hover:text-white"
        >
          Velorix
        </Link>

        <Link
          href="/vehicles"
          className="justify-self-center text-white"
          aria-label="Vehicle collection"
        >
          <MercedesStar className="h-9 w-9 md:h-11 md:w-11" />
        </Link>

        <span className="justify-self-end text-[10px] font-medium uppercase tracking-widest text-white/40">
          Atelier
        </span>
      </div>
    </header>
  );
}
