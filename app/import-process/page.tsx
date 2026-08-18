import type { Metadata } from "next";
import ImportProcessView from "@/components/trust/ImportProcessView";

export const metadata: Metadata = {
  title: "Import process — VELORIX MOTORS",
  description:
    "Japan auction to Chattogram shipping to Dhaka PDI — how VELORIX brings Axio, Premio and Creta to Bangladesh.",
};

export default function ImportProcessPage() {
  return <ImportProcessView />;
}
