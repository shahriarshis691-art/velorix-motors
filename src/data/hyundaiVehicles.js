export const hyundaiVehicles = [
  {
    id: "hyundai-creta",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Creta",
    tagline: "The Ultimate Urban SUV with Contemporary Tech",
    coverImage: "/images/hyundai/creta.jpg",
    galleryImages: [
      "/images/hyundai/creta-front.jpg",
      "/images/hyundai/creta-interior.jpg",
      "/images/hyundai/creta-rear.jpg",
    ],
    specs: {
      power: "115 HP",
      acceleration: "10.4s (0-100 km/h)",
      topSpeed: "170 km/h",
      engine: "1.5L Smartstream Petrol Engine",
      drivetrain: "Front-Wheel Drive (IVT Automatic)",
    },
    price: "৳ 42,50,000",
  },
  {
    id: "hyundai-alcazar",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Alcazar",
    tagline: "Premium 6/7-Seater Executive Luxury SUV",
    coverImage: "/images/hyundai/hyundai-alcazar.jpg",
    coverFit: "contain",
    galleryImages: [
      "/images/hyundai/alcazar-front.jpg",
      "/images/hyundai/alcazar-interior.jpg",
      "/images/hyundai/alcazar-side.jpg",
    ],
    specs: {
      power: "159 HP",
      acceleration: "9.8s (0-100 km/h)",
      topSpeed: "185 km/h",
      engine: "2.0L MPi Petrol / 1.5L Turbo",
      drivetrain: "6-Speed Automatic Transmission",
    },
    price: "৳ 55,00,000",
  },
  {
    id: "hyundai-tucson",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Tucson",
    tagline: "Parametric Dynamic Styling with Advanced Safety",
    coverImage: "/images/hyundai/tucson.jpg",
    galleryImages: [
      "/images/hyundai/tucson-front.jpg",
      "/images/hyundai/tucson-interior.jpg",
      "/images/hyundai/tucson-rear.jpg",
    ],
    specs: {
      power: "156 HP",
      acceleration: "9.2s (0-100 km/h)",
      topSpeed: "190 km/h",
      engine: "2.0L Smartstream G Engine",
      drivetrain: "All-Wheel Drive (HTRAC)",
    },
    price: "৳ 65,00,000",
  },
  {
    id: "hyundai-santa-fe",
    brand: "Hyundai",
    category: "VEHICLES",
    title: "Hyundai Santa Fe",
    tagline: "Flagship Luxury Family SUV with Bold Presence",
    coverImage: "/images/hyundai/santa-fe.jpg",
    galleryImages: [
      "/images/hyundai/santa-fe-front.jpg",
      "/images/hyundai/santa-fe-interior.jpg",
    ],
    specs: {
      power: "230 HP (Turbo Hybrid)",
      acceleration: "7.9s (0-100 km/h)",
      topSpeed: "195 km/h",
      engine: "1.6L T-GDi Turbo Hybrid Engine",
      drivetrain: "HTRAC All-Wheel Drive",
    },
    price: "৳ 1,15,00,000",
  },
];

export function getHyundaiVehicleById(id) {
  return hyundaiVehicles.find((vehicle) => vehicle.id === id);
}

export default hyundaiVehicles;
