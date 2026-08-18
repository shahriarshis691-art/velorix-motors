import { NextResponse } from "next/server";
import { STAFF_COOKIE } from "@/lib/admin-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(STAFF_COOKIE, "", { path: "/", maxAge: 0 });
  return response;
}
