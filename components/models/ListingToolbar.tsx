"use client";

import { Search } from "lucide-react";
import {
  PRICE_RANGES,
  type SortKey,
  type VehicleFilters,
} from "@/lib/cars";

const selectClass =
  "h-11 w-full rounded-lg border border-white/10 bg-[#0B0F19] px-3 text-xs uppercase tracking-[0.12em] text-vx-metal outline-none transition focus:border-vx-red/60 focus:ring-1 focus:ring-vx-red/40";

type ListingToolbarProps = {
  filters: VehicleFilters;
  years: number[];
  grades: number[];
  fuels: string[];
  onChange: (next: VehicleFilters) => void;
};

export default function ListingToolbar({
  filters,
  years,
  grades,
  fuels,
  onChange,
}: ListingToolbarProps) {
  const set = <K extends keyof VehicleFilters>(key: K, value: VehicleFilters[K]) =>
    onChange({ ...filters, [key]: value });

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-4 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] backdrop-blur-md sm:p-5">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">
        <label className="relative xl:col-span-2">
          <Search
            size={14}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-vx-silver/70"
          />
          <input
            type="search"
            value={filters.query}
            onChange={(e) => set("query", e.target.value)}
            placeholder="Search by model name"
            className="h-11 w-full rounded-lg border border-white/10 bg-[#0B0F19] pl-9 pr-3 text-sm text-vx-metal outline-none placeholder:text-vx-silver/40 focus:border-vx-red/60 focus:ring-1 focus:ring-vx-red/40"
          />
        </label>

        <select
          value={filters.year}
          onChange={(e) => set("year", e.target.value)}
          className={selectClass}
          aria-label="Filter by year"
        >
          <option value="all">All years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={filters.grade}
          onChange={(e) => set("grade", e.target.value)}
          className={selectClass}
          aria-label="Filter by auction grade"
        >
          <option value="all">All grades</option>
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              Grade {grade.toFixed(1)}+
            </option>
          ))}
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => set("priceRange", e.target.value)}
          className={selectClass}
          aria-label="Filter by price range"
        >
          {PRICE_RANGES.map((range) => (
            <option key={range.id} value={range.id}>
              {range.label}
            </option>
          ))}
        </select>

        <select
          value={filters.fuelType}
          onChange={(e) => set("fuelType", e.target.value)}
          className={selectClass}
          aria-label="Filter by fuel type"
        >
          <option value="all">All fuel types</option>
          {fuels.map((fuel) => (
            <option key={fuel} value={fuel}>
              {fuel}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-[0.18em] text-vx-silver/60">
          Auction-grade reconditioned stock
        </p>
        <select
          value={filters.sort}
          onChange={(e) => set("sort", e.target.value as SortKey)}
          className={`${selectClass} sm:max-w-xs`}
          aria-label="Sort listings"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="mileage">Mileage: Low to High</option>
        </select>
      </div>
    </div>
  );
}
