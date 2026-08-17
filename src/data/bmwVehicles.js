export const bmwVehicles = [
  {
    id: "bmw-m5-sedan",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW M5 Sedan",
    tagline: "Unrivaled Power & High-Performance Engineering",
    coverImage: "/images/bmw/m5-sedan.jpg",
    galleryImages: [
      "/images/bmw/m5-front.jpg",
      "/images/bmw/m5-interior.jpg",
      "/images/bmw/m5-rear.jpg",
    ],
    specs: {
      power: "717 HP (M Hybrid)",
      acceleration: "3.4s (0-60 mph)",
      topSpeed: "190 mph",
      engine: "4.4L Twin-Turbo V8 + Electric Motor",
      drivetrain: "M xDrive AWD",
    },
    price: "BDT 1.43 Crore",
  },
  {
    id: "bmw-7-series-sedan",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW 7 Series (760i xDrive)",
    tagline: "The Pinnacle of Executive Luxury & Innovation",
    coverImage: "/images/bmw/7-series.jpg",
    galleryImages: [
      "/images/bmw/7-series-front.jpg",
      "/images/bmw/7-series-interior.jpg",
      "/images/bmw/7-series-rear.jpg",
    ],
    specs: {
      power: "536 HP",
      acceleration: "4.1s (0-60 mph)",
      topSpeed: "155 mph",
      engine: "4.4L Twin-Turbo V8 with Mild Hybrid",
      drivetrain: "xDrive All-Wheel Drive",
    },
    price: "BDT 1.46 Crore",
  },
  {
    id: "bmw-m4-competition",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW M4 Competition Coupé",
    tagline: "Pure Motorsport Adrenaline & Sculpted Aerodynamics",
    coverImage: "/images/bmw/m4-coupe.jpg",
    galleryImages: [
      "/images/bmw/m4-front.jpg",
      "/images/bmw/m4-interior.jpg",
      "/images/bmw/m4-cockpit.jpg",
    ],
    specs: {
      power: "523 HP",
      acceleration: "3.4s (0-60 mph)",
      topSpeed: "180 mph",
      engine: "3.0L M TwinPower Turbo Inline-6",
      drivetrain: "M xDrive All-Wheel Drive",
    },
    price: "BDT 1.06 Crore",
  },
  {
    id: "bmw-x7-m60i",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW X7 M60i",
    tagline: "Commanding Presence with Three Rows of Pure Luxury",
    coverImage: "/images/bmw/x7-suv.jpg",
    galleryImages: [
      "/images/bmw/x7-front.jpg",
      "/images/bmw/x7-interior.jpg",
      "/images/bmw/x7-side.jpg",
    ],
    specs: {
      power: "523 HP",
      acceleration: "4.5s (0-60 mph)",
      topSpeed: "155 mph",
      engine: "4.4L TwinPower Turbo V8",
      drivetrain: "xDrive All-Wheel Drive",
    },
    price: "BDT 1.33 Crore",
  },
];

export function getBmwVehicleById(id) {
  return bmwVehicles.find((vehicle) => vehicle.id === id);
}

export default bmwVehicles;
