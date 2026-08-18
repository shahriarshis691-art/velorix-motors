import { NextResponse } from "next/server";
import { getReservation } from "@/lib/inventory-store";

export async function GET(
  _request: Request,
  context: { params: Promise<{ code: string }> },
) {
  const { code } = await context.params;
  const reservation = getReservation(code);
  if (!reservation) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ reservation });
}
