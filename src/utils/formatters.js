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
