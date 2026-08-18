"use client";

import { useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import TestDriveModal from "@/components/TestDriveModal";

export default function TrustShell({ children }: { children: ReactNode }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        {children}
      </div>
      <TestDriveModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </main>
  );
}
