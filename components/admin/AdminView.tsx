"use client";

import { FormEvent, useEffect, useState } from "react";
import type { InventoryVehicle, Reservation } from "@/lib/inventory";
import { SHIPMENT_STAGES } from "@/lib/inventory";

const fieldClass =
  "w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900";

type Payload = {
  vehicles: InventoryVehicle[];
  reservations: Reservation[];
};

export default function AdminView() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Payload | null>(null);
  const [selected, setSelected] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [importNote, setImportNote] = useState("");

  const load = async () => {
    const response = await fetch("/api/admin/inventory");
    if (response.status === 401) {
      setAuthed(false);
      return;
    }
    const payload = (await response.json()) as Payload;
    setData(payload);
    setAuthed(true);
    if (!selected && payload.vehicles[0]) {
      setSelected(payload.vehicles[0].id);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!response.ok) {
      setError("That password is not right.");
      return;
    }
    setPassword("");
    await load();
  };

  const vehicle = data?.vehicles.find((item) => item.id === selected);

  const saveVehicle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!vehicle) return;
    const form = new FormData(event.currentTarget);
    setSaving(true);
    const photos = form
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0)
      .slice(0, 3);
    let coverImage: string | undefined;
    let galleryImages: string[] | undefined;
    if (photos.length > 0) {
      const payload = new FormData();
      payload.set("id", vehicle.id);
      photos.forEach((file) => payload.append("photos", file));
      const uploaded = await fetch("/api/admin/upload", {
        method: "POST",
        body: payload,
      });
      const body = (await uploaded.json()) as { urls?: string[]; error?: string };
      if (uploaded.ok && body.urls?.length) {
        coverImage = body.urls[0];
        galleryImages = body.urls.slice(1);
      }
    }
    await fetch(`/api/admin/inventory/${vehicle.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: String(form.get("price") ?? ""),
        status: String(form.get("status") ?? ""),
        year: Number(form.get("year")),
        grade: Number(form.get("grade")),
        interiorGrade: String(form.get("interiorGrade") ?? ""),
        mileageKm: Number(form.get("mileageKm")),
        fuelType: String(form.get("fuelType") ?? ""),
        shipmentStage: String(form.get("shipmentStage") ?? ""),
        shipmentNote: String(form.get("shipmentNote") ?? ""),
        vessel: String(form.get("vessel") ?? ""),
        eta: String(form.get("eta") ?? ""),
        coverImage,
        galleryImages,
      }),
    });
    setSaving(false);
    await load();
  };

  const addVehicle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(true);
    const id = String(form.get("id") ?? "");
    const photos = form
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0)
      .slice(0, 3);
    let coverImage = String(form.get("coverImage") ?? "");
    let gallery = String(form.get("gallery") ?? "");
    if (photos.length > 0) {
      const payload = new FormData();
      payload.set("id", id);
      photos.forEach((file) => payload.append("photos", file));
      const uploaded = await fetch("/api/admin/upload", {
        method: "POST",
        body: payload,
      });
      const body = (await uploaded.json()) as { urls?: string[] };
      if (uploaded.ok && body.urls?.length) {
        coverImage = body.urls[0];
        gallery = body.urls.slice(1).join(",");
      }
    }
    const response = await fetch("/api/admin/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        brand: String(form.get("brand") ?? ""),
        title: String(form.get("title") ?? ""),
        tagline: String(form.get("tagline") ?? ""),
        coverImage,
        gallery,
        price: String(form.get("price") ?? ""),
        year: Number(form.get("year")),
        grade: Number(form.get("grade")),
        mileageKm: Number(form.get("mileageKm")),
        status: String(form.get("status") ?? "Available"),
      }),
    });
    setSaving(false);
    if (response.ok) {
      event.currentTarget.reset();
      await load();
    }
  };

  const importCsv = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setSaving(true);
    setImportNote("");
    const response = await fetch("/api/admin/import", {
      method: "POST",
      body: form,
    });
    const body = (await response.json()) as {
      added?: number;
      updated?: number;
      errors?: string[];
      error?: string;
    };
    setSaving(false);
    if (!response.ok) {
      setImportNote(body.error ?? "Import failed");
      return;
    }
    setImportNote(
      `Added ${body.added ?? 0}, updated ${body.updated ?? 0}${
        body.errors?.length ? ` · ${body.errors.length} row errors` : ""
      }`,
    );
    event.currentTarget.reset();
    await load();
  };

  const confirmPay = async (code: string) => {
    await fetch("/api/admin/reservations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, payment: "confirmed" }),
    });
    await load();
  };

  if (!authed) {
    return (
      <main className="min-h-screen bg-[#faf9f6] px-4 py-24 sm:px-8">
        <form onSubmit={login} className="mx-auto max-w-sm space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
            Staff
          </p>
          <h1 className="font-serif text-3xl font-medium text-[#111827]">
            VELORIX inventory
          </h1>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className={fieldClass}
          />
          {error ? <p className="text-sm text-neutral-500">{error}</p> : null}
          <button
            type="submit"
            className="w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white"
          >
            Enter
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 pb-20 pt-12 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
              Staff
            </p>
            <h1 className="mt-2 font-serif text-3xl font-medium text-[#111827]">
              Inventory
            </h1>
          </div>
          <button
            type="button"
            onClick={async () => {
              await fetch("/api/admin/logout", { method: "POST" });
              setAuthed(false);
              setData(null);
            }}
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400"
          >
            Sign out
          </button>
        </div>

        <label className="mt-10 block">
          <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Vehicle
          </span>
          <select
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            className={fieldClass}
          >
            {data?.vehicles.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title} · {item.status}
              </option>
            ))}
          </select>
        </label>

        {vehicle ? (
          <form key={vehicle.id} onSubmit={saveVehicle} className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Price
              </span>
              <input
                name="price"
                defaultValue={vehicle.price}
                className={fieldClass}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Status
                </span>
                <select
                  name="status"
                  defaultValue={vehicle.status}
                  className={fieldClass}
                >
                  <option>Available</option>
                  <option>In Transit</option>
                  <option>Pre-Order</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Fuel
                </span>
                <select
                  name="fuelType"
                  defaultValue={vehicle.fuelType}
                  className={fieldClass}
                >
                  <option>Hybrid</option>
                  <option>Petrol</option>
                  <option>EV</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Year
                </span>
                <input
                  name="year"
                  type="number"
                  defaultValue={vehicle.year}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Grade
                </span>
                <input
                  name="grade"
                  type="number"
                  step="0.5"
                  defaultValue={vehicle.grade}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Interior
                </span>
                <input
                  name="interiorGrade"
                  defaultValue={vehicle.interiorGrade}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Kilometres
                </span>
                <input
                  name="mileageKm"
                  type="number"
                  defaultValue={vehicle.mileageKm}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Shipment
              </span>
              <select
                name="shipmentStage"
                defaultValue={vehicle.shipment.stage}
                className={fieldClass}
              >
                {SHIPMENT_STAGES.map((stage) => (
                  <option key={stage}>{stage}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Note
              </span>
              <input
                name="shipmentNote"
                defaultValue={vehicle.shipment.note}
                className={fieldClass}
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Vessel
                </span>
                <input
                  name="vessel"
                  defaultValue={vehicle.shipment.vessel ?? ""}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  ETA
                </span>
                <input
                  name="eta"
                  defaultValue={vehicle.shipment.eta ?? ""}
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Photos · up to 3
              </span>
              <input
                name="photos"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                className="w-full text-sm text-neutral-600"
              />
            </label>
            <button
              type="submit"
              disabled={saving}
              className="w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save vehicle"}
            </button>
          </form>
        ) : null}

        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          Add a car
        </p>
        <form onSubmit={addVehicle} className="mt-4 space-y-4">
          <input name="id" required placeholder="id · toyota-premio-extra" className={fieldClass} />
          <input name="brand" required placeholder="Brand · Toyota" className={fieldClass} />
          <input name="title" required placeholder="Title" className={fieldClass} />
          <input name="tagline" placeholder="Tagline" className={fieldClass} />
          <input name="coverImage" placeholder="/images/… or upload below" className={fieldClass} />
          <input name="gallery" placeholder="Gallery URLs, comma separated" className={fieldClass} />
          <input
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="w-full text-sm text-neutral-600"
          />
          <input name="price" required placeholder="৳ 32,50,000" className={fieldClass} />
          <div className="grid grid-cols-3 gap-4">
            <input name="year" type="number" defaultValue={2018} className={fieldClass} />
            <input name="grade" type="number" step="0.5" defaultValue={4} className={fieldClass} />
            <input name="mileageKm" type="number" defaultValue={50000} className={fieldClass} />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="w-full border border-[#111827] bg-white px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#111827]"
          >
            Add to inventory
          </button>
        </form>

        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          Spreadsheet
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          CSV columns: id, brand, title, tagline, price, year, grade, mileageKm,
          fuelType, status, coverImage, gallery (pipe-separated).
        </p>
        <a
          href="/inventory-template.csv"
          className="mt-3 inline-flex min-h-11 items-center text-[11px] uppercase tracking-[0.2em] text-[#111827]"
        >
          Download template →
        </a>
        <form onSubmit={importCsv} className="mt-4 space-y-4">
          <input
            name="file"
            type="file"
            accept=".csv,text/csv"
            required
            className="w-full text-sm text-neutral-600"
          />
          {importNote ? (
            <p className="text-sm text-neutral-500">{importNote}</p>
          ) : null}
          <button
            type="submit"
            disabled={saving}
            className="w-full border border-[#111827] bg-white px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[#111827]"
          >
            Import CSV
          </button>
        </form>

        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          Deposits
        </p>
        <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
          {(data?.reservations ?? []).length === 0 ? (
            <p className="py-6 text-sm text-neutral-500">No booking deposits yet.</p>
          ) : (
            data?.reservations.map((row) => (
              <div
                key={row.code}
                className="flex flex-wrap items-center justify-between gap-3 py-5"
              >
                <div>
                  <p className="font-serif text-xl text-[#111827]">{row.code}</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {row.vehicleTitle} · {row.name} · {row.payment}
                  </p>
                </div>
                {row.payment === "awaiting" ? (
                  <button
                    type="button"
                    onClick={() => confirmPay(row.code)}
                    className="text-[11px] uppercase tracking-[0.2em] text-[#111827]"
                  >
                    Mark paid
                  </button>
                ) : (
                  <a
                    href={`/reservation/${row.code}`}
                    className="text-[11px] uppercase tracking-[0.2em] text-neutral-400"
                  >
                    Tracking page
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
