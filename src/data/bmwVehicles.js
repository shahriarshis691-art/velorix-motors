export const bmwVehicles = [
  {
    id: "bmw-3-series-318i",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW 3 Series (318i / 320i)",
    tagline: "The Most Popular & Accessible Luxury Sports Sedan in BD",
    coverImage: "/images/bmw/bmw-3-series.jpg",
    galleryImages: [
      "/images/bmw/3-series-front.jpg",
      "/images/bmw/3-series-interior.jpg",
      "/images/bmw/3-series-rear.jpg",
    ],
    specs: {
      power: "156 HP",
      acceleration: "8.4s (0-100 km/h)",
      topSpeed: "223 km/h",
      engine: "2.0L TwinPower Turbo 4-Cylinder",
      drivetrain: "Rear-Wheel Drive (8-Speed Steptronic)",
    },
    price: "৳ 65,00,000",
  },
  {
    id: "bmw-x1-sdrive",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW X1 (sDrive18i)",
    tagline: "Practical Compact Luxury Family SUV with Low Maintenance",
    coverImage: "/images/bmw/bmw-x1.jpg",
    galleryImages: [
      "/images/bmw/x1-front.jpg",
      "/images/bmw/x1-interior.jpg",
      "/images/bmw/x1-side.jpg",
    ],
    specs: {
      power: "136 HP",
      acceleration: "9.2s (0-100 km/h)",
      topSpeed: "208 km/h",
      engine: "1.5L TwinPower Turbo 3-Cylinder",
      drivetrain: "Front-Wheel Drive (7-Speed Steptronic DCT)",
    },
    price: "৳ 58,00,000",
  },
  {
    id: "bmw-5-series-520i",
    brand: "BMW",
    category: "VEHICLES",
    title: "BMW 5 Series (520i / 530e Hybrid)",
    tagline: "Executive Comfort with Hybrid Efficiency",
    coverImage: "/images/bmw/bmw-5-series.jpg",
    galleryImages: [
      "/images/bmw/5-series-front.jpg",
      "/images/bmw/5-series-interior.jpg",
      "/images/bmw/5-series-rear.jpg",
    ],
    specs: {
      power: "184 HP",
      acceleration: "7.9s (0-100 km/h)",
      topSpeed: "235 km/h",
      engine: "2.0L TwinPower Turbo Petrol / Plug-in Hybrid",
      drivetrain: "Rear-Wheel Drive (8-Speed Steptronic)",
    },
    price: "৳ 85,00,000",
  },
];

export function getBmwVehicleById(id) {
  return bmwVehicles.find((vehicle) => vehicle.id === id);
}

export default bmwVehicles;
