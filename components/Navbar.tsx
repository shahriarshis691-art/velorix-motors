"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import VelorixLogo from "@/components/ui/VelorixLogo";

const NAV_LINKS = [
  { href: "/#collections", hash: "#collections", label: "MODELS" },
  { href: "/#pre-order", hash: "#pre-order", label: "PRE-ORDER" },
  { href: "/#services", hash: "#services", label: "SERVICES" },
  { href: "/#about", hash: "#about", label: "ABOUT" },
] as const;

type NavbarProps = {
  onBookAppointment: () => void;
};

export default function Navbar({ onBookAppointment }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string, hash: string) => {
    setOpen(false);
    if (hash === "#pre-order") {
      onBookAppointment();
      return;
    }
    if (pathname === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-black/60" : "bg-black/40"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="relative z-10" aria-label="VELORIX MOTORS home">
          <VelorixLogo size="sm" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href, link.hash)}
              className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-[#94A3B8] transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(226,232,240,0.55)]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-[60] rounded-md p-2 text-vx-silver md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col border-l border-white/10 bg-[#050505]/95 px-8 pt-24 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <p className="mb-8 font-display text-[10px] tracking-[0.35em] text-vx-silver/50">
                NAVIGATE
              </p>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    onClick={() => handleNav(link.href, link.hash)}
                    className="text-left font-display text-lg font-semibold uppercase tracking-[0.22em] text-[#94A3B8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
