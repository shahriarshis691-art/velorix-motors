function collectImageUrls(vehicle) {
  const urls = [];
  if (vehicle.coverImage) urls.push(vehicle.coverImage);
  if (Array.isArray(vehicle.galleryImages)) {
    urls.push(...vehicle.galleryImages.filter(Boolean));
  }
  return urls;
}

export function findDuplicateImages(vehicles) {
  const covers = vehicles.map((vehicle) => vehicle.coverImage).filter(Boolean);
  const coverDuplicates = covers.filter(
    (item, index) => covers.indexOf(item) !== index,
  );

  const ownerByUrl = new Map();
  const shared = [];

  for (const vehicle of vehicles) {
    const seenInVehicle = new Set();
    for (const url of collectImageUrls(vehicle)) {
      if (seenInVehicle.has(url)) {
        shared.push({ url, models: [vehicle.id, vehicle.id] });
        continue;
      }
      seenInVehicle.add(url);

      const existing = ownerByUrl.get(url);
      if (existing && existing !== vehicle.id) {
        shared.push({ url, models: [existing, vehicle.id] });
      } else if (!existing) {
        ownerByUrl.set(url, vehicle.id);
      }
    }
  }

  return {
    coverDuplicates: [...new Set(coverDuplicates)],
    shared,
  };
}

export function assertUniqueBrandImages(vehicles) {
  const allImages = vehicles.map((v) => v.coverImage);
  const duplicates = allImages.filter(
    (item, index) => allImages.indexOf(item) !== index,
  );
  if (duplicates.length > 0) {
    console.warn("Duplicate images found:", [...new Set(duplicates)]);
  }

  const { shared } = findDuplicateImages(vehicles);
  if (shared.length > 0) {
    console.warn(
      "Duplicate image URLs across vehicles:",
      shared.map((entry) => `${entry.url} (${entry.models.join(" & ")})`),
    );
  }
}
