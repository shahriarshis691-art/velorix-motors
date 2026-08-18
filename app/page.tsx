"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandLogoStrip from "@/components/BrandLogoStrip";
import Collections from "@/components/Collections";
import Services from "@/components/Services";
import About from "@/components/About";
import HeroShowcase from "@/components/HeroShowcase";
import TestDriveModal from "@/components/TestDriveModal";

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <Hero
        onViewCollections={() => {
          document
            .getElementById("collections")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        onBookAppointment={() => setAppointmentOpen(true)}
      />
      <BrandLogoStrip />
      <Collections onBookAppointment={() => setAppointmentOpen(true)} />
      <Services />
      <About />
      <HeroShowcase />
      <TestDriveModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </main>
  );
}
