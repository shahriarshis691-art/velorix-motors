"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatBDT } from "@/src/utils/formatters";
import { useCompare } from "@/components/compare/CompareProvider";
import type { InventoryVehicle } from "@/lib/inventory";

const COMPARE_ROWS = [
  { key: "price", label: "Price" },
  { key: "status", label: "Status" },
  { key: "year", label: "Year" },
  { key: "grade", label: "Auction grade" },
  { key: "power", label: "Horsepower" },
  { key: "mileage", label: "Mileage" },
  { key: "engine", label: "Engine" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "transmission", label: "Transmission" },
  { key: "seating", label: "Seating" },
] as const;

function specValue(vehicle: InventoryVehicle, key: string) {
  if (key === "price") return formatBDT(vehicle.price);
  if (key === "status") return vehicle.status;
  if (key === "year") return String(vehicle.year);
  if (key === "grade") return vehicle.grade.toFixed(1);
  const specs = vehicle.specs as Record<string, string | undefined>;
  return specs[key] || "—";
}

type CompareViewProps = {
  vehicles: InventoryVehicle[];
};

export default function CompareView({ vehicles }: CompareViewProps) {
  const { ids, toggle, clear } = useCompare();
  const router = useRouter();

  const removeVehicle = (id: string) => {
    const next = ids.filter((item) => item !== id);
    toggle(id);
    if (next.length < 2) {
      router.push("/vehicles");
      return;
    }
    router.replace(`/compare?ids=${next.join(",")}`);
  };

  const clearAll = () => {
    clear();
    router.push("/vehicles");
  };

  if (vehicles.length < 2) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
            Compare
          </p>
          <h1 className="mt-2 font-serif text-3xl font-medium text-[#111827]">
            Select two or three cars
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            Add models from a brand list or inventory, then return here.
          </p>
          <Link
            href="/vehicles"
            className="mt-8 inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-[0.2em] text-[#111827]"
          >
            Inventory →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white px-4 pb-24 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          Compare
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-serif text-3xl font-medium text-[#111827] sm:text-4xl">
            Side by side
          </h1>
          <button
            type="button"
            onClick={clearAll}
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 transition hover:text-neutral-900"
          >
            Clear all
          </button>
        </div>

        <div
          className="mt-10 grid gap-px overflow-x-auto border border-neutral-200 bg-neutral-200"
          style={{
            gridTemplateColumns: `minmax(7rem,1fr) repeat(${vehicles.length}, minmax(10rem,1fr))`,
          }}
        >
          <div className="bg-white px-3 py-4 sm:px-4" />
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white px-3 py-4 sm:px-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
                {vehicle.status}
              </p>
              <Link
                href={`/vehicles/${vehicle.id}`}
                className="mt-2 block font-serif text-lg font-medium leading-snug text-[#111827]"
              >
                {vehicle.title}
              </Link>
              <button
                type="button"
                onClick={() => removeVehicle(vehicle.id)}
                className="mt-3 text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900"
              >
                Remove
              </button>
            </div>
          ))}

          {COMPARE_ROWS.map((row) => (
            <div key={row.key} className="contents">
              <div className="bg-white px-3 py-4 sm:px-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
                  {row.label}
                </p>
              </div>
              {vehicles.map((vehicle) => (
                <div
                  key={`${vehicle.id}-${row.key}`}
                  className="bg-white px-3 py-4 sm:px-4"
                >
                  <p className="font-serif text-base font-medium leading-snug text-[#111827]">
                    {specValue(vehicle, row.key)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
