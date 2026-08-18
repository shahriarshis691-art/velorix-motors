import { BRANDS, type BrandSlug } from "@/lib/brands";

export type FuelType = "Hybrid" | "Petrol" | "EV";
export type VehicleStatus = "Available" | "In Transit" | "Pre-Order";

export type CarMedia = {
  main: string;
  rear: string;
  interior: string;
  gallery: string[];
};

export type Vehicle = {
  id: string;
  brand: BrandSlug;
  modelName: string;
  year: number;
  grade: number;
  mileage: string;
  mileageKm: number;
  fuelType: FuelType;
  engine?: string;
  driveType?: string;
  transmission: string;
  packageName: string;
  price: string;
  priceLakh: number;
  exteriorColor: string;
  interiorGrade: string;
  media: CarMedia;
  status: VehicleStatus;
};

function photos(
  main: string,
  rear: string,
  interior: string,
  gallery: string[] = [],
): CarMedia {
  return { main, rear, interior, gallery };
}

const MEDIA = {
  bmw: photos("/images/bmw-coast.png", "/images/bmw-rear.png", "/images/bmw-interior.png"),
  nissan: photos(
    "/images/nissan-z-coast.png",
    "/images/nissan-z-rear.png",
    "/images/nissan-z-interior.png",
  ),
  harrierZ: photos(
    "/images/toyota-harrier-z-coast.png",
    "/images/toyota-harrier-z-rear.png",
    "/images/toyota-leather-interior.png",
    ["/images/toyota-harrier-coast.png", "/images/toyota-harrier.png"],
  ),
  crown: photos(
    "/images/toyota-crown-coast.png",
    "/images/toyota-crown-rear.png",
    "/images/toyota-leather-interior.png",
  ),
  rav4: photos(
    "/images/toyota-rav4-coast.png",
    "/images/toyota-rav4-rear.png",
    "/images/toyota-leather-interior.png",
  ),
  allionA15: photos(
    "/images/toyota-allion-a15-coast.png",
    "/images/toyota-allion-rear.png",
    "/images/toyota-sedan-interior.png",
    ["/images/toyota-allion.png", "/images/toyota-allion-coast.png"],
  ),
  premio: photos(
    "/images/toyota-premio-coast.png",
    "/images/toyota-premio-rear.png",
    "/images/toyota-sedan-interior.png",
  ),
  prado: photos(
    "/images/toyota-prado-coast.png",
    "/images/toyota-prado-rear.png",
    "/images/toyota-prado-interior.png",
  ),
  noah: photos(
    "/images/toyota-noah-coast.png",
    "/images/toyota-noah-rear.png",
    "/images/toyota-noah-interior.png",
  ),
  civic: photos(
    "/images/honda-civic-coast.png",
    "/images/honda-civic-rear.png",
    "/images/honda-cabin-interior.png",
    ["/images/honda-civic.png"],
  ),
  vezel: photos(
    "/images/honda-vezel-coast.png",
    "/images/honda-vezel-rear.png",
    "/images/honda-suv-interior.png",
  ),
  crv: photos(
    "/images/honda-crv-coast.png",
    "/images/honda-crv-rear.png",
    "/images/honda-suv-interior.png",
  ),
  accord: photos(
    "/images/honda-accord-coast.png",
    "/images/honda-accord-rear.png",
    "/images/honda-cabin-interior.png",
  ),
  zrv: photos(
    "/images/honda-zrv-coast.png",
    "/images/honda-zrv-rear.png",
    "/images/honda-suv-interior.png",
  ),
  allionPearl: photos(
    "/images/toyota-allion-coast.png",
    "/images/toyota-allion-rear.png",
    "/images/toyota-sedan-interior.png",
    ["/images/toyota-allion.png"],
  ),
  allion: photos(
    "/images/toyota-allion-coast.png",
    "/images/toyota-allion-rear.png",
    "/images/toyota-sedan-interior.png",
    ["/images/toyota-allion.png"],
  ),
} satisfies Record<string, CarMedia>;

export function heroImage(car: Vehicle): string {
  return car.media.main;
}

export function vehiclePhotos(car: Vehicle): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const src of [car.media.main, car.media.rear, car.media.interior, ...car.media.gallery]) {
    if (!src || seen.has(src)) continue;
    seen.add(src);
    out.push(src);
  }
  return out;
}

export function triptychPhotos(car: Vehicle): {
  left: string;
  center: string;
  right: string;
} {
  return {
    left: car.media.rear,
    center: car.media.main,
    right: car.media.gallery[0] ?? car.media.interior,
  };
}

export const VEHICLES: Vehicle[] = [
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
    media: MEDIA.bmw,
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
    media: MEDIA.bmw,
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
    media: MEDIA.bmw,
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
    media: MEDIA.bmw,
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
    media: MEDIA.nissan,
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
    media: MEDIA.nissan,
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
    media: MEDIA.nissan,
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
    media: MEDIA.nissan,
    status: "Pre-Order",
  },
  {
    id: "toy-harrier-z-2023",
    brand: "toyota",
    modelName: "Harrier Z Leather Package",
    year: 2023,
    grade: 5.0,
    mileage: "11,200 km",
    mileageKm: 11200,
    fuelType: "Hybrid",
    engine: "2.5L Hybrid E-Four",
    driveType: "E-Four AWD",
    transmission: "e-CVT Automatic",
    packageName: "Z Leather Package",
    price: "BDT 86.5 Lakh",
    priceLakh: 86.5,
    exteriorColor: "Pearl White",
    interiorGrade: "A / 5.0",
    media: MEDIA.harrierZ,
    status: "Available",
  },
  {
    id: "toy-crown-g-2024",
    brand: "toyota",
    modelName: "Crown Crossover G Advanced",
    year: 2024,
    grade: 5.0,
    mileage: "6,800 km",
    mileageKm: 6800,
    fuelType: "Hybrid",
    engine: "2.5L Hybrid E-Four",
    driveType: "E-Four AWD",
    transmission: "e-CVT Automatic",
    packageName: "G Advanced",
    price: "BDT 1.15 Crore",
    priceLakh: 115,
    exteriorColor: "Precious Metal / Two-Tone Black",
    interiorGrade: "A / 5.0",
    media: MEDIA.crown,
    status: "Pre-Order",
  },
  {
    id: "toy-rav4-2023",
    brand: "toyota",
    modelName: "RAV4 Hybrid Adventure",
    year: 2023,
    grade: 4.5,
    mileage: "18,500 km",
    mileageKm: 18500,
    fuelType: "Hybrid",
    engine: "2.5L Hybrid AWD",
    driveType: "AWD",
    transmission: "e-CVT Automatic",
    packageName: "Adventure",
    price: "BDT 68.0 Lakh",
    priceLakh: 68,
    exteriorColor: "Urban Khaki / Ash Grey",
    interiorGrade: "A / 4.5",
    media: MEDIA.rav4,
    status: "Available",
  },
  {
    id: "toy-allion-a15-2021",
    brand: "toyota",
    modelName: "Allion A15 G-Plus",
    year: 2021,
    grade: 4.5,
    mileage: "28,000 km",
    mileageKm: 28000,
    fuelType: "Petrol",
    engine: "1.5L Petrol CVT",
    driveType: "FWD",
    transmission: "CVT Automatic",
    packageName: "G-Plus",
    price: "BDT 38.5 Lakh",
    priceLakh: 38.5,
    exteriorColor: "Wine Red / Pearl White",
    interiorGrade: "A / 4.5",
    media: MEDIA.allionA15,
    status: "Available",
  },
  {
    id: "toy-premio-fex-2021",
    brand: "toyota",
    modelName: "Premio F EX Package",
    year: 2021,
    grade: 4.5,
    mileage: "24,500 km",
    mileageKm: 24500,
    fuelType: "Petrol",
    engine: "1.5L Petrol CVT",
    driveType: "FWD",
    transmission: "CVT Automatic",
    packageName: "F EX Package",
    price: "BDT 39.0 Lakh",
    priceLakh: 39,
    exteriorColor: "Silver Metallic",
    interiorGrade: "A / 4.5",
    media: MEDIA.premio,
    status: "In Transit",
  },
  {
    id: "toy-prado-txl-2023",
    brand: "toyota",
    modelName: "Land Cruiser Prado TX-L 70th",
    year: 2023,
    grade: 5.0,
    mileage: "14,000 km",
    mileageKm: 14000,
    fuelType: "Petrol",
    engine: "2.7L Petrol 4WD",
    driveType: "4WD",
    transmission: "Automatic",
    packageName: "TX-L Package 70th / Matt Black",
    price: "BDT 1.85 Crore",
    priceLakh: 185,
    exteriorColor: "Attitude Black Mica",
    interiorGrade: "A / 5.0",
    media: MEDIA.prado,
    status: "Pre-Order",
  },
  {
    id: "toy-noah-sz-2023",
    brand: "toyota",
    modelName: "Noah / Voxy Hybrid S-Z",
    year: 2023,
    grade: 4.5,
    mileage: "15,200 km",
    mileageKm: 15200,
    fuelType: "Hybrid",
    engine: "1.8L Hybrid E-Four",
    driveType: "E-Four AWD",
    transmission: "e-CVT Automatic",
    packageName: "S-Z New Shape",
    price: "BDT 54.0 Lakh",
    priceLakh: 54,
    exteriorColor: "Sparkling Black Pearl",
    interiorGrade: "A / 4.5",
    media: MEDIA.noah,
    status: "Available",
  },
  {
    id: "hon-civic-2024",
    brand: "honda",
    modelName: "Civic Sedan Hybrid / RS",
    year: 2024,
    grade: 5.0,
    mileage: "8,500 km",
    mileageKm: 8500,
    fuelType: "Hybrid",
    engine: "2.0L e:HEV",
    driveType: "FWD",
    transmission: "e-CVT Automatic",
    packageName: "RS",
    price: "BDT 56.5 Lakh",
    priceLakh: 56.5,
    exteriorColor: "Sonic Gray Pearl / Crimson Red",
    interiorGrade: "A / 5.0",
    media: MEDIA.civic,
    status: "Available",
  },
  {
    id: "hon-vezel-2023",
    brand: "honda",
    modelName: "Vezel / HR-V e:HEV Z",
    year: 2023,
    grade: 4.5,
    mileage: "16,200 km",
    mileageKm: 16200,
    fuelType: "Hybrid",
    engine: "1.5L e:HEV",
    driveType: "FWD",
    transmission: "e-CVT Automatic",
    packageName: "Z",
    price: "BDT 42.0 Lakh",
    priceLakh: 42,
    exteriorColor: "Premium Sunlight White",
    interiorGrade: "A / 4.5",
    media: MEDIA.vezel,
    status: "Available",
  },
  {
    id: "hon-crv-2023",
    brand: "honda",
    modelName: "CR-V e:HEV AWD",
    year: 2023,
    grade: 5.0,
    mileage: "12,000 km",
    mileageKm: 12000,
    fuelType: "Hybrid",
    engine: "2.0L e:HEV Hybrid",
    driveType: "Real-Time AWD",
    transmission: "e-CVT Automatic",
    packageName: "e:HEV AWD",
    price: "BDT 78.0 Lakh",
    priceLakh: 78,
    exteriorColor: "Crystal Black Pearl",
    interiorGrade: "A / 5.0",
    media: MEDIA.crv,
    status: "In Transit",
  },
  {
    id: "hon-accord-2022",
    brand: "honda",
    modelName: "Accord e:HEV Touring",
    year: 2022,
    grade: 4.5,
    mileage: "21,500 km",
    mileageKm: 21500,
    fuelType: "Hybrid",
    engine: "2.0L Hybrid",
    driveType: "FWD",
    transmission: "e-CVT Automatic",
    packageName: "Touring",
    price: "BDT 68.5 Lakh",
    priceLakh: 68.5,
    exteriorColor: "Lunar Silver Metallic",
    interiorGrade: "A / 4.5",
    media: MEDIA.accord,
    status: "Available",
  },
  {
    id: "hon-zrv-2024",
    brand: "honda",
    modelName: "ZR-V e:HEV Sport",
    year: 2024,
    grade: 5.0,
    mileage: "5,400 km",
    mileageKm: 5400,
    fuelType: "Hybrid",
    engine: "2.0L e:HEV AWD",
    driveType: "Real-Time AWD",
    transmission: "e-CVT Automatic",
    packageName: "Sport",
    price: "BDT 64.0 Lakh",
    priceLakh: 64,
    exteriorColor: "Platinum White Pearl",
    interiorGrade: "A / 5.0",
    media: MEDIA.zrv,
    status: "Pre-Order",
  },
  {
    id: "allion-a15-gplus-facelift-2021",
    brand: "allion",
    modelName: "Allion A15 G-Plus Package (Facelift)",
    year: 2021,
    grade: 5.0,
    mileage: "18,400 km",
    mileageKm: 18400,
    fuelType: "Petrol",
    engine: "1.5L Dual VVT-i (1NZ-FE)",
    driveType: "FWD",
    transmission: "Super CVT-i",
    packageName: "A15 G-Plus Facelift",
    price: "BDT 41.5 Lakh",
    priceLakh: 41.5,
    exteriorColor: "Pearl White",
    interiorGrade: "A / 5.0",
    media: MEDIA.allionPearl,
    status: "Available",
  },
  {
    id: "allion-a15-g-special-2020",
    brand: "allion",
    modelName: "Allion A15 G-Package (Special Edition)",
    year: 2020,
    grade: 4.5,
    mileage: "24,000 km",
    mileageKm: 24000,
    fuelType: "Petrol",
    engine: "1.5L Petrol",
    driveType: "FWD",
    transmission: "Super CVT-i",
    packageName: "A15 G-Package Special Edition",
    price: "BDT 38.0 Lakh",
    priceLakh: 38,
    exteriorColor: "Wine Red Mica",
    interiorGrade: "A / 4.5",
    media: MEDIA.allionA15,
    status: "Available",
  },
  {
    id: "allion-a18-s-sport-2021",
    brand: "allion",
    modelName: "Allion A18 S-Package (Sport Edition)",
    year: 2021,
    grade: 5.0,
    mileage: "14,200 km",
    mileageKm: 14200,
    fuelType: "Petrol",
    engine: "1.8L Valvematic (2ZR-FAE)",
    driveType: "FWD",
    transmission: "7-Speed Sequential CVT",
    packageName: "A18 S-Package Sport Edition",
    price: "BDT 44.0 Lakh",
    priceLakh: 44,
    exteriorColor: "Black Mica",
    interiorGrade: "A / 5.0",
    media: MEDIA.allionPearl,
    status: "Pre-Order",
  },
  {
    id: "allion-a15-gplus-leather-2019",
    brand: "allion",
    modelName: "Allion A15 G-Plus Leather Edition",
    year: 2019,
    grade: 4.5,
    mileage: "31,500 km",
    mileageKm: 31500,
    fuelType: "Petrol",
    engine: "1.5L Petrol",
    driveType: "FWD",
    transmission: "Super CVT-i",
    packageName: "A15 G-Plus Leather Edition",
    price: "BDT 35.5 Lakh",
    priceLakh: 35.5,
    exteriorColor: "Silver Metallic",
    interiorGrade: "A / 4.5",
    media: MEDIA.allionPearl,
    status: "Available",
  },
  {
    id: "allion-a18-g-4wd-2020",
    brand: "allion",
    modelName: "Allion A18 G-Package 4WD",
    year: 2020,
    grade: 4.5,
    mileage: "27,000 km",
    mileageKm: 27000,
    fuelType: "Petrol",
    engine: "1.8L AWD",
    driveType: "4WD",
    transmission: "Super CVT-i",
    packageName: "A18 G-Package 4WD",
    price: "BDT 43.5 Lakh",
    priceLakh: 43.5,
    exteriorColor: "Dark Blue Mica",
    interiorGrade: "A / 4.5",
    media: MEDIA.allionA15,
    status: "In Transit",
  },
  {
    id: "allion-a20-g-leather-2020",
    brand: "allion",
    modelName: "Allion A20 G Leather Package (Top Trim)",
    year: 2020,
    grade: 5.0,
    mileage: "19,800 km",
    mileageKm: 19800,
    fuelType: "Petrol",
    engine: "2.0L Dynamic Force",
    driveType: "FWD",
    transmission: "Direct-Shift CVT",
    packageName: "A20 G Leather Package",
    price: "BDT 47.0 Lakh",
    priceLakh: 47,
    exteriorColor: "Pearl White",
    interiorGrade: "A / 5.0",
    media: MEDIA.allionPearl,
    status: "Pre-Order",
  },
  {
    id: "allion-a15-standard-2018",
    brand: "allion",
    modelName: "Allion A15 Standard Package",
    year: 2018,
    grade: 4.5,
    mileage: "38,000 km",
    mileageKm: 38000,
    fuelType: "Petrol",
    engine: "1.5L Petrol",
    driveType: "FWD",
    transmission: "Super CVT-i",
    packageName: "A15 Standard Package",
    price: "BDT 32.5 Lakh",
    priceLakh: 32.5,
    exteriorColor: "Attitude Black",
    interiorGrade: "A / 4.5",
    media: MEDIA.allionPearl,
    status: "Available",
  },
  {
    id: "allion-a15-gplus-tss-2021",
    brand: "allion",
    modelName: "Allion A15 G-Plus (Push Start / Safety Sense 2.0)",
    year: 2021,
    grade: 5.0,
    mileage: "11,500 km",
    mileageKm: 11500,
    fuelType: "Petrol",
    engine: "1.5L Petrol",
    driveType: "FWD",
    transmission: "Super CVT-i",
    packageName: "A15 G-Plus Safety Sense 2.0",
    price: "BDT 42.5 Lakh",
    priceLakh: 42.5,
    exteriorColor: "Bronze Mica Metallic",
    interiorGrade: "A / 5.0",
    media: MEDIA.allionA15,
    status: "Available",
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
  { id: "under-30", label: "Under 30 Lakh" },
  { id: "30-50", label: "30 – 50 Lakh" },
  { id: "50-80", label: "50 – 80 Lakh" },
  { id: "80-plus", label: "80 Lakh +" },
] as const;

function inPriceRange(priceLakh: number, range: string) {
  if (range === "under-30") return priceLakh < 30;
  if (range === "30-50") return priceLakh >= 30 && priceLakh < 50;
  if (range === "50-80") return priceLakh >= 50 && priceLakh < 80;
  if (range === "80-plus") return priceLakh >= 80;
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
  return `${brand} ${car.modelName} ${car.year}`;
}

export function statusLabel(status: VehicleStatus): string {
  if (status === "Available") return "Ready Stock";
  if (status === "Pre-Order") return "Pre-Order";
  return "In Transit";
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
