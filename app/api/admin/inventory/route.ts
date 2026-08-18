import { NextResponse } from "next/server";
import { isStaff } from "@/lib/admin-auth";
import { loadInventory, readReservations } from "@/lib/inventory-store";

export async function GET() {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({
    vehicles: loadInventory(),
    reservations: readReservations(),
  });
}
