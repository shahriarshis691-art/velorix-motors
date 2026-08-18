"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { formValue, submitLead } from "@/lib/leads";
import { SHOWROOM_LABELS } from "@/lib/site";

const fieldClass =
  "w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900";

const TIME_SLOTS = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

type AppointmentModalProps = {
  open: boolean;
  onClose: () => void;
  vehicleTitle: string;
};

export default function AppointmentModal({
  open,
  onClose,
  vehicleTitle,
}: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [slot, setSlot] = useState("");
  const [slotError, setSlotError] = useState(false);
  const minDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSending(false);
      setSlot("");
      setSlotError(false);
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!slot) {
      setSlotError(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    const date = formValue(data, "date");
    const showroom = formValue(data, "showroom");
    const fullName = formValue(data, "fullName");
    const phone = formValue(data, "phone");
    const email = formValue(data, "email");

    setSending(true);
    await submitLead({
      type: "appointment",
      fields: {
        date,
        time: slot,
        showroom,
        fullName,
        phone,
        email,
        vehicle: vehicleTitle,
      },
      message: [
        "VELORIX Appointment",
        `Vehicle: ${vehicleTitle}`,
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Showroom: ${showroom}`,
        `Date: ${date} ${slot}`,
      ].join("\n"),
    });
    setSending(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 md:items-center md:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close appointment"
            className="absolute inset-0 bg-neutral-950/45 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto bg-white p-6 shadow-2xl md:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
                  Private viewing
                </p>
                <h2
                  id="appointment-title"
                  className="mt-2 font-serif text-3xl font-medium tracking-tight text-neutral-900"
                >
                  Book an appointment
                </h2>
                <p className="mt-2 text-sm text-neutral-500">{vehicleTitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-neutral-400 transition hover:text-neutral-900"
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-neutral-200 text-neutral-900">
                  <Check size={20} strokeWidth={1.5} />
                </div>
                <p className="font-serif text-2xl font-medium text-neutral-900">
                  WhatsApp is opening
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
                  Your viewing request for the {vehicleTitle} is in the chat.
                  We will confirm the showroom slot shortly.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 w-full border border-neutral-900 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-900 transition hover:bg-neutral-50"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Date
                  </span>
                  <input
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    className={fieldClass}
                  />
                </label>

                <div>
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Time slot
                  </span>
                  <input type="hidden" name="time" value={slot} />
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSlot(time);
                          setSlotError(false);
                        }}
                        className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition ${
                          slot === time
                            ? "bg-neutral-950 text-white"
                            : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {slotError && (
                    <p className="mt-2 text-xs text-neutral-500">
                      Please choose a time slot.
                    </p>
                  )}
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Preferred showroom
                  </span>
                  <select
                    name="showroom"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a dealership
                    </option>
                    {SHOWROOM_LABELS.map((showroom) => (
                      <option key={showroom} value={showroom}>
                        {showroom}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Full name
                  </span>
                  <input
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      Phone
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+880 …"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full border border-neutral-900 bg-white px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-900 transition hover:bg-neutral-950 hover:text-white disabled:opacity-60"
                >
                  {sending ? "Opening WhatsApp…" : "Send on WhatsApp"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
