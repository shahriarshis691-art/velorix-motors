import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact — VELORIX MOTORS",
  description:
    "Visit VELORIX in Gulshan, Banani or Agrabad, or WhatsApp a concierge about Japan-import stock.",
};

export default function ContactPage() {
  return <ContactView />;
}
