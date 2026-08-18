import { NextResponse } from "next/server";
import { isStaff } from "@/lib/admin-auth";
import { getInventoryById, upsertOverlay } from "@/lib/inventory-store";
import type { InventoryOverlay } from "@/lib/inventory";
import { SHIPMENT_STAGES } from "@/lib/inventory";
import type { StockStatus } from "@/lib/stock";

type Body = InventoryOverlay & {
  shipmentStage?: string;
  shipmentNote?: string;
  vessel?: string;
  eta?: string;
};

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await context.params;
  const existing = getInventoryById(id);
  if (!existing) {
    return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as Body | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const status = body.status as StockStatus | undefined;
  const stage = SHIPMENT_STAGES.includes(body.shipmentStage as never)
    ? (body.shipmentStage as (typeof SHIPMENT_STAGES)[number])
    : undefined;

  const overlay = upsertOverlay(id, {
    year: body.year ? Number(body.year) : undefined,
    grade: body.grade ? Number(body.grade) : undefined,
    interiorGrade: body.interiorGrade,
    mileageKm: body.mileageKm ? Number(body.mileageKm) : undefined,
    fuelType: body.fuelType,
    status,
    price: body.price,
    ...(body.coverImage ? { coverImage: body.coverImage } : {}),
    ...(body.galleryImages?.length
      ? { galleryImages: body.galleryImages }
      : {}),
    shipment: {
      stage,
      note: body.shipmentNote,
      vessel: body.vessel,
      eta: body.eta,
    },
  });

  return NextResponse.json({ overlay, vehicle: getInventoryById(id) });
}
