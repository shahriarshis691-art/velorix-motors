import type { BrandSlug } from "@/lib/brands";

export default function BrandEmblem({
  slug,
  className = "",
}: {
  slug: BrandSlug;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm ${className}`}
      aria-hidden
    >
      <span className="relative font-display text-lg font-bold tracking-[0.08em] text-neutral-900">
        {initials(slug)}
      </span>
    </span>
  );
}

function initials(slug: BrandSlug) {
  if (slug === "bmw") return "BMW";
  if (slug === "nissan") return "N";
  if (slug === "toyota") return "T";
  if (slug === "hyundai") return "HY";
  if (slug === "honda") return "H";
  return "H";
}
