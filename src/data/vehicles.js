function unsplash(photoId, width = 1800) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`;
}

export const vehiclesData = [
  {
    id: "s-class-maybach",
    category: "VEHICLES",
    title: "Mercedes-Maybach S-Class",
    coverImage: unsplash("photo-1605559424843-9e4c228bf1c2"),
    galleryImages: [
      unsplash("photo-1605559424843-9e4c228bf1c2"),
      unsplash("photo-1617531653332-bd46c24f2068"),
      unsplash("photo-1549399542-7e3f8b79c341"),
      unsplash("photo-1590362891991-f776e747a588"),
      unsplash("photo-1503376780353-7e6692767b70"),
    ],
    tagline:
      "The quietest cabin in the atelier — a rolling private lounge finished in nappa and champagne silver.",
    specs: {
      power: "496 hp",
      acceleration: "4.8 s 0–100 km/h",
      topSpeed: "250 km/h",
      engine: "4.0L V8 biturbo · 9G-TRONIC",
    },
    highlights: [
      "Executive rear lounge with calfskin nappa",
      "Burmester 4D surround and starlight headliner",
      "Rear-axle steering with AIRMATIC",
      "MBUX Hyperscreen with rear-seat tablets",
    ],
    price: "From BDT 4.85 Crore",
    status: "Pre-Order",
  },
  {
    id: "amg-gt-63",
    category: "VEHICLES",
    title: "Mercedes-AMG GT 63 S E Performance",
    coverImage: unsplash("photo-1618843479313-40f8afb4b4d8"),
    galleryImages: [
      unsplash("photo-1618843479313-40f8afb4b4d8"),
      unsplash("photo-1553440569-bcc63803a83d"),
      unsplash("photo-1514316454349-750a7fd3da3a"),
      unsplash("photo-1549399542-7e3f8b79c341"),
      unsplash("photo-1503376780353-7e6692767b70"),
    ],
    tagline:
      "A grand tourer with a race-bred hybrid heart — silver, taut, and unmistakably AMG.",
    specs: {
      power: "831 hp",
      acceleration: "2.9 s 0–100 km/h",
      topSpeed: "316 km/h",
      engine: "4.0L V8 biturbo PHEV · 4MATIC+",
    },
    highlights: [
      "AMG Performance 4MATIC+ with Drift Mode",
      "Active aerodynamics and carbon-ceramic brakes",
      "AMG bucket seats in nappa and microfibre",
      "Track Pace telemetry",
    ],
    price: "From BDT 3.95 Crore",
    status: "Available",
  },
  {
    id: "g-63-amg",
    category: "VEHICLES",
    title: "Mercedes-AMG G 63",
    coverImage: unsplash("photo-1648413653877-ade5eefd2f1b"),
    galleryImages: [
      unsplash("photo-1648413653877-ade5eefd2f1b"),
      unsplash("photo-1623671228672-7f56ddea1e0b"),
      unsplash("photo-1747567994619-49766e1ce8e0"),
      unsplash("photo-1634636208509-63bcd2a1b13f"),
      unsplash("photo-1563720223185-11003d516935"),
    ],
    tagline:
      "An icon of presence — hand-finished, ladder-framed, and tuned by AMG for any terrain.",
    specs: {
      power: "577 hp",
      acceleration: "4.5 s 0–100 km/h",
      topSpeed: "220 km/h",
      engine: "4.0L V8 biturbo · 4WD",
    },
    highlights: [
      "Three differential locks and low-range",
      "AMG Ride Control adaptive dampers",
      "Designo Exclusive nappa interior",
      "Off-road modes with transparent bonnet camera",
    ],
    price: "From BDT 5.20 Crore",
    status: "Made to Order",
  },
  {
    id: "eqs-580",
    category: "VEHICLES",
    title: "Mercedes-Benz EQS 580",
    coverImage: unsplash("photo-1617814076367-b759c7d7e738"),
    galleryImages: [
      unsplash("photo-1617814076367-b759c7d7e738"),
      unsplash("photo-1609521263047-f8f205293f24"),
      unsplash("photo-1619767886558-efdc259cde1a"),
      unsplash("photo-1549399542-7e3f8b79c341"),
      unsplash("photo-1503376780353-7e6692767b70"),
    ],
    tagline:
      "The electric S-Class — a one-bow silhouette, a hyperscreen, and a whisper of range.",
    specs: {
      power: "536 hp",
      acceleration: "4.3 s 0–100 km/h",
      topSpeed: "210 km/h",
      engine: "Dual-motor electric AWD",
    },
    highlights: [
      "Up to 780 km WLTP range",
      "MBUX Hyperscreen fascia",
      "HEPA filtration and ENERGIZING comfort",
      "Rear-axle steering up to 10°",
    ],
    price: "From BDT 3.45 Crore",
    status: "Available",
  },
  {
    id: "gls-maybach",
    category: "VEHICLES",
    title: "Mercedes-Maybach GLS 600",
    coverImage: unsplash("photo-1614162692292-7ac56d7f7f1e"),
    galleryImages: [
      unsplash("photo-1614162692292-7ac56d7f7f1e"),
      unsplash("photo-1648413653819-7c0fd93e8e6a"),
      unsplash("photo-1680843274944-40433b411e2b"),
      unsplash("photo-1563720223185-11003d516935"),
      unsplash("photo-1549399542-7e3f8b79c341"),
    ],
    tagline:
      "Maybach calm, GLS stature — a first-class cabin above the city, finished in two-tone exclusive paint.",
    specs: {
      power: "550 hp",
      acceleration: "4.9 s 0–100 km/h",
      topSpeed: "250 km/h",
      engine: "4.0L V8 biturbo · 4MATIC",
    },
    highlights: [
      "Executive rear seats with calf-rests",
      "E-ACTIVE BODY CONTROL",
      "Champagne flutes and Burmester 3D",
      "Maybach two-tone paint, 23-inch wheels",
    ],
    price: "From BDT 4.60 Crore",
    status: "Pre-Order",
  },
];

export function getVehicleById(id) {
  return vehiclesData.find((vehicle) => vehicle.id === id);
}

export function getVehicleIds() {
  return vehiclesData.map((vehicle) => vehicle.id);
}

export default vehiclesData;
