"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type BrushedMetalButtonProps = {
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<HTMLMotionProps<"button">, "children" | "className" | "type">;

export default function BrushedMetalButton({
  children,
  className = "",
  type = "button",
  ...props
}: BrushedMetalButtonProps) {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ y: 1, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={`group relative isolate overflow-hidden rounded-xl px-6 py-4 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-vx-ink shadow-red-glow transition-shadow duration-300 hover:shadow-red-glow-lg sm:text-xs ${className}`}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-metal transition-opacity duration-300 group-hover:opacity-0"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-metal-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-white/70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-black/30"
      />
      <span className="relative z-10 block leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
        {children}
      </span>
    </motion.button>
  );
}
