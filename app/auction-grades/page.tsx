import type { Metadata } from "next";
import AuctionGradesView from "@/components/trust/AuctionGradesView";

export const metadata: Metadata = {
  title: "Auction grades — VELORIX MOTORS",
  description:
    "Japan auction grades 3.5, 4, 4.5 and 5 — how VELORIX reads the sheet before you buy.",
};

export default function AuctionGradesPage() {
  return <AuctionGradesView />;
}
