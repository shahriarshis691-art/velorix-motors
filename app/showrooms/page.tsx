import type { Metadata } from "next";
import ShowroomsView from "@/components/trust/ShowroomsView";

export const metadata: Metadata = {
  title: "Showrooms — VELORIX MOTORS",
  description:
    "Visit VELORIX in Gulshan, Banani or Agrabad. Saturday–Thursday, 10:00–19:00. Friday closed.",
};

export default function ShowroomsPage() {
  return <ShowroomsView />;
}
