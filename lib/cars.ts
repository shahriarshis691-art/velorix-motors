import { BRANDS, type BrandSlug } from "@/lib/brands";

export type FuelType = "Hybrid" | "Petrol" | "EV";
export type VehicleStatus = "Available" | "In Transit" | "Pre-Order";

export type Vehicle = {
  id: string;
  brand: BrandSlug;
  modelName: string;
  year: number;
  grade: number;
  mileage: string;
  mileageKm: number;
  fuelType: FuelType;
  transmission: string;
  packageName: string;
  price: string;
  priceLakh: number;
  exteriorColor: string;
  interiorGrade: string;
  image: string;
  status: VehicleStatus;
};

export const VEHICLES: Vehicle[] = [
  {
    id: "lr-def-90-2023",
    brand: "land-rover",
    modelName: "Defender 90 X-Dynamic HSE",
    year: 2023,
    grade: 4.5,
    mileage: "18,400 km",
    mileageKm: 18400,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "X-Dynamic HSE",
    price: "BDT 215 Lakh",
    priceLakh: 215,
    exteriorColor: "Florence Red Metallic",
    interiorGrade: "A / 4.5",
    image: "/images/land-rover-defender.png",
    status: "Available",
  },
  {
    id: "lr-def-110-2022",
    brand: "land-rover",
    modelName: "Defender 110 S",
    year: 2022,
    grade: 4.0,
    mileage: "32,000 km",
    mileageKm: 32000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    packageName: "S Explorer Pack",
    price: "BDT 185 Lakh",
    priceLakh: 185,
    exteriorColor: "Santorini Black",
    interiorGrade: "B / 4.0",
    image: "/images/land-rover-defender.png",
    status: "Available",
  },
  {
    id: "lr-rrs-2021",
    brand: "land-rover",
    modelName: "Range Rover Sport HSE",
    year: 2021,
    grade: 5.0,
    mileage: "24,000 km",
    mileageKm: 24000,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "HSE Dynamic",
    price: "BDT 198 Lakh",
    priceLakh: 198,
    exteriorColor: "Eiger Grey",
    interiorGrade: "A / 5.0",
    image: "/images/land-rover-defender.png",
    status: "In Transit",
  },
  {
    id: "lr-disco-2024",
    brand: "land-rover",
    modelName: "Discovery Sport R-Dynamic",
    year: 2024,
    grade: 4.5,
    mileage: "8,200 km",
    mileageKm: 8200,
    fuelType: "Hybrid",
    transmission: "Automatic",
    packageName: "R-Dynamic SE",
    price: "BDT 142 Lakh",
    priceLakh: 142,
    exteriorColor: "Fuji White",
    interiorGrade: "A / 4.5",
    image: "/images/land-rover-defender.png",
    status: "Pre-Order",
  },
  {
    id: "bmw-ix-2023",
    brand: "bmw",
    modelName: "iX xDrive50",
    year: 2023,
    grade: 5.0,
    mileage: "12,000 km",
    mileageKm: 12000,
    fuelType: "EV",
    transmission: "Automatic",
    packageName: "Sport Package",
    price: "BDT 195 Lakh",
    priceLakh: 195,
    exteriorColor: "Storm Bay Metallic",
    interiorGrade: "A / 5.0",
    image: "/images/bmw-ix.png",
    status: "Available",
  },
  {
    id: "bmw-x5-2022",
    brand: "bmw",
    modelName: "X5 xDrive40i",
    year: 2022,
    grade: 4.5,
    mileage: "28,500 km",
    mileageKm: 28500,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "M Sport",
    price: "BDT 168 Lakh",
    priceLakh: 168,
    exteriorColor: "Carbon Black",
    interiorGrade: "A / 4.5",
    image: "/images/bmw-ix.png",
    status: "Available",
  },
  {
    id: "bmw-330i-2021",
    brand: "bmw",
    modelName: "330i M Sport",
    year: 2021,
    grade: 4.0,
    mileage: "36,000 km",
    mileageKm: 36000,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "M Sport Shadowline",
    price: "BDT 78.5 Lakh",
    priceLakh: 78.5,
    exteriorColor: "Mineral Grey",
    interiorGrade: "B / 4.0",
    image: "/images/bmw-ix.png",
    status: "Available",
  },
  {
    id: "bmw-i4-2024",
    brand: "bmw",
    modelName: "i4 eDrive40",
    year: 2024,
    grade: 4.5,
    mileage: "6,800 km",
    mileageKm: 6800,
    fuelType: "EV",
    transmission: "Automatic",
    packageName: "M Sport Pro",
    price: "BDT 112 Lakh",
    priceLakh: 112,
    exteriorColor: "Brooklyn Grey",
    interiorGrade: "A / 4.5",
    image: "/images/bmw-ix.png",
    status: "In Transit",
  },
  {
    id: "nis-z-2023",
    brand: "nissan",
    modelName: "Z Proto Spec",
    year: 2023,
    grade: 5.0,
    mileage: "9,400 km",
    mileageKm: 9400,
    fuelType: "Petrol",
    transmission: "DCT",
    packageName: "Proto Spec",
    price: "BDT 96 Lakh",
    priceLakh: 96,
    exteriorColor: "Passion Red",
    interiorGrade: "A / 5.0",
    image: "/images/nissan-z.png",
    status: "Available",
  },
  {
    id: "nis-xtrail-2022",
    brand: "nissan",
    modelName: "X-Trail e-POWER",
    year: 2022,
    grade: 4.5,
    mileage: "22,000 km",
    mileageKm: 22000,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "Tekna+",
    price: "BDT 62 Lakh",
    priceLakh: 62,
    exteriorColor: "Pearl White",
    interiorGrade: "A / 4.5",
    image: "/images/nissan-z.png",
    status: "Available",
  },
  {
    id: "nis-patrol-2021",
    brand: "nissan",
    modelName: "Patrol Titanium",
    year: 2021,
    grade: 4.0,
    mileage: "41,000 km",
    mileageKm: 41000,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "Titanium V8",
    price: "BDT 128 Lakh",
    priceLakh: 128,
    exteriorColor: "Brilliant Silver",
    interiorGrade: "B / 4.0",
    image: "/images/nissan-z.png",
    status: "Available",
  },
  {
    id: "nis-ariya-2024",
    brand: "nissan",
    modelName: "Ariya Evolve+",
    year: 2024,
    grade: 4.5,
    mileage: "5,100 km",
    mileageKm: 5100,
    fuelType: "EV",
    transmission: "Automatic",
    packageName: "Evolve+",
    price: "BDT 84 Lakh",
    priceLakh: 84,
    exteriorColor: "Dawn Blue",
    interiorGrade: "A / 4.5",
    image: "/images/nissan-z.png",
    status: "Pre-Order",
  },
  {
    id: "toy-harrier-2023",
    brand: "toyota",
    modelName: "Harrier Z Leather",
    year: 2023,
    grade: 5.0,
    mileage: "14,200 km",
    mileageKm: 14200,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "Z Leather Package",
    price: "BDT 78.5 Lakh",
    priceLakh: 78.5,
    exteriorColor: "Precious Metal",
    interiorGrade: "A / 5.0",
    image: "/images/toyota-harrier.png",
    status: "Available",
  },
  {
    id: "toy-crown-2023",
    brand: "toyota",
    modelName: "Crown Crossover RS",
    year: 2023,
    grade: 4.5,
    mileage: "19,800 km",
    mileageKm: 19800,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "RS Advanced",
    price: "BDT 92 Lakh",
    priceLakh: 92,
    exteriorColor: "Precious Bronze",
    interiorGrade: "A / 4.5",
    image: "/images/toyota-harrier.png",
    status: "Available",
  },
  {
    id: "toy-lc300-2022",
    brand: "toyota",
    modelName: "Land Cruiser 300 VX",
    year: 2022,
    grade: 4.5,
    mileage: "27,000 km",
    mileageKm: 27000,
    fuelType: "Petrol",
    transmission: "Automatic",
    packageName: "VX-R",
    price: "BDT 185 Lakh",
    priceLakh: 185,
    exteriorColor: "Pearl White",
    interiorGrade: "A / 4.5",
    image: "/images/toyota-harrier.png",
    status: "Available",
  },
  {
    id: "toy-camry-2024",
    brand: "toyota",
    modelName: "Camry Hybrid XLE",
    year: 2024,
    grade: 5.0,
    mileage: "7,600 km",
    mileageKm: 7600,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "XLE Premium",
    price: "BDT 64 Lakh",
    priceLakh: 64,
    exteriorColor: "Platinum White Pearl",
    interiorGrade: "A / 5.0",
    image: "/images/toyota-harrier.png",
    status: "In Transit",
  },
  {
    id: "hon-crv-2023",
    brand: "honda",
    modelName: "CR-V e:HEV RS",
    year: 2023,
    grade: 4.5,
    mileage: "16,400 km",
    mileageKm: 16400,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "RS Exclusive",
    price: "BDT 58 Lakh",
    priceLakh: 58,
    exteriorColor: "Platinum Grey Metallic",
    interiorGrade: "A / 4.5",
    image: "/images/honda-civic.png",
    status: "Available",
  },
  {
    id: "hon-typer-2023",
    brand: "honda",
    modelName: "Civic Type R",
    year: 2023,
    grade: 5.0,
    mileage: "11,200 km",
    mileageKm: 11200,
    fuelType: "Petrol",
    transmission: "Manual",
    packageName: "Type R Championship",
    price: "BDT 82 Lakh",
    priceLakh: 82,
    exteriorColor: "Rallye Red",
    interiorGrade: "A / 5.0",
    image: "/images/honda-civic.png",
    status: "Available",
  },
  {
    id: "hon-accord-2022",
    brand: "honda",
    modelName: "Accord Hybrid",
    year: 2022,
    grade: 4.0,
    mileage: "29,500 km",
    mileageKm: 29500,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "EX-L",
    price: "BDT 52 Lakh",
    priceLakh: 52,
    exteriorColor: "Modern Steel",
    interiorGrade: "B / 4.0",
    image: "/images/honda-civic.png",
    status: "Available",
  },
  {
    id: "hon-hrv-2024",
    brand: "honda",
    modelName: "HR-V e:HEV",
    year: 2024,
    grade: 4.5,
    mileage: "4,800 km",
    mileageKm: 4800,
    fuelType: "Hybrid",
    transmission: "e-CVT",
    packageName: "RS Advance",
    price: "BDT 46 Lakh",
    priceLakh: 46,
    exteriorColor: "Meteoroid Gray",
    interiorGrade: "A / 4.5",
    image: "/images/honda-civic.png",
    status: "Pre-Order",
  },
];

export type SortKey = "price-asc" | "price-desc" | "mileage" | "newest";

export type VehicleFilters = {
  query: string;
  year: string;
  grade: string;
  fuelType: string;
  priceRange: string;
  sort: SortKey;
};

export const DEFAULT_FILTERS: VehicleFilters = {
  query: "",
  year: "all",
  grade: "all",
  fuelType: "all",
  priceRange: "all",
  sort: "newest",
};

export const PRICE_RANGES = [
  { id: "all", label: "All prices" },
  { id: "under-80", label: "Under 80 Lakh" },
  { id: "80-150", label: "80 – 150 Lakh" },
  { id: "150-plus", label: "150 Lakh +" },
] as const;

function inPriceRange(priceLakh: number, range: string) {
  if (range === "under-80") return priceLakh < 80;
  if (range === "80-150") return priceLakh >= 80 && priceLakh <= 150;
  if (range === "150-plus") return priceLakh > 150;
  return true;
}

export function getCarsByBrand(brand: BrandSlug): Vehicle[] {
  return VEHICLES.filter((car) => car.brand === brand);
}

export function getVehicleById(id: string): Vehicle | undefined {
  return VEHICLES.find((car) => car.id === id);
}

export function getModelSelectOptions(): string[] {
  const inventory = VEHICLES.map((car) => {
    const brand = BRANDS.find((item) => item.slug === car.brand)?.name ?? car.brand;
    return `${brand} ${car.modelName}`;
  });
  return Array.from(new Set([...inventory, "VX-1 Apex", "VX-S Coupe", "VX-GT Touring"]));
}

export function formatVehicleModel(car: Vehicle): string {
  const brand = BRANDS.find((item) => item.slug === car.brand)?.name ?? car.brand;
  return `${brand} ${car.modelName}`;
}

export function filterVehicles(cars: Vehicle[], filters: VehicleFilters): Vehicle[] {
  const needle = filters.query.trim().toLowerCase();

  const next = cars.filter((car) => {
    const matchesQuery =
      needle.length === 0 ||
      car.modelName.toLowerCase().includes(needle) ||
      car.packageName.toLowerCase().includes(needle);
    const matchesYear = filters.year === "all" || String(car.year) === filters.year;
    const matchesGrade =
      filters.grade === "all" || car.grade >= Number(filters.grade);
    const matchesFuel = filters.fuelType === "all" || car.fuelType === filters.fuelType;
    const matchesPrice = inPriceRange(car.priceLakh, filters.priceRange);
    return matchesQuery && matchesYear && matchesGrade && matchesFuel && matchesPrice;
  });

  next.sort((a, b) => {
    if (filters.sort === "price-asc") return a.priceLakh - b.priceLakh;
    if (filters.sort === "price-desc") return b.priceLakh - a.priceLakh;
    if (filters.sort === "mileage") return a.mileageKm - b.mileageKm;
    return b.year - a.year || a.mileageKm - b.mileageKm;
  });

  return next;
}

export function uniqueYears(cars: Vehicle[]): number[] {
  return Array.from(new Set(cars.map((car) => car.year))).sort((a, b) => b - a);
}

export function uniqueGrades(cars: Vehicle[]): number[] {
  return Array.from(new Set(cars.map((car) => car.grade))).sort((a, b) => b - a);
}

export function uniqueFuels(cars: Vehicle[]): FuelType[] {
  return Array.from(new Set(cars.map((car) => car.fuelType)));
}
