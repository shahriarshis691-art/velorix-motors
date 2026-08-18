import fs from "fs";
import path from "path";
import {
  hydrateVehicle,
  listingBrandSlug,
  shipmentFromStatus,
  toListingVehicle,
  type InventoryOverlay,
  type InventoryVehicle,
  type OverlayMap,
  type Reservation,
} from "@/lib/inventory";
import {
  getBrandCatalogVehicles,
  getVehicleById as getCatalogById,
} from "@/src/data/catalog";
import type { CatalogVehicle } from "@/src/data/catalog";
import type { Vehicle } from "@/lib/cars";
import type { BrandSlug } from "@/lib/brands";

const DATA = path.join(process.cwd(), "data");
const OVERLAY_FILE = path.join(DATA, "inventory.json");
const CUSTOM_FILE = path.join(DATA, "custom-vehicles.json");
const RESERVATIONS_FILE = path.join(DATA, "reservations.json");

function readJson<T>(file: string, fallback: T): T {
  try {
    const raw = fs.readFileSync(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(file: string, value: unknown) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function readOverlays(): OverlayMap {
  return readJson<OverlayMap>(OVERLAY_FILE, {});
}

export function readCustomVehicles() {
  const rows = readJson<unknown[]>(CUSTOM_FILE, []);
  return Array.isArray(rows) ? rows : [];
}

export function loadInventory(): InventoryVehicle[] {
  const overlays = readOverlays();
  const custom = readCustomVehicles() as InventoryVehicle[];
  const catalog = getBrandCatalogVehicles();
  const seen = new Set(catalog.map((vehicle) => vehicle.id));
  const extras = custom.filter(
    (vehicle) => vehicle?.id && !seen.has(vehicle.id),
  ) as CatalogVehicle[];
  return [...catalog, ...extras].map((vehicle) =>
    hydrateVehicle(vehicle, overlays[vehicle.id]),
  );
}

export function getInventoryById(id: string): InventoryVehicle | undefined {
  const listed = loadInventory().find((vehicle) => vehicle.id === id);
  if (listed) return listed;
  const catalog = getCatalogById(id);
  if (!catalog) return undefined;
  return hydrateVehicle(catalog, readOverlays()[id]);
}

export function getInventoryByBrand(slug: BrandSlug): InventoryVehicle[] {
  return loadInventory().filter((vehicle) => listingBrandSlug(vehicle) === slug);
}

export function listingCarsByBrand(slug: BrandSlug): Vehicle[] {
  return getInventoryByBrand(slug)
    .map(toListingVehicle)
    .filter((car): car is Vehicle => Boolean(car));
}

export function upsertOverlay(id: string, patch: InventoryOverlay) {
  const overlays = readOverlays();
  overlays[id] = { ...overlays[id], ...patch };
  writeJson(OVERLAY_FILE, overlays);
  return overlays[id];
}

export function addCustomVehicle(vehicle: InventoryVehicle) {
  const custom = readCustomVehicles() as InventoryVehicle[];
  if (getCatalogById(vehicle.id) || custom.some((row) => row.id === vehicle.id)) {
    throw new Error("A vehicle with this id already exists.");
  }
  custom.push(vehicle);
  writeJson(CUSTOM_FILE, custom);
  if (vehicle.year || vehicle.grade || vehicle.status) {
    upsertOverlay(vehicle.id, {
      year: vehicle.year,
      grade: vehicle.grade,
      interiorGrade: vehicle.interiorGrade,
      mileageKm: vehicle.mileageKm,
      fuelType: vehicle.fuelType,
      status: vehicle.status,
      price: vehicle.price,
      shipment: vehicle.shipment,
    });
  }
  return vehicle;
}

export function readReservations(): Reservation[] {
  return readJson<Reservation[]>(RESERVATIONS_FILE, []);
}

export function writeReservations(rows: Reservation[]) {
  writeJson(RESERVATIONS_FILE, rows);
}

export function getReservation(code: string): Reservation | undefined {
  return readReservations().find(
    (row) => row.code.toUpperCase() === code.toUpperCase(),
  );
}

function reservationCode() {
  const slice = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `VX-${slice}`;
}

export function createReservation(
  input: Omit<Reservation, "code" | "createdAt" | "payment">,
): Reservation {
  const rows = readReservations();
  let code = reservationCode();
  while (rows.some((row) => row.code === code)) {
    code = reservationCode();
  }
  const row: Reservation = {
    ...input,
    code,
    createdAt: new Date().toISOString(),
    payment: "awaiting",
  };
  rows.unshift(row);
  writeReservations(rows);
  return row;
}

export function updateReservation(
  code: string,
  patch: Partial<Pick<Reservation, "payment">>,
) {
  const rows = readReservations();
  const index = rows.findIndex(
    (row) => row.code.toUpperCase() === code.toUpperCase(),
  );
  if (index < 0) return undefined;
  rows[index] = { ...rows[index], ...patch };
  writeReservations(rows);
  return rows[index];
}

export function importInventoryRows(rows: Array<Record<string, string>>) {
  const result = { added: 0, updated: 0, errors: [] as string[] };

  for (const [index, row] of rows.entries()) {
    const id = (row.id ?? "").trim();
    if (!id) {
      result.errors.push(`Row ${index + 2}: missing id`);
      continue;
    }

    const overlay: InventoryOverlay = {};
    if (row.price) overlay.price = row.price;
    if (row.year) overlay.year = Number(row.year);
    if (row.grade) overlay.grade = Number(row.grade);
    if (row.mileageKm) overlay.mileageKm = Number(row.mileageKm);
    if (row.fuelType) overlay.fuelType = row.fuelType as InventoryVehicle["fuelType"];
    if (row.status) overlay.status = row.status as InventoryVehicle["status"];
    if (row.interiorGrade) overlay.interiorGrade = row.interiorGrade;
    if (row.coverImage) overlay.coverImage = row.coverImage;
    if (row.gallery) {
      overlay.galleryImages = row.gallery
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    try {
      const existing = getInventoryById(id);
      if (existing) {
        upsertOverlay(id, overlay);
        result.updated += 1;
        continue;
      }
      if (!row.brand || !row.title || !row.price) {
        result.errors.push(`${id}: new cars need brand, title and price`);
        continue;
      }
      addCustomVehicle({
        id,
        brand: row.brand,
        category: "VEHICLES",
        title: row.title,
        tagline: row.tagline ?? "",
        coverImage: row.coverImage || "/images/toyota/axio.jpg",
        galleryImages: overlay.galleryImages ?? [],
        specs: {
          power: row.power ?? "—",
          engine: row.engine ?? "—",
          mileage: "—",
          drivetrain: "Automatic",
          seating: "5 Seater",
        } as InventoryVehicle["specs"],
        price: row.price,
        year: overlay.year ?? 2018,
        grade: overlay.grade ?? 4,
        interiorGrade: overlay.interiorGrade ?? "B",
        mileageKm: overlay.mileageKm ?? 50000,
        fuelType: overlay.fuelType ?? "Petrol",
        status: overlay.status ?? "Available",
        shipment: shipmentFromStatus(overlay.status ?? "Available"),
      } as unknown as InventoryVehicle);
      result.added += 1;
    } catch (error) {
      result.errors.push(
        `${id}: ${error instanceof Error ? error.message : "import failed"}`,
      );
    }
  }

  return result;
}
