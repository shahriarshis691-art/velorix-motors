"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import TestDriveModal from "@/components/TestDriveModal";
import { SHOWROOMS, SITE, whatsappUrl } from "@/lib/site";
import { formValue, submitLead } from "@/lib/leads";
import { useLocale } from "@/components/i18n/LocaleProvider";

const fieldClass =
  "w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900";

export default function ContactView() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const { locale, t } = useLocale();
  const page = t.contact;
  const bn = locale === "bn";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = formValue(data, "fullName");
    const phone = formValue(data, "phone");
    const email = formValue(data, "email");
    const showroom = formValue(data, "showroom");
    const note = formValue(data, "message");

    setSending(true);
    await submitLead({
      type: "contact",
      fields: { name, phone, email, showroom, note },
      message: [
        "VELORIX Contact",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Showroom: ${showroom || "Any"}`,
        note ? `Message: ${note}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });
    setSending(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />

      <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
          {page.eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
          {page.lead}
        </p>

        <div className="mt-10 grid gap-8 border-t border-neutral-200 pt-10 sm:grid-cols-2">
          {SHOWROOMS.map((showroom) => (
            <div key={showroom.id}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                {page.showroomLabel}
              </p>
              <p className="mt-2 font-serif text-xl font-medium text-[#111827]">
                {bn ? showroom.nameBn : showroom.name}
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                {bn ? showroom.addressBn : showroom.address}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <a
            href={whatsappUrl(
              "Hello VELORIX — I would like to book a viewing in Dhaka.",
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
        </div>

        {submitted ? (
          <div className="mt-14 border border-neutral-200 bg-white px-6 py-12 text-center">
            <p className="font-serif text-2xl font-medium text-[#111827]">
              {page.successTitle}
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-500">
              {page.successBody}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-14 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {page.name}
              </span>
              <input
                name="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder={page.namePh}
                className={fieldClass}
              />
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  {page.phone}
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
                  {page.email}
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
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {page.showroomPref}
              </span>
              <select
                name="showroom"
                defaultValue=""
                className={fieldClass}
              >
                <option value="">{page.showroomAny}</option>
                {SHOWROOMS.map((showroom) => (
                  <option key={showroom.id} value={showroom.name}>
                    {bn ? showroom.nameBn : showroom.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                {page.message}
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder={page.messagePh}
                className={fieldClass}
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-2 w-full bg-neutral-950 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-neutral-800 disabled:opacity-60"
            >
              {sending ? page.sending : page.send}
            </button>
          </form>
        )}
      </div>

      <TestDriveModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </main>
  );
}
