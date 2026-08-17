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
      className={`relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#334155] shadow-[0_0_24px_rgba(148,163,184,0.28)] ${className}`}
      aria-hidden
    >
      <span className="absolute inset-[3px] rounded-full border border-black/20 bg-[#0b0f19]" />
      <span className="relative font-display text-lg font-bold tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
        {initials(slug)}
      </span>
    </span>
  );
}

function initials(slug: BrandSlug) {
  if (slug === "bmw") return "BMW";
  if (slug === "nissan") return "N";
  if (slug === "toyota") return "T";
  if (slug === "allion") return "A";
  return "H";
}
