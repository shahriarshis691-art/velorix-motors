"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import VelorixLogo from "@/components/ui/VelorixLogo";
import LanguageToggle from "@/components/i18n/LanguageToggle";
import { useLocale } from "@/components/i18n/LocaleProvider";

type NavLink = {
  href: string;
  hash?: string;
  key: "models" | "inventory" | "import" | "faq" | "contact";
};

const NAV_LINKS: NavLink[] = [
  { href: "/#collections", hash: "#collections", key: "models" },
  { href: "/vehicles", key: "inventory" },
  { href: "/import-process", key: "import" },
  { href: "/faq", key: "faq" },
  { href: "/contact", key: "contact" },
];

const mobileLinkClassName =
  "border-b border-neutral-100 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:text-black";

type NavbarProps = {
  onBookAppointment?: () => void;
};

export default function Navbar({ onBookAppointment }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLocale();

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

  const bookAppointment = () => {
    closeMenu();
    if (onBookAppointment) {
      onBookAppointment();
      return;
    }
    router.push("/contact");
  };

  const goTo = (link: NavLink) => {
    closeMenu();

    if (link.hash) {
      if (pathname === "/") {
        window.setTimeout(() => {
          document.querySelector(link.hash!)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 0);
        return;
      }
      router.push(link.href);
      return;
    }

    router.push(link.href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-neutral-200/80 bg-white/85 shadow-sm backdrop-blur-xl">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8">
          <Link
            href="/"
            className="relative z-10 shrink-0"
            aria-label="VELORIX MOTORS home"
            onClick={closeMenu}
          >
            <VelorixLogo size="sm" />
          </Link>

          <nav
            className="hidden items-center gap-5 lg:gap-7 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => goTo(link)}
                className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 hover:text-neutral-900"
              >
                {t.nav[link.key]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <button
              type="button"
              onClick={bookAppointment}
              className="hidden min-h-11 items-center rounded-full bg-[#0a0a0a] px-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 md:inline-flex"
            >
              {t.nav.book}
            </button>
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
            <div className="mb-3">
              <LanguageToggle />
            </div>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => goTo(link)}
                className={`${mobileLinkClassName} text-left`}
              >
                {t.nav[link.key]}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                onClick={bookAppointment}
                className="w-full rounded-full bg-[#0a0a0a] py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-neutral-800"
              >
                {t.nav.book}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
