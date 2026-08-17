"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MercedesStar from "@/components/vehicles/MercedesStar";

const BRAND_HEADERS = [
  { prefix: "/vehicles/honda", label: "Honda", href: "/brands/honda" },
  { prefix: "/vehicles/toyota", label: "Toyota", href: "/brands/toyota" },
  { prefix: "/vehicles/bmw", label: "BMW", href: "/brands/bmw" },
  { prefix: "/vehicles/nissan", label: "Nissan", href: "/brands/nissan" },
  { prefix: "/vehicles/hyundai", label: "Hyundai", href: "/brands/hyundai" },
] as const;

export default function VehiclesHeader() {
  const pathname = usePathname();
  const brand = BRAND_HEADERS.find((item) => pathname.startsWith(item.prefix));

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-neutral-950">
      <div className="relative mx-auto grid h-14 grid-cols-3 items-center px-4 sm:px-8 md:h-[72px] md:max-w-3xl">
        <Link
          href="/"
          className="justify-self-start text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
        >
          Velorix
        </Link>

        {brand ? (
          <Link
            href={brand.href}
            className="justify-self-center text-xs font-medium uppercase tracking-[0.28em] text-white"
          >
            {brand.label}
          </Link>
        ) : (
          <Link
            href="/vehicles"
            className="justify-self-center text-white"
            aria-label="Vehicle collection"
          >
            <MercedesStar className="h-9 w-9 md:h-11 md:w-11" />
          </Link>
        )}

        <span className="justify-self-end text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
          Atelier
        </span>
      </div>
    </header>
  );
}
