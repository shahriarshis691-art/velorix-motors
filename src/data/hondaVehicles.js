export const hondaVehicles = [
  {
    id: "honda-civic-type-r",
    brand: "Honda",
    category: "VEHICLES",
    title: "Honda Civic Type R",
    tagline: "The Pinnacle of Hot Hatch Performance",
    coverImage: "/images/honda/civic-type-r.jpg",
    galleryImages: [
      "/images/honda/civic-type-r-front.jpg",
      "/images/honda/civic-type-r-interior.jpg",
      "/images/honda/civic-type-r-rear.jpg",
    ],
    specs: {
      power: "315 HP",
      acceleration: "4.9s (0-60 mph)",
      topSpeed: "169 mph",
      engine: "2.0L Turbo Inline-4",
      transmission: "6-Speed Manual",
    },
    price: "$44,795",
  },
  {
    id: "honda-accord-hybrid",
    brand: "Honda",
    category: "VEHICLES",
    title: "Honda Accord Hybrid",
    tagline: "Sophistication Meets Modern Efficiency",
    coverImage: "/images/honda/accord-hybrid.jpg",
    galleryImages: [
      "/images/honda/accord-front.jpg",
      "/images/honda/accord-interior.jpg",
    ],
    specs: {
      power: "204 HP",
      acceleration: "6.5s (0-60 mph)",
      topSpeed: "125 mph",
      engine: "2.0L 4-Cylinder + Electric Motor",
      transmission: "E-CVT",
    },
    price: "$32,895",
  },
  {
    id: "honda-cr-v",
    brand: "Honda",
    category: "VEHICLES",
    title: "Honda CR-V",
    tagline: "Refined Luxury & Everyday Versatility",
    coverImage: "/images/honda/crv.jpg",
    galleryImages: [
      "/images/honda/crv-front.jpg",
      "/images/honda/crv-interior.jpg",
    ],
    specs: {
      power: "190 HP",
      acceleration: "7.9s (0-60 mph)",
      topSpeed: "120 mph",
      engine: "1.5L Turbocharged 4-Cylinder",
      transmission: "CVT",
    },
    price: "$29,500",
  },
];

export function getHondaVehicleById(id) {
  return hondaVehicles.find((vehicle) => vehicle.id === id);
}

export default hondaVehicles;
