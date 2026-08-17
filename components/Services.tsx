"use client";

import { ShieldCheck, Sparkles, Wrench } from "lucide-react";

const ITEMS = [
  {
    icon: Sparkles,
    title: "BESPOKE FINISH",
    copy: "Commission night-metal, ice carbon, or a private atelier colorway.",
  },
  {
    icon: Wrench,
    title: "CONCIERGE SERVICE",
    copy: "Factory-trained technicians on call at every VELORIX pavilion.",
  },
  {
    icon: ShieldCheck,
    title: "LIFETIME CALIBRATION",
    copy: "Powertrain, chassis, and software remain at spec for the life of the car.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 border-t border-neutral-200 bg-gradient-to-b from-[#faf9f6] to-white px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-[11px] tracking-[0.4em] text-neutral-500">
          AFTERCARE
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em] text-neutral-900">
          <span className="metallic-text">SERVICES</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <Icon className="text-neutral-900" size={22} />
              <h3 className="mt-4 font-display text-sm tracking-[0.18em] text-neutral-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
