"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

const fieldClass =
  "w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900";

const DELIVERY_WINDOWS = [
  "Immediate — in stock",
  "4–8 weeks",
  "This quarter",
  "3–6 months",
  "Flexible",
];

type PreOrderModalProps = {
  open: boolean;
  onClose: () => void;
  vehicleTitle: string;
};

export default function PreOrderModal({
  open,
  onClose,
  vehicleTitle,
}: PreOrderModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            aria-label="Close pre-order"
            className="absolute inset-0 bg-neutral-950/45 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preorder-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white p-7 shadow-2xl sm:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
                  Pre-Order
                </p>
                <h2
                  id="preorder-title"
                  className="mt-2 font-serif text-3xl font-medium tracking-tight text-neutral-900"
                >
                  Reserve this vehicle
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
                  Request received
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
                  A VELORIX concierge will confirm allocation and delivery for
                  your {vehicleTitle}.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="you@atelier.com"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Preferred delivery window
                  </span>
                  <select
                    name="deliveryWindow"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Select a window
                    </option>
                    {DELIVERY_WINDOWS.map((window) => (
                      <option key={window} value={window}>
                        {window}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Notes
                  </span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Specification, colour, or allocation notes"
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800"
                >
                  Confirm pre-order
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
