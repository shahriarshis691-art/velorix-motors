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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNav = (href: string, hash: string) => {
    setIsOpen(false);

    if (hash === "#pre-order") {
      onBookAppointment();
      return;
    }

    if (pathname === "/") {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    router.push(href);
  };

  const linkClassName =
    "rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 transition-all hover:bg-white/5 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || isOpen
          ? "border-white/10 bg-black/50 backdrop-blur-md"
          : "border-transparent bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
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
          className="flex rounded-lg p-2 text-white transition-all hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-b border-white/10 bg-[#080808]/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href, link.hash)}
                className={`text-left ${linkClassName}`}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
