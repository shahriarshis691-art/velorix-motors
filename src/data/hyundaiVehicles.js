export const hyundaiVehicles = [
  {
    id: "hyundai-ioniq-5-n",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai IONIQ 5 N",
    tagline: "Electrified High-Performance Driving Evolution",
    coverImage: "/images/hyundai/ioniq-5-n.jpg",
    galleryImages: [
      "/images/hyundai/ioniq-5-n-front.jpg",
      "/images/hyundai/ioniq-5-n-interior.jpg",
      "/images/hyundai/ioniq-5-n-rear.jpg",
    ],
    specs: {
      power: "641 HP (N Grin Boost)",
      acceleration: "3.25s (0-60 mph)",
      topSpeed: "162 mph",
      engine: "Dual Electric Motors (84 kWh Battery)",
      drivetrain: "AWD with N Drift Optimizer",
    },
    price: "$66,100",
  },
  {
    id: "hyundai-sonata-n-line",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Sonata N Line",
    tagline: "Dynamic Fastback Styling with Turbocharged Agility",
    coverImage: "/images/hyundai/sonata-n-line.jpg",
    coverFit: "contain",
    galleryImages: [
      "/images/hyundai/sonata-front.jpg",
      "/images/hyundai/sonata-interior.jpg",
    ],
    specs: {
      power: "290 HP",
      acceleration: "5.3s (0-60 mph)",
      topSpeed: "145 mph",
      engine: "2.5L Turbocharged 4-Cylinder",
      drivetrain: "Front-Wheel Drive",
    },
    price: "$34,950",
  },
  {
    id: "hyundai-palisade-calligraphy",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Palisade Calligraphy",
    tagline: "Flagship Three-Row Luxury & Executive Comfort",
    coverImage: "/images/hyundai/palisade.jpg",
    galleryImages: [
      "/images/hyundai/palisade-front.jpg",
      "/images/hyundai/palisade-interior.jpg",
      "/images/hyundai/palisade-side.jpg",
    ],
    specs: {
      power: "291 HP",
      acceleration: "6.9s (0-60 mph)",
      topSpeed: "130 mph",
      engine: "3.8L V6 GDI",
      drivetrain: "HTRAC All-Wheel Drive",
    },
    price: "$50,100",
  },
  {
    id: "hyundai-elantra-n",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Elantra N",
    tagline: "Pure Precision Driving for Motorsport Enthusiasts",
    coverImage: "/images/hyundai/elantra-n.jpg",
    galleryImages: [
      "/images/hyundai/elantra-front.jpg",
      "/images/hyundai/elantra-interior.jpg",
    ],
    specs: {
      power: "276 HP",
      acceleration: "4.8s (0-60 mph)",
      topSpeed: "155 mph",
      engine: "2.0L Turbocharged Flat-Power GDI",
      drivetrain: "Front-Wheel Drive with e-LSD",
    },
    price: "$33,700",
  },
];

export function getHyundaiVehicleById(id) {
  return hyundaiVehicles.find((vehicle) => vehicle.id === id);
}

export default hyundaiVehicles;
