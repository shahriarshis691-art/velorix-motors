import { NextResponse } from "next/server";
import { isStaff } from "@/lib/admin-auth";
import { importInventoryRows } from "@/lib/inventory-store";

function splitCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (char === "," && !quoted) {
      cells.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current);
  return cells;
}

function parseCsv(text: string) {
  const lines = text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length < 2) return [];
  const headers = splitCsvLine(lines[0]).map((item) => item.trim());
  return lines.slice(1).map((line) => {
    const cols = splitCsvLine(line);
    return Object.fromEntries(
      headers.map((header, index) => [header, (cols[index] ?? "").trim()]),
    );
  });
}

export async function POST(request: Request) {
  if (!(await isStaff())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "CSV file required" }, { status: 400 });
  }

  const text = await file.text();
  const rows = parseCsv(text);
  if (rows.length === 0) {
    return NextResponse.json({ error: "No data rows" }, { status: 400 });
  }

  const result = importInventoryRows(rows);
  return NextResponse.json(result);
}
