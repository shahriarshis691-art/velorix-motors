import type { CatalogVehicle } from "@/src/data/catalog";
import type { FuelType, Vehicle } from "@/lib/cars";
import { parsePriceToNumber } from "@/src/utils/formatters";
import { getStockStatus, type StockStatus } from "@/lib/stock";
import type { BrandSlug } from "@/lib/brands";

export const SHIPMENT_STAGES = [
  "Auction won",
  "On vessel",
  "At Chattogram",
  "PDI",
  "Ready",
] as const;

export type ShipmentStage = (typeof SHIPMENT_STAGES)[number];

export type PaymentMethod = "bkash" | "nagad" | "bank" | "card";

export type Reservation = {
  code: string;
  vehicleId: string;
  vehicleTitle: string;
  name: string;
  phone: string;
  email: string;
  method: PaymentMethod;
  amount: number;
  createdAt: string;
  payment: "awaiting" | "confirmed";
};

export type Shipment = {
  stage: ShipmentStage;
  note: string;
  vessel?: string;
  eta?: string;
};

export type InventoryOverlay = {
  year?: number;
  grade?: number;
  interiorGrade?: string;
  mileageKm?: number;
  fuelType?: FuelType;
  status?: StockStatus;
  price?: string;
  coverImage?: string;
  galleryImages?: string[];
  shipment?: Partial<Shipment>;
};

export type InventoryVehicle = Omit<CatalogVehicle, "status"> & {
  year: number;
  grade: number;
  interiorGrade: string;
  mileageKm: number;
  fuelType: FuelType;
  status: StockStatus;
  shipment: Shipment;
};

export type OverlayMap = Record<string, InventoryOverlay>;

const BRAND_SLUG: Record<string, BrandSlug> = {
  Toyota: "toyota",
  Honda: "honda",
  BMW: "bmw",
  Nissan: "nissan",
  Hyundai: "hyundai",
};

export function inferFuel(vehicle: CatalogVehicle): FuelType {
  const text = `${vehicle.title} ${vehicle.specs.engine ?? ""}`.toLowerCase();
  if (text.includes("hybrid") || text.includes("electric motor") || text.includes("plug-in")) {
    return "Hybrid";
  }
  if (/\bev\b/.test(text) || text.includes("electric")) return "EV";
  return "Petrol";
}

export function shipmentFromStatus(status: StockStatus): Shipment {
  if (status === "Available") {
    return { stage: "Ready", note: "Prepared for viewing in Dhaka." };
  }
  if (status === "In Transit") {
    return {
      stage: "On vessel",
      note: "Sea freight to Chattogram — typical window 3–5 weeks.",
    };
  }
  return {
    stage: "Auction won",
    note: "Reserved against a booking deposit after you approve the sheet.",
  };
}

export function hydrateVehicle(
  vehicle: CatalogVehicle,
  overlay?: InventoryOverlay,
): InventoryVehicle {
  const status = overlay?.status ?? getStockStatus(vehicle);
  const price = overlay?.price ?? vehicle.price;
  const shipmentBase = shipmentFromStatus(status);

  return {
    ...vehicle,
    price,
    coverImage: overlay?.coverImage || vehicle.coverImage,
    galleryImages:
      overlay?.galleryImages && overlay.galleryImages.length > 0
        ? overlay.galleryImages
        : vehicle.galleryImages,
    year: overlay?.year ?? ("year" in vehicle ? Number(vehicle.year) || 2018 : 2018),
    grade: overlay?.grade ?? 4,
    interiorGrade: overlay?.interiorGrade ?? "B",
    mileageKm: overlay?.mileageKm ?? 50000,
    fuelType: overlay?.fuelType ?? inferFuel(vehicle),
    status,
    shipment: {
      ...shipmentBase,
      ...overlay?.shipment,
      stage: overlay?.shipment?.stage ?? shipmentBase.stage,
      note: overlay?.shipment?.note ?? shipmentBase.note,
    },
  } as InventoryVehicle;
}

export function listingBrandSlug(vehicle: {
  brand?: string;
}): BrandSlug | undefined {
  const brand = vehicle.brand ? String(vehicle.brand) : "";
  return BRAND_SLUG[brand];
}

export function toListingVehicle(vehicle: InventoryVehicle): Vehicle | null {
  const brand = listingBrandSlug(vehicle);
  if (!brand) return null;

  const specs = vehicle.specs as Record<string, string | undefined>;
  const gallery = vehicle.galleryImages ?? [];
  const cover = vehicle.coverImage;
  const rear = gallery[0] ?? cover;
  const interior = gallery[1] ?? gallery[0] ?? cover;

  return {
    id: vehicle.id,
    brand,
    modelName: vehicle.title,
    year: vehicle.year,
    grade: vehicle.grade,
    mileage: `${vehicle.mileageKm.toLocaleString("en-IN")} km`,
    mileageKm: vehicle.mileageKm,
    fuelType: vehicle.fuelType,
    engine: specs.engine,
    driveType: specs.drivetrain,
    transmission: specs.transmission ?? specs.drivetrain ?? "Automatic",
    packageName: vehicle.tagline ?? vehicle.title,
    price: vehicle.price,
    priceLakh: parsePriceToNumber(vehicle.price) / 1_00_000,
    exteriorColor: "Japan auction stock",
    interiorGrade: vehicle.interiorGrade,
    media: {
      main: cover,
      rear,
      interior,
      gallery,
    },
    status: vehicle.status,
  };
}

export function depositAmount() {
  const raw = Number(process.env.NEXT_PUBLIC_DEPOSIT_TAKA ?? 50000);
  return Number.isFinite(raw) && raw > 0 ? raw : 50000;
}

export type InventoryQuery = {
  q?: string;
  year?: string;
  grade?: string;
  fuel?: string;
  status?: string;
};

export function filterInventory(
  vehicles: InventoryVehicle[],
  query: InventoryQuery,
): InventoryVehicle[] {
  const needle = (query.q ?? "").trim().toLowerCase();
  const year = query.year && query.year !== "all" ? query.year : "";
  const grade = query.grade && query.grade !== "all" ? Number(query.grade) : 0;
  const fuel = query.fuel && query.fuel !== "all" ? query.fuel : "";
  const status = query.status && query.status !== "all" ? query.status : "";

  return vehicles.filter((vehicle) => {
    if (
      needle &&
      ![vehicle.title, vehicle.tagline, vehicle.price]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle)
    ) {
      return false;
    }
    if (year && String(vehicle.year) !== year) return false;
    if (grade && vehicle.grade < grade) return false;
    if (fuel && vehicle.fuelType !== fuel) return false;
    if (status && vehicle.status !== status) return false;
    return true;
  });
}
