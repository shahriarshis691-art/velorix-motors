"use client";

import Link from "next/link";
import { SITE, SHOWROOMS, whatsappUrl } from "@/lib/site";
import { useLocale } from "@/components/i18n/LocaleProvider";
import LanguageToggle from "@/components/i18n/LanguageToggle";

export default function Footer() {
  const { locale, t } = useLocale();
  const bn = locale === "bn";
  const visit = [
    { href: "/#collections", label: t.footer.models },
    { href: "/vehicles", label: t.footer.inventory },
    { href: "/contact", label: t.footer.contact },
  ];
  const house = [
    { href: "/import-process", label: t.footer.import },
    { href: "/showrooms", label: t.footer.showroomsLink },
    { href: "/auction-grades", label: t.footer.grades },
    { href: "/faq", label: t.footer.faq },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-[10px] tracking-[0.4em] text-neutral-400">
            VELORIX MOTORS
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-600">
            {bn ? SITE.taglineBn : SITE.tagline}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-neutral-600">
            <a
              href={whatsappUrl(
                "Hello VELORIX — I would like to enquire about Japan-import stock.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-neutral-900"
            >
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="transition hover:text-neutral-900"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-neutral-900"
            >
              Instagram {SITE.instagramHandle}
            </a>
          </div>
          <div className="mt-6">
            <LanguageToggle />
          </div>
        </div>

        <div>
          <p className="font-display text-[10px] tracking-[0.4em] text-neutral-400">
            {t.footer.showrooms}
          </p>
          <ul className="mt-3 space-y-3">
            {SHOWROOMS.map((showroom) => (
              <li key={showroom.id}>
                <Link
                  href="/showrooms"
                  className="text-sm font-medium text-neutral-900 transition hover:opacity-70"
                >
                  {bn ? showroom.nameBn : showroom.name}
                </Link>
                <p className="text-sm text-neutral-500">
                  {bn ? showroom.addressBn : showroom.address}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[10px] tracking-[0.4em] text-neutral-400">
            {t.footer.visit}
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer visit">
            {visit.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-display text-[10px] tracking-[0.4em] text-neutral-400">
            {t.footer.house}
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer house">
            {house.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <p className="mt-12 text-center font-display text-[10px] tracking-[0.4em] text-neutral-400">
        © 2026 {SITE.name}
      </p>
    </footer>
  );
}
