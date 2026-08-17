"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Services from "@/components/Services";
import About from "@/components/About";
import TestDriveModal from "@/components/TestDriveModal";

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-vx-black">
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero
        onViewCollections={() => {
          document
            .getElementById("collections")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        onBookAppointment={() => setAppointmentOpen(true)}
      />
      <Collections onBookAppointment={() => setAppointmentOpen(true)} />
      <Services />
      <About />
      <TestDriveModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </main>
  );
}
