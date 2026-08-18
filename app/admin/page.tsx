import type { Metadata } from "next";
import AdminView from "@/components/admin/AdminView";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Staff — VELORIX MOTORS",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminView />;
}
