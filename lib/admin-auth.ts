import crypto from "crypto";
import { cookies } from "next/headers";

export const STAFF_COOKIE = "velorix-staff";

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "velorix";
}

export function staffToken() {
  return crypto
    .createHmac("sha256", adminPassword())
    .update("velorix-staff")
    .digest("hex");
}

export async function isStaff() {
  const jar = await cookies();
  return jar.get(STAFF_COOKIE)?.value === staffToken();
}
