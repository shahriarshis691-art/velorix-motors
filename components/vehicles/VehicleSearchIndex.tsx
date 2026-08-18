"use client";

import { useMemo, useState } from "react";
import VehicleCard from "@/components/vehicles/VehicleCard";
import type { InventoryVehicle } from "@/lib/inventory";
import { getStockStatus } from "@/lib/stock";
import { useLocale } from "@/components/i18n/LocaleProvider";

type VehicleSearchIndexProps = {
  vehicles: InventoryVehicle[];
};

const STATUS_FILTERS = ["All", "Available", "In Transit", "Pre-Order"] as const;

export default function VehicleSearchIndex({
  vehicles,
}: VehicleSearchIndexProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof STATUS_FILTERS)[number]>("All");
  const { t } = useLocale();
  const page = t.inventory;
  const statusLabel = {
    All: page.all,
    Available: page.available,
    "In Transit": page.transit,
    "Pre-Order": page.preorder,
  } as const;

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return vehicles.filter((vehicle) => {
      const stock = getStockStatus(vehicle);
      if (status !== "All" && stock !== status) return false;
      if (!needle) return true;
      const brand = "brand" in vehicle ? String(vehicle.brand) : "";
      const haystack = [
        vehicle.title,
        brand,
        vehicle.price,
        vehicle.tagline,
        stock,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, status, vehicles]);

  return (
    <main className="bg-white px-4 pb-28 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          {page.eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {page.lead}
        </p>

        <label className="mt-8 block">
          <span className="sr-only">{page.eyebrow}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Axio, Premio, Creta, ৳ …"
            className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {STATUS_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition ${
                status === item
                  ? "bg-neutral-950 text-white"
                  : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
              }`}
            >
              {statusLabel[item]}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
          {page.count
            .replace("{n}", String(visible.length))
            .replace("{total}", String(vehicles.length))}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-16">
        {visible.length === 0 ? (
          <p className="text-sm text-neutral-500">{page.empty}</p>
        ) : (
          visible.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              index={index}
              priority={index === 0}
            />
          ))
        )}
      </div>
    </main>
  );
}
