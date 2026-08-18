import { NextResponse } from "next/server";
import { createReservation, getInventoryById } from "@/lib/inventory-store";
import { depositAmount, type PaymentMethod } from "@/lib/inventory";

const METHODS: PaymentMethod[] = ["bkash", "nagad", "bank", "card"];

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    vehicleId?: string;
    name?: string;
    phone?: string;
    email?: string;
    method?: PaymentMethod;
  } | null;

  if (!body?.vehicleId || !body.name || !body.phone || !body.email || !body.method) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!METHODS.includes(body.method)) {
    return NextResponse.json({ error: "Unknown payment method" }, { status: 400 });
  }

  const vehicle = getInventoryById(body.vehicleId);
  if (!vehicle) {
    return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
  }

  const reservation = createReservation({
    vehicleId: vehicle.id,
    vehicleTitle: vehicle.title,
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
    method: body.method,
    amount: depositAmount(),
  });

  return NextResponse.json({ reservation });
}
