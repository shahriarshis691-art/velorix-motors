"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import VehicleCard from "@/components/vehicles/VehicleCard";
import {
  filterInventory,
  type InventoryQuery,
  type InventoryVehicle,
} from "@/lib/inventory";

const chip = (active: boolean) =>
  `px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition ${
    active
      ? "bg-neutral-950 text-white"
      : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
  }`;

export default function BrandStockList({
  vehicles,
}: {
  vehicles: InventoryVehicle[];
}) {
  return (
    <Suspense
      fallback={
        <main className="bg-white">
          <div className="mx-auto max-w-3xl px-4 pb-28 pt-28 sm:px-8 sm:pt-32">
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
              Loading inventory
            </p>
          </div>
        </main>
      }
    >
      <BrandStockFilters vehicles={vehicles} />
    </Suspense>
  );
}

function BrandStockFilters({
  vehicles,
}: {
  vehicles: InventoryVehicle[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query: InventoryQuery = {
    q: searchParams.get("q") ?? "",
    year: searchParams.get("year") ?? "all",
    grade: searchParams.get("grade") ?? "all",
    fuel: searchParams.get("fuel") ?? "all",
    status: searchParams.get("status") ?? "all",
  };

  const setQuery = (patch: InventoryQuery) => {
    const next = { ...query, ...patch };
    const params = new URLSearchParams();
    if (next.q) params.set("q", next.q);
    if (next.year && next.year !== "all") params.set("year", next.year);
    if (next.grade && next.grade !== "all") params.set("grade", next.grade);
    if (next.fuel && next.fuel !== "all") params.set("fuel", next.fuel);
    if (next.status && next.status !== "all") params.set("status", next.status);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const years = useMemo(
    () => Array.from(new Set(vehicles.map((item) => item.year))).sort((a, b) => b - a),
    [vehicles],
  );
  const grades = useMemo(
    () => Array.from(new Set(vehicles.map((item) => item.grade))).sort((a, b) => b - a),
    [vehicles],
  );
  const fuels = useMemo(
    () => Array.from(new Set(vehicles.map((item) => item.fuelType))),
    [vehicles],
  );
  const visible = useMemo(
    () => filterInventory(vehicles, query),
    [vehicles, query],
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 pb-28 pt-28 sm:px-8 sm:pt-32">
        <label className="block">
          <span className="sr-only">Search</span>
          <input
            type="search"
            value={query.q ?? ""}
            onChange={(event) => setQuery({ q: event.target.value })}
            placeholder="Axio, Premio, Creta…"
            className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {(["all", "Available", "In Transit", "Pre-Order"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setQuery({ status: item })}
              className={chip((query.status ?? "all") === item)}
            >
              {item === "all" ? "All" : item}
            </button>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <select
            value={query.year ?? "all"}
            onChange={(event) => setQuery({ year: event.target.value })}
            className="border border-neutral-200 bg-white px-3 py-2.5 text-[11px] uppercase tracking-[0.16em] text-neutral-800 outline-none"
            aria-label="Year"
          >
            <option value="all">All years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={query.grade ?? "all"}
            onChange={(event) => setQuery({ grade: event.target.value })}
            className="border border-neutral-200 bg-white px-3 py-2.5 text-[11px] uppercase tracking-[0.16em] text-neutral-800 outline-none"
            aria-label="Auction grade"
          >
            <option value="all">All grades</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade.toFixed(1)}+
              </option>
            ))}
          </select>
          <select
            value={query.fuel ?? "all"}
            onChange={(event) => setQuery({ fuel: event.target.value })}
            className="border border-neutral-200 bg-white px-3 py-2.5 text-[11px] uppercase tracking-[0.16em] text-neutral-800 outline-none"
            aria-label="Fuel"
          >
            <option value="all">All fuel</option>
            {fuels.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
          {visible.length} of {vehicles.length} vehicles
        </p>

        <div className="mt-12 space-y-16">
          {visible.length === 0 ? (
            <p className="text-sm text-neutral-500">
              No vehicles match those filters.
            </p>
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
      </div>
    </main>
  );
}
