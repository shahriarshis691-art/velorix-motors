export const toyotaVehicles = [
  {
    id: "toyota-crown-sedan",
    brand: "Toyota",
    category: "VEHICLES",
    title: "Toyota Crown",
    tagline: "Elevated Elegance & Executive Craftsmanship",
    coverImage: "/images/toyota/crown.jpg",
    galleryImages: [
      "/images/toyota/crown-front.jpg",
      "/images/toyota/crown-interior.jpg",
      "/images/toyota/crown-rear.jpg",
    ],
    specs: {
      power: "340 HP (Hybrid MAX)",
      acceleration: "5.7s (0-60 mph)",
      topSpeed: "130 mph",
      engine: "2.4L Turbo Hybrid",
      drivetrain: "All-Wheel Drive",
    },
    price: "BDT 49.7 Lakh",
  },
  {
    id: "toyota-camry-hybrid",
    brand: "Toyota",
    category: "VEHICLES",
    title: "Toyota Camry Hybrid",
    tagline: "Dynamic Sculpting Paired With Hybrid Efficiency",
    coverImage: "/images/toyota-avalon.jpg",
    coverFit: "contain",
    galleryImages: [
      "/images/toyota-avalon.jpg",
      "/images/toyota/camry-interior.jpg",
    ],
    specs: {
      power: "225 HP",
      acceleration: "7.1s (0-60 mph)",
      topSpeed: "115 mph",
      engine: "2.5L 4-Cylinder Hybrid",
      drivetrain: "Front-Wheel Drive",
    },
    price: "BDT 34.1 Lakh",
  },
  {
    id: "toyota-gr-supra",
    brand: "Toyota",
    category: "VEHICLES",
    title: "Toyota GR Supra 3.0",
    tagline: "Pure Sports Car Heritage & Track Performance",
    coverImage: "/images/toyota/supra.jpg",
    galleryImages: [
      "/images/toyota/supra-front.jpg",
      "/images/toyota/supra-interior.jpg",
      "/images/toyota/supra-rear.jpg",
    ],
    specs: {
      power: "382 HP",
      acceleration: "3.9s (0-60 mph)",
      topSpeed: "155 mph",
      engine: "3.0L Twin-Scroll Turbo Inline-6",
      drivetrain: "Rear-Wheel Drive",
    },
    price: "BDT 67.5 Lakh",
  },
  {
    id: "toyota-land-cruiser",
    brand: "Toyota",
    category: "VEHICLES",
    title: "Toyota Land Cruiser",
    tagline: "Legendary Off-Road Capability & Modern Luxury",
    coverImage: "/images/toyota/land-cruiser.jpg",
    galleryImages: [
      "/images/toyota/land-cruiser-exterior.jpg",
      "/images/toyota/land-cruiser-interior.jpg",
    ],
    specs: {
      power: "326 HP",
      acceleration: "6.8s (0-60 mph)",
      topSpeed: "110 mph",
      engine: "i-FORCE MAX 2.4L Turbo Hybrid",
      drivetrain: "Full-Time 4WD",
    },
    price: "BDT 67.1 Lakh",
  },
];

export function getToyotaVehicleById(id) {
  return toyotaVehicles.find((vehicle) => vehicle.id === id);
}

export default toyotaVehicles;
