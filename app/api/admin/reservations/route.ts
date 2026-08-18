import { NextResponse } from "next/server";
import { isStaff } from "@/lib/admin-auth";
import { readReservations, updateReservation } from "@/lib/inventory-store";

export async function GET() {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ reservations: readReservations() });
}

export async function PATCH(request: Request) {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => null)) as {
    code?: string;
    payment?: "awaiting" | "confirmed";
  } | null;
  if (!body?.code || !body.payment) {
    return NextResponse.json({ error: "code and payment required" }, { status: 400 });
  }
  const row = updateReservation(body.code, { payment: body.payment });
  if (!row) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ reservation: row });
}
