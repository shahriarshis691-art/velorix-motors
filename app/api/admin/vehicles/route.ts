import { NextResponse } from "next/server";
import { isStaff } from "@/lib/admin-auth";
import { addCustomVehicle, getInventoryById } from "@/lib/inventory-store";
import type { InventoryVehicle } from "@/lib/inventory";
import { inferFuel, shipmentFromStatus } from "@/lib/inventory";
import type { CatalogVehicle } from "@/src/data/catalog";
import type { StockStatus } from "@/lib/stock";

export async function POST(request: Request) {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as Partial<
    InventoryVehicle & { gallery?: string }
  > | null;
  if (!body?.id || !body.title || !body.brand || !body.coverImage || !body.price) {
    return NextResponse.json(
      { error: "id, brand, title, coverImage and price are required." },
      { status: 400 },
    );
  }

  const status = (body.status ?? "Available") as StockStatus;
  const galleryImages = String(body.gallery ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const vehicle = {
    id: body.id.trim(),
    brand: body.brand,
    category: "VEHICLES",
    title: body.title.trim(),
    tagline: body.tagline ?? "",
    coverImage: body.coverImage.trim(),
    galleryImages,
    specs: {
      power: String((body.specs as { power?: string } | undefined)?.power ?? "—"),
      engine: String((body.specs as { engine?: string } | undefined)?.engine ?? "—"),
      mileage: "—",
      drivetrain: "Automatic",
      seating: "5 Seater",
    } as InventoryVehicle["specs"],
    price: body.price,
    year: Number(body.year) || 2018,
    grade: Number(body.grade) || 4,
    interiorGrade: body.interiorGrade ?? "B",
    mileageKm: Number(body.mileageKm) || 50000,
    fuelType: body.fuelType ?? inferFuel(body as CatalogVehicle),
    status,
    shipment: body.shipment ?? shipmentFromStatus(status),
  } as unknown as InventoryVehicle;

  try {
    addCustomVehicle(vehicle);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not add vehicle" },
      { status: 409 },
    );
  }

  return NextResponse.json({ vehicle: getInventoryById(vehicle.id) });
}
