"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ListingHero from "@/components/ListingHero";
import TestDriveModal from "@/components/TestDriveModal";
import ListingToolbar from "@/components/models/ListingToolbar";
import VehicleCard from "@/components/models/VehicleCard";
import VehicleDetailsModal from "@/components/models/VehicleDetailsModal";
import type { BrandMeta } from "@/lib/brands";
import {
  DEFAULT_FILTERS,
  filterVehicles,
  formatVehicleModel,
  uniqueFuels,
  uniqueGrades,
  uniqueYears,
  type Vehicle,
  type VehicleFilters,
} from "@/lib/cars";

type BrandListingPageProps = {
  brand: BrandMeta;
  cars: Vehicle[];
};

export default function BrandListingPage({ brand, cars }: BrandListingPageProps) {
  const [filters, setFilters] = useState<VehicleFilters>(DEFAULT_FILTERS);
  const [details, setDetails] = useState<Vehicle | null>(null);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [prefillModel, setPrefillModel] = useState<string>();
  const [prefillSerial, setPrefillSerial] = useState<string>();

  const visible = useMemo(() => filterVehicles(cars, filters), [cars, filters]);
  const years = useMemo(() => uniqueYears(cars), [cars]);
  const grades = useMemo(() => uniqueGrades(cars), [cars]);
  const fuels = useMemo(() => uniqueFuels(cars), [cars]);

  const openTestDrive = (car?: Vehicle) => {
    setDetails(null);
    if (car) {
      setPrefillModel(formatVehicleModel(car));
      setPrefillSerial(car.id.toUpperCase());
    } else {
      setPrefillModel(`${brand.name} Auction Pre-Order`);
      setPrefillSerial(undefined);
    }
    setAppointmentOpen(true);
  };

  const handleDetails = (car: Vehicle) => {
    setDetails(car);
  };

  return (
    <main className="relative min-h-screen bg-[#faf9f6]">
      <Navbar onBookAppointment={() => openTestDrive()} />

      <div className="sticky top-0 z-0 h-[85vh] min-h-[560px] sm:h-screen sm:min-h-[100dvh]">
        <ListingHero brand={brand} />
      </div>

      <section
        id="inventory"
        className="relative z-10 min-h-screen bg-[#faf9f6] px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8"
      >
        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500"
          >
            <Link href="/" className="transition hover:text-neutral-900">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#collections" className="transition hover:text-neutral-900">
              Models
            </Link>
            <ChevronRight size={12} />
            <span className="text-neutral-900">{brand.displayName}</span>
          </nav>

          <ListingToolbar
            filters={filters}
            years={years}
            grades={grades}
            fuels={fuels}
            onChange={setFilters}
          />

          <p className="mt-6 mb-4 font-display text-[11px] tracking-[0.22em] text-neutral-500">
            {visible.length} VEHICLE{visible.length === 1 ? "" : "S"} · {brand.displayName}
          </p>

          {visible.length > 0 ? (
            <div
              className={
                brand.slug === "allion"
                  ? "grid grid-cols-1 gap-6 lg:grid-cols-2"
                  : "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
              }
            >
              {visible.map((car) => (
                <VehicleCard
                  key={car.id}
                  car={car}
                  onPreOrder={openTestDrive}
                  onDetails={handleDetails}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center">
              <p className="font-display text-lg tracking-[0.16em] text-neutral-900">
                No cars found under selected filters
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">
                Widen the search, or request a Japan auction pre-order and a
                VELORIX concierge will source a matching lot.
              </p>
              <button
                type="button"
                onClick={() => openTestDrive()}
                className="mt-8 min-h-11 rounded-full bg-[#0a0a0a] px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
              >
                Request Auction Pre-Order
              </button>
            </div>
          )}
        </div>
      </section>

      <VehicleDetailsModal
        car={details}
        onClose={() => setDetails(null)}
        onBook={openTestDrive}
      />
      <TestDriveModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        prefillModel={prefillModel}
        prefillSerial={prefillSerial}
      />
    </main>
  );
}
