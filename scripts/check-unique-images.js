const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const DATA_FILES = [
  "src/data/toyotaVehicles.js",
  "src/data/hondaVehicles.js",
  "src/data/bmwVehicles.js",
  "src/data/nissanVehicles.js",
  "src/data/hyundaiVehicles.js",
];

function extractVehicles(fileText) {
  const vehicles = [];
  const blocks = fileText.split(/^\s*\{\s*$/m).slice(1);

  for (const block of blocks) {
    const id = block.match(/\bid:\s*"([^"]+)"/);
    const cover = block.match(/\bcoverImage:\s*"([^"]+)"/);
    if (!id || !cover) continue;

    const galleryMatch = block.match(/galleryImages:\s*\[([\s\S]*?)\]/);
    const gallery = galleryMatch
      ? [...galleryMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1])
      : [];

    vehicles.push({
      id: id[1],
      coverImage: cover[1],
      galleryImages: gallery,
    });
  }

  return vehicles;
}

function publicPath(url) {
  if (!url.startsWith("/images/")) return null;
  return path.join(ROOT, "public", url.replace(/^\//, "").split("/").join(path.sep));
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

const vehicles = DATA_FILES.flatMap((relative) => {
  const filePath = path.join(ROOT, relative);
  return extractVehicles(fs.readFileSync(filePath, "utf8"));
});

const covers = vehicles.map((vehicle) => vehicle.coverImage);
const coverDuplicates = [
  ...new Set(covers.filter((item, index) => covers.indexOf(item) !== index)),
];

const ownerByUrl = new Map();
const sharedUrls = [];
const missing = [];
const hashOwners = new Map();
const identicalFiles = [];

for (const vehicle of vehicles) {
  const urls = [vehicle.coverImage, ...vehicle.galleryImages];
  const seen = new Set();

  for (const url of urls) {
    if (seen.has(url)) {
      sharedUrls.push(`${url} repeated on ${vehicle.id}`);
    }
    seen.add(url);

    const previous = ownerByUrl.get(url);
    if (previous && previous !== vehicle.id) {
      sharedUrls.push(`${url} shared by ${previous} and ${vehicle.id}`);
    } else if (!previous) {
      ownerByUrl.set(url, vehicle.id);
    }

    const diskPath = publicPath(url);
    if (!diskPath) continue;
    if (!fs.existsSync(diskPath)) {
      missing.push(`${vehicle.id}: ${url}`);
      continue;
    }

    const hash = fileHash(diskPath);
    const hashOwner = hashOwners.get(hash);
    if (hashOwner && hashOwner.url !== url) {
      identicalFiles.push(
        `${hashOwner.url} (${hashOwner.id}) identical to ${url} (${vehicle.id})`,
      );
    } else if (!hashOwner) {
      hashOwners.set(hash, { url, id: vehicle.id });
    }
  }
}

if (coverDuplicates.length > 0) {
  console.warn("Duplicate images found:", coverDuplicates);
}
if (sharedUrls.length > 0) {
  console.warn("Shared image URLs:", [...new Set(sharedUrls)]);
}
if (identicalFiles.length > 0) {
  console.warn("Identical image files:", [...new Set(identicalFiles)]);
}
if (missing.length > 0) {
  console.warn("Missing image files:", missing);
}

const ok =
  coverDuplicates.length === 0 &&
  sharedUrls.length === 0 &&
  identicalFiles.length === 0 &&
  missing.length === 0;

if (ok) {
  console.log(
    `OK: ${vehicles.length} vehicles, ${ownerByUrl.size} unique image URLs, zero duplicates.`,
  );
  process.exit(0);
}

console.error("Image uniqueness check failed.");
process.exit(1);
