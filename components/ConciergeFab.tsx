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
            className="pointer-events-auto mb-3 w-64 rounded-2xl border border-white/10 bg-[#111]/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            <p className="font-display text-[10px] tracking-[0.28em] text-emerald-400">
              ATELIER CONCIERGE
            </p>
            <p className="mt-2 text-sm leading-relaxed text-vx-silver">
              Enquire about Land Rover, BMW iX, or Nissan Z availability.
            </p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBookAppointment();
              }}
              className="mt-4 w-full rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-700 px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
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
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-800 text-white shadow-[0_10px_28px_rgba(16,185,129,0.45)]"
      >
        <span
          aria-hidden
          className="absolute inset-[2px] rounded-full border border-white/35"
        />
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-md"
        />
        {open ? <X size={22} /> : <MessageCircle size={22} fill="currentColor" />}
      </motion.button>
    </div>
  );
}
