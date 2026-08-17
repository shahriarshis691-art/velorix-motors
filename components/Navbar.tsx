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

const mobileLinkClassName =
  "border-b border-neutral-100 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:text-black";

type NavbarProps = {
  onBookAppointment: () => void;
};

export default function Navbar({ onBookAppointment }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const goToSection = (href: string, hash: string) => {
    closeMenu();

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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-neutral-200/80 bg-white/85 shadow-sm backdrop-blur-xl">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
          <Link
            href="/"
            className="relative z-10"
            aria-label="VELORIX MOTORS home"
            onClick={closeMenu}
          >
            <VelorixLogo size="sm" />
          </Link>

          <nav className="hidden items-center gap-8 lg:gap-10 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => goToSection(link.href, link.hash)}
                className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-[101] flex rounded-lg p-2 text-neutral-900 transition-all hover:bg-neutral-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-[999] flex flex-col gap-1 border-b border-neutral-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-2xl sm:top-[72px] md:hidden"
          >
            <Link
              href="/#collections"
              onClick={() => goToSection("/#collections", "#collections")}
              className={mobileLinkClassName}
            >
              MODELS
            </Link>
            <button
              type="button"
              onClick={() => goToSection("/#pre-order", "#pre-order")}
              className={`${mobileLinkClassName} text-left`}
            >
              PRE-ORDER
            </button>
            <Link
              href="/#services"
              onClick={() => goToSection("/#services", "#services")}
              className={mobileLinkClassName}
            >
              SERVICES
            </Link>
            <Link
              href="/#about"
              onClick={() => goToSection("/#about", "#about")}
              className={mobileLinkClassName}
            >
              ABOUT
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                onClick={() => goToSection("/#pre-order", "#pre-order")}
                className="w-full rounded-full bg-[#0a0a0a] py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-neutral-800"
              >
                Book Pre-Order
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
