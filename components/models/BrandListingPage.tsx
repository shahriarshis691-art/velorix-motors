"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import TestDriveModal from "@/components/TestDriveModal";
import BrandEmblem from "@/components/models/BrandEmblem";
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
    if (car.status === "Pre-Order") {
      openTestDrive(car);
      return;
    }
    setDetails(car);
  };

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar onBookAppointment={() => openTestDrive()} />

      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,211,238,0.08),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-vx-silver/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#collections" className="transition hover:text-white">
              Models
            </Link>
            <ChevronRight size={12} />
            <span className="text-white">{brand.displayName}</span>
          </nav>

          <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(34,211,238,0.1),0_0_40px_rgba(34,211,238,0.06)]">
            <div className="grid items-stretch md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-4">
                  <BrandEmblem slug={brand.slug} />
                  <div>
                    <p className="font-display text-[10px] tracking-[0.35em] text-vx-red">
                      AUCTION ATELIER
                    </p>
                    <h1 className="mt-1 font-display text-3xl font-bold tracking-[0.16em] sm:text-5xl">
                      <span className="metallic-text">{brand.displayName}</span>
                    </h1>
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-vx-silver/80">
                  {brand.tagline}
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 font-display text-[11px] uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/40 hover:bg-white/5"
                >
                  <ArrowLeft size={14} /> Back to Home
                </Link>
              </div>
              <div className="relative min-h-[200px] border-t border-white/10 md:border-l md:border-t-0">
                <Image
                  src={brand.image}
                  alt={`${brand.name} atelier`}
                  fill
                  priority
                  className="object-cover object-[center_18%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent md:from-[#0a0a0a]/80" />
              </div>
            </div>
          </div>

          <ListingToolbar
            filters={filters}
            years={years}
            grades={grades}
            fuels={fuels}
            onChange={setFilters}
          />

          <p className="mt-6 mb-4 font-display text-[11px] tracking-[0.22em] text-vx-silver/70">
            {visible.length} VEHICLE{visible.length === 1 ? "" : "S"} · {brand.displayName}
          </p>

          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((car) => (
                <VehicleCard
                  key={car.id}
                  car={car}
                  onBook={openTestDrive}
                  onDetails={handleDetails}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-[#0a0a0a] px-6 py-16 text-center">
              <p className="font-display text-lg tracking-[0.16em] text-white">
                No cars found under selected filters
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-vx-silver/70">
                Widen the search, or request a Japan auction pre-order and a
                VELORIX concierge will source a matching lot.
              </p>
              <button
                type="button"
                onClick={() => openTestDrive()}
                className="mt-8 rounded-lg bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#64748b] px-6 py-3 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-vx-ink shadow-red-glow"
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
