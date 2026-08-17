"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, Car, Hash, MapPin, Phone, User, X } from "lucide-react";
import BrushedMetalButton from "@/components/ui/BrushedMetalButton";

const MODELS = [
  "Land Rover Defender 90",
  "BMW iX",
  "Nissan Z",
  "VX-1 Apex",
  "VX-S Coupe",
  "VX-GT Touring",
];

const SHOWROOMS = [
  "Dubai — Al Quoz Atelier",
  "Monaco — Port Hercules",
  "London — Mayfair Pavilion",
  "New York — Hudson Motors",
  "Tokyo — Ginza Gallery",
];

type TestDriveModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-[#0B0F19] px-4 py-3 text-sm text-vx-metal outline-none transition focus:border-vx-red/60 focus:ring-1 focus:ring-vx-red/40 placeholder:text-vx-silver/40";

export default function TestDriveModal({ open, onClose }: TestDriveModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
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
                <p className="font-display text-[10px] tracking-[0.35em] text-vx-red">
                  PRIVATE ATELIER
                </p>
                <h2
                  id="appointment-title"
                  className="mt-2 font-display text-xl font-bold tracking-[0.12em] text-white sm:text-2xl"
                >
                  TEST DRIVE APPOINTMENT
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1.5 text-vx-silver transition hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-vx-red/40 bg-vx-red/10 text-vx-red">
                  <Car size={22} />
                </div>
                <p className="font-display text-lg tracking-[0.14em] text-white">
                  REQUEST RECEIVED
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-vx-silver">
                  A VELORIX concierge will confirm your showroom appointment
                  shortly. Drive beyond.
                </p>
                <div className="mt-8">
                  <BrushedMetalButton onClick={onClose} className="w-full">
                    Close
                  </BrushedMetalButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
                    <Car size={13} /> Model
                  </span>
                  <select
                    name="model"
                    required
                    defaultValue=""
                    className={`${fieldClass} bg-[#0B0F19]`}
                  >
                    <option value="" disabled>
                      Select a model
                    </option>
                    {MODELS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
                      <CalendarClock size={13} /> Date
                    </span>
                    <input name="date" type="date" required className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
                      <CalendarClock size={13} /> Time
                    </span>
                    <input name="time" type="time" required className={fieldClass} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
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
                    {SHOWROOMS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
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
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
                    <Phone size={13} /> Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 000 000 0000"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-vx-silver">
                    <Hash size={13} /> Serial / Car ID
                  </span>
                  <input
                    name="serial"
                    type="text"
                    placeholder="Optional — VX-0000"
                    className={fieldClass}
                  />
                </label>

                <div className="pt-2">
                  <BrushedMetalButton type="submit" className="w-full min-h-[52px]">
                    Submit Appointment
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
