"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

type ConciergeFabProps = {
  onBookAppointment: () => void;
};

export default function ConciergeFab({ onBookAppointment }: ConciergeFabProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute bottom-5 right-5 z-30 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className="pointer-events-auto mb-3 w-64 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg"
          >
            <p className="font-display text-[10px] tracking-[0.28em] text-neutral-500">
              ATELIER CONCIERGE
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Enquire about BMW, Nissan, Toyota, Honda, or Allion availability.
            </p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBookAppointment();
              }}
              className="mt-4 min-h-11 w-full rounded-full bg-[#0a0a0a] px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            >
              Book a viewing
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close concierge" : "Open concierge"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0a0a0a] text-white shadow-lg"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} fill="currentColor" />}
      </motion.button>
    </div>
  );
}
