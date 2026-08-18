export const SITE = {
  name: "VELORIX MOTORS",
  tagline: "Japan-import cars for Bangladesh, prepared in Dhaka.",
  taglineBn: "বাংলাদেশের জন্য জাপান-ইমপোর্ট গাড়ি, ঢাকায় প্রস্তুত।",
  email: "concierge@velorixmotors.com",
  phoneDisplay: "+880 1712-345678",
  whatsappE164: (
    process.env.NEXT_PUBLIC_WHATSAPP ?? "8801712345678"
  ).replace(/\D/g, ""),
  instagram: "https://instagram.com/velorixmotors",
  instagramHandle: "@velorixmotors",
  bkash: process.env.NEXT_PUBLIC_BKASH ?? "01712-345678",
  nagad: process.env.NEXT_PUBLIC_NAGAD ?? "01712-345678",
  bank:
    process.env.NEXT_PUBLIC_BANK ??
    "Dutch-Bangla Bank · VELORIX MOTORS · 123-456-789",
} as const;

export const SHOWROOMS = [
  {
    id: "gulshan",
    name: "Dhaka — Gulshan Atelier",
    nameBn: "ঢাকা — গুলশান অ্যাটেলিয়ে",
    address: "Gulshan 2, Dhaka 1212",
    addressBn: "গুলশান ২, ঢাকা ১২১২",
    hours: "10:00–19:00",
    days: "Saturday–Thursday",
    daysBn: "শনিবার–বৃহস্পতিবার",
    mapQuery: "Gulshan 2, Dhaka 1212",
  },
  {
    id: "banani",
    name: "Dhaka — Banani Pavilion",
    nameBn: "ঢাকা — বনানী প্যাভিলিয়ন",
    address: "Banani, Dhaka 1213",
    addressBn: "বনানী, ঢাকা ১২১৩",
    hours: "10:00–19:00",
    days: "Saturday–Thursday",
    daysBn: "শনিবার–বৃহস্পতিবার",
    mapQuery: "Banani, Dhaka 1213",
  },
  {
    id: "agrabad",
    name: "Chattogram — Agrabad Gallery",
    nameBn: "চট্টগ্রাম — আগ্রাবাদ গ্যালারি",
    address: "Agrabad, Chattogram 4100",
    addressBn: "আগ্রাবাদ, চট্টগ্রাম ৪১০০",
    hours: "10:00–19:00",
    days: "Saturday–Thursday",
    daysBn: "শনিবার–বৃহস্পতিবার",
    mapQuery: "Agrabad, Chattogram 4100",
  },
] as const;

export const SHOWROOM_LABELS = SHOWROOMS.map((item) => item.name);

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function vehicleEnquireMessage(title: string, price: string) {
  return `Hello VELORIX — I want ${title} — ${price}`;
}

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function paymentLabel(method: "bkash" | "nagad" | "bank" | "card") {
  if (method === "bkash") return `bKash ${SITE.bkash}`;
  if (method === "nagad") return `Nagad ${SITE.nagad}`;
  if (method === "card") return "Card — a concierge sends the payment link";
  return SITE.bank;
}
