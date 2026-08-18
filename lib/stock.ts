export type StockStatus = "Available" | "In Transit" | "Pre-Order";

const STOCK_BY_ID: Record<string, StockStatus> = {
  "toyota-vitz-f-safety": "Available",
  "toyota-aqua-hybrid": "Available",
  "toyota-corolla-axio-hybrid": "Available",
  "toyota-corolla-fielder-hybrid": "Available",
  "toyota-prius-hybrid-50": "Available",
  "toyota-sienta-hybrid": "Available",
  "toyota-premio-f-ex": "Available",
  "toyota-allion-a15": "In Transit",
  "toyota-raize-z-turbo": "Available",
  "toyota-c-hr-hybrid": "In Transit",
  "toyota-yaris-cross-hybrid": "In Transit",
  "toyota-noah-si-hybrid": "Available",
  "toyota-voxy-zs-kirameki": "In Transit",
  "toyota-esquire-gi-hybrid": "Pre-Order",
  "toyota-corolla-cross-hybrid": "Pre-Order",
  "toyota-harrier-g-leather": "Pre-Order",
  "honda-grace-hybrid": "Available",
  "honda-vezel-hybrid": "Available",
  "honda-civic": "Available",
  "honda-fit-hybrid": "Available",
  "honda-city": "In Transit",
  "honda-freed-hybrid": "Available",
  "honda-shuttle-hybrid": "In Transit",
  "honda-insight-hybrid": "Pre-Order",
  "honda-cr-v": "Available",
  "honda-accord-hybrid": "In Transit",
  "honda-civic-type-r": "Pre-Order",
  "bmw-3-series-318i": "Available",
  "bmw-x1-sdrive": "In Transit",
  "bmw-5-series-520i": "Available",
  "bmw-x3-xdrive": "Available",
  "bmw-x5-xdrive": "In Transit",
  "bmw-2-series-gran-coupe": "Available",
  "bmw-7-series-730li": "Pre-Order",
  "bmw-x6-xdrive": "In Transit",
  "bmw-x7-xdrive": "Pre-Order",
  "nissan-versa-sedan": "Available",
  "nissan-z-nismo": "Pre-Order",
  "nissan-gt-r-nismo": "Pre-Order",
  "nissan-patrol-nismo": "In Transit",
  "hyundai-creta": "Available",
  "hyundai-tucson": "Available",
  "hyundai-alcazar": "In Transit",
  "hyundai-santa-fe": "Pre-Order",
};

export function getStockStatus(vehicle: {
  id: string;
  status?: string;
}): StockStatus {
  if (
    vehicle.status === "Available" ||
    vehicle.status === "In Transit" ||
    vehicle.status === "Pre-Order"
  ) {
    return vehicle.status;
  }
  if (vehicle.status === "Made to Order") return "Pre-Order";
  return STOCK_BY_ID[vehicle.id] ?? "Available";
}
