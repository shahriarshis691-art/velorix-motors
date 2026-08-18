"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, Car, Hash, MapPin, Phone, User, X } from "lucide-react";
import BrushedMetalButton from "@/components/ui/BrushedMetalButton";
import { formValue, submitLead } from "@/lib/leads";
import { SHOWROOM_LABELS } from "@/lib/site";
import { getBrandCatalogVehicles } from "@/src/data/catalog";

type TestDriveModalProps = {
  open: boolean;
  onClose: () => void;
  prefillModel?: string;
  prefillSerial?: string;
};

const fieldClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-1 focus:ring-neutral-300 placeholder:text-neutral-400";

export default function TestDriveModal({
  open,
  onClose,
  prefillModel,
  prefillSerial,
}: TestDriveModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const models = useMemo(() => {
    const options = getBrandCatalogVehicles().map((vehicle) => vehicle.title);
    if (prefillModel && !options.includes(prefillModel)) {
      return [prefillModel, ...options];
    }
    return options;
  }, [prefillModel]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSending(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const model = formValue(data, "model");
    const date = formValue(data, "date");
    const time = formValue(data, "time");
    const showroom = formValue(data, "showroom");
    const name = formValue(data, "name");
    const phone = formValue(data, "phone");
    const serial = formValue(data, "serial");

    setSending(true);
    await submitLead({
      type: "test-drive",
      fields: { model, date, time, showroom, name, phone, serial },
      message: [
        "VELORIX Test Drive",
        `Model: ${model}`,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Showroom: ${showroom}`,
        `Date: ${date} ${time}`,
        serial ? `Car ID: ${serial}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });
    setSending(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close appointment modal"
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="glass-panel relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-[10px] tracking-[0.35em] text-neutral-500">
                  PRIVATE ATELIER
                </p>
                <h2
                  id="appointment-title"
                  className="mt-2 font-display text-xl font-bold tracking-[0.12em] text-neutral-900 sm:text-2xl"
                >
                  TEST DRIVE APPOINTMENT
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1.5 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900">
                  <Car size={22} />
                </div>
                <p className="font-display text-lg tracking-[0.14em] text-neutral-900">
                  WHATSAPP IS OPENING
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
                  Your test-drive request is in the chat. A VELORIX concierge
                  will confirm the showroom slot.
                </p>
                <div className="mt-8">
                  <BrushedMetalButton onClick={onClose} className="w-full">
                    Close
                  </BrushedMetalButton>
                </div>
              </div>
            ) : (
              <form
                key={`${prefillModel ?? "none"}-${prefillSerial ?? "none"}`}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <Car size={13} /> Model
                  </span>
                  <select
                    name="model"
                    required
                    defaultValue={prefillModel ?? ""}
                    className={`${fieldClass}`}
                  >
                    <option value="" disabled>
                      Select a model
                    </option>
                    {models.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      <CalendarClock size={13} /> Date
                    </span>
                    <input name="date" type="date" required className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                      <CalendarClock size={13} /> Time
                    </span>
                    <input name="time" type="time" required className={fieldClass} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <MapPin size={13} /> Preferred showroom
                  </span>
                  <select
                    name="showroom"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a location
                    </option>
                    {SHOWROOM_LABELS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <User size={13} /> Full name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <Phone size={13} /> Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+880 …"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    <Hash size={13} /> Serial / Car ID
                  </span>
                  <input
                    name="serial"
                    type="text"
                    defaultValue={prefillSerial ?? ""}
                    placeholder="Optional — VX-0000"
                    className={fieldClass}
                  />
                </label>

                <div className="pt-2">
                  <BrushedMetalButton
                    type="submit"
                    disabled={sending}
                    className="w-full min-h-[52px]"
                  >
                    {sending ? "Opening WhatsApp…" : "Send on WhatsApp"}
                  </BrushedMetalButton>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
