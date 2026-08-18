import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { isStaff } from "@/lib/admin-auth";
import { getInventoryById, upsertOverlay } from "@/lib/inventory-store";

const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);
const EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: Request) {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const id = String(form.get("id") ?? "")
    .trim()
    .replace(/[^a-z0-9-]/gi, "-")
    .toLowerCase();
  if (!id) {
    return NextResponse.json({ error: "Vehicle id required" }, { status: 400 });
  }

  const files = form
    .getAll("photos")
    .filter((item): item is File => item instanceof File && item.size > 0)
    .slice(0, 3);

  if (files.length === 0) {
    return NextResponse.json({ error: "Attach up to 3 photos" }, { status: 400 });
  }

  const folder = path.join(process.cwd(), "public", "images", "stock");
  fs.mkdirSync(folder, { recursive: true });

  const urls: string[] = [];
  for (const [index, file] of files.entries()) {
    if (!ALLOWED.has(file.type) || file.size > 4_000_000) {
      return NextResponse.json(
        { error: "Use JPG, PNG or WebP under 4 MB." },
        { status: 400 },
      );
    }
    const ext = EXT[file.type] ?? "jpg";
    const name = `${id}-${index + 1}.${ext}`;
    const bytes = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(folder, name), bytes);
    urls.push(`/images/stock/${name}`);
  }

  if (getInventoryById(id)) {
    upsertOverlay(id, {
      coverImage: urls[0],
      galleryImages: urls.slice(1),
    });
  }

  return NextResponse.json({ urls });
}
