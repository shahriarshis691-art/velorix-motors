import type { Metadata } from "next";
import FaqView from "@/components/trust/FaqView";

export const metadata: Metadata = {
  title: "FAQ — VELORIX MOTORS",
  description:
    "Duty, BRTA registration, hybrid batteries, warranty and delivery times for Japan-import cars in Bangladesh.",
};

export default function FaqPage() {
  return <FaqView />;
}
