import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_Bengali,
  Orbitron,
} from "next/font/google";
import Footer from "@/components/Footer";
import AppProviders from "@/components/AppProviders";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VELORIX MOTORS — Japan-import cars in Bangladesh",
  description:
    "Axio, Premio, Creta and more — Japan-auction Toyotas, Hondas, BMWs, Nissans and Hyundais prepared for Dhaka delivery.",
};

export const viewport = {
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${cormorant.variable} ${bengali.variable} font-sans bg-[#faf9f6] text-neutral-900 antialiased`}
      >
        <AppProviders>
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
