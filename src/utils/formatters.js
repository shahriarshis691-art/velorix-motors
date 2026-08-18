export const formatBDT = (amount) => {
  if (
    typeof amount === "string" &&
    (amount.includes("৳") ||
      amount.includes("BDT") ||
      amount.includes("Lakh") ||
      amount.includes("Crore"))
  ) {
    return amount;
  }
  const num =
    typeof amount === "number"
      ? amount
      : Number(String(amount).replace(/[^0-9.-]+/g, ""));
  if (isNaN(num)) return amount;
  return `৳ ${num.toLocaleString("en-IN")}`;
};

export function parsePriceToNumber(price) {
  const text = String(price ?? "");
  const crore = text.match(/([\d.]+)\s*Crore/i);
  if (crore) return Math.round(Number(crore[1]) * 1_00_00_000);
  const lakh = text.match(/([\d.]+)\s*Lakh/i);
  if (lakh) return Math.round(Number(lakh[1]) * 1_00_000);
  const digits = text.replace(/[^0-9]/g, "");
  const value = Number(digits);
  return Number.isFinite(value) ? value : 0;
}

export function formatTaka(amount) {
  const value = Math.round(Number(amount) || 0);
  return `৳ ${value.toLocaleString("en-IN")}`;
}

export function monthlyEmi(principal, annualPercent, months) {
  if (principal <= 0 || months <= 0) return 0;
  const rate = annualPercent / 12 / 100;
  if (rate === 0) return principal / months;
  const factor = (1 + rate) ** months;
  return (principal * rate * factor) / (factor - 1);
}
