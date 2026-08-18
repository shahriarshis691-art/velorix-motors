"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { formValue, submitLead } from "@/lib/leads";
import { depositAmount } from "@/lib/inventory";
import { formatTaka } from "@/src/utils/formatters";
import { paymentLabel } from "@/lib/site";
import type { PaymentMethod } from "@/lib/inventory";

const fieldClass =
  "w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900";

const METHODS: { id: PaymentMethod; label: string }[] = [
  { id: "bkash", label: "bKash" },
  { id: "nagad", label: "Nagad" },
  { id: "bank", label: "Bank transfer" },
  { id: "card", label: "Card" },
];

type PreOrderModalProps = {
  open: boolean;
  onClose: () => void;
  vehicleId: string;
  vehicleTitle: string;
};

export default function PreOrderModal({
  open,
  onClose,
  vehicleId,
  vehicleTitle,
}: PreOrderModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [code, setCode] = useState("");
  const [method, setMethod] = useState<PaymentMethod>("bkash");
  const amount = formatTaka(depositAmount());

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSending(false);
      setCode("");
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
    const data = new FormData(event.currentTarget);
    const fullName = formValue(data, "fullName");
    const email = formValue(data, "email");
    const phone = formValue(data, "phone");
    const pay = formValue(data, "method") as PaymentMethod;

    setSending(true);
    const response = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vehicleId,
        name: fullName,
        phone,
        email,
        method: pay,
      }),
    });
    const payload = (await response.json()) as {
      reservation?: { code: string; method: PaymentMethod };
      error?: string;
    };
    if (!response.ok || !payload.reservation) {
      setSending(false);
      return;
    }

    setCode(payload.reservation.code);
    setMethod(payload.reservation.method);
    await submitLead({
      type: "pre-order",
      fields: {
        fullName,
        email,
        phone,
        vehicle: vehicleTitle,
        code: payload.reservation.code,
        method: pay,
      },
      message: [
        "VELORIX booking deposit",
        `Code: ${payload.reservation.code}`,
        `Vehicle: ${vehicleTitle}`,
        `Deposit: ${amount} via ${paymentLabel(pay)}`,
        `Name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
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
            className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto bg-white p-6 shadow-2xl md:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
                  Booking deposit
                </p>
                <h2
                  id="preorder-title"
                  className="mt-2 font-serif text-3xl font-medium tracking-tight text-neutral-900"
                >
                  Reserve this vehicle
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  {vehicleTitle} · {amount}
                </p>
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
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-neutral-200 text-neutral-900">
                  <Check size={20} strokeWidth={1.5} />
                </div>
                <p className="font-serif text-2xl font-medium text-neutral-900">
                  {code}
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
                  Send {amount} to {paymentLabel(method)}. WhatsApp is opening
                  with this code. A concierge confirms when the deposit lands.
                </p>
                <Link
                  href={`/reservation/${code}`}
                  className="mt-8 inline-flex min-h-11 w-full items-center justify-center bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800"
                >
                  Track this car →
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                    Name
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
                    Pay deposit with
                  </span>
                  <select
                    name="method"
                    required
                    defaultValue="bkash"
                    className={fieldClass}
                  >
                    {METHODS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label} · {amount}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800 disabled:opacity-60"
                >
                  {sending ? "Opening WhatsApp…" : `Reserve · ${amount}`}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
