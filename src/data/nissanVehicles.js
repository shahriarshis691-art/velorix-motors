export const nissanVehicles = [
  {
    id: "nissan-gt-r-nismo",
    brand: "Nissan",
    category: "VEHICLES",
    title: "Nissan GT-R NISMO",
    tagline: "Track-Bred Supercar Dominance & Precision",
    coverImage: "/images/nissan/gtr-nismo.jpg",
    galleryImages: [
      "/images/nissan/gtr-front.jpg",
      "/images/nissan/gtr-interior.jpg",
      "/images/nissan/gtr-rear.jpg",
    ],
    specs: {
      power: "600 HP",
      acceleration: "2.7s (0-60 mph)",
      topSpeed: "205 mph",
      engine: "3.8L Twin-Turbo V6 (VR38DETT)",
      drivetrain: "ATTESA E-TS All-Wheel Drive",
    },
    price: "BDT 2.65 Crore",
  },
  {
    id: "nissan-z-nismo",
    brand: "Nissan",
    category: "VEHICLES",
    title: "Nissan Z NISMO",
    tagline: "Pure Iconic Sports Heritage Reimagined",
    coverImage: "/images/nissan/z-nismo.jpg",
    galleryImages: [
      "/images/nissan/z-front.jpg",
      "/images/nissan/z-interior.jpg",
      "/images/nissan/z-cockpit.jpg",
    ],
    specs: {
      power: "420 HP",
      acceleration: "4.3s (0-60 mph)",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Turbo V6",
      drivetrain: "Rear-Wheel Drive",
    },
    price: "BDT 78.9 Lakh",
  },
  {
    id: "nissan-patrol-nismo",
    brand: "Nissan",
    category: "VEHICLES",
    title: "Nissan Patrol NISMO",
    tagline: "Commanding V8 Luxury SUV Authority",
    coverImage: "/images/nissan/patrol.jpg",
    galleryImages: [
      "/images/nissan/patrol-front.jpg",
      "/images/nissan/patrol-interior.jpg",
      "/images/nissan/patrol-side.jpg",
    ],
    specs: {
      power: "428 HP",
      acceleration: "6.6s (0-60 mph)",
      topSpeed: "130 mph",
      engine: "5.6L Naturally Aspirated V8",
      drivetrain: "All-Mode 4x4",
    },
    price: "BDT 1.26 Crore",
  },
  {
    id: "nissan-versa-sedan",
    brand: "Nissan",
    category: "VEHICLES",
    title: "Nissan Versa Sedan",
    tagline: "Modern Efficiency & Everyday Urban Practicality",
    coverImage: "/images/nissan/nissan-versa.jpg",
    coverFit: "contain",
    galleryImages: [
      "/images/nissan/versa-front.jpg",
      "/images/nissan/versa-interior.jpg",
    ],
    specs: {
      power: "122 HP",
      acceleration: "9.5s (0-60 mph)",
      topSpeed: "115 mph",
      engine: "1.6L DOHC 4-Cylinder",
      drivetrain: "Front-Wheel Drive",
    },
    price: "BDT 20.0 Lakh",
  },
];

export function getNissanVehicleById(id) {
  return nissanVehicles.find((vehicle) => vehicle.id === id);
}

export default nissanVehicles;
