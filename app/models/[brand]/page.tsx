import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BRAND_SLUGS, getBrand, isBrandSlug } from "@/lib/brands";

type PageProps = {
  params: Promise<{ brand: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return BRAND_SLUGS.map((brand) => ({ brand }));
}

export const dynamicParams = false;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand } = await params;
  const meta = getBrand(brand);
  if (!meta) {
    return { title: "Models — VELORIX MOTORS" };
  }
  return {
    title: `${meta.name} Models — VELORIX MOTORS`,
    description: meta.tagline,
  };
}

export default async function BrandModelsPage({ params, searchParams }: PageProps) {
  const { brand } = await params;
  if (!isBrandSlug(brand) || brand === "allion") notFound();
  if (!getBrand(brand)) notFound();

  const raw = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(raw)) {
    const next = Array.isArray(value) ? value[0] : value;
    if (next) query.set(key, next);
  }
  const qs = query.toString();
  redirect(qs ? `/brands/${brand}?${qs}` : `/brands/${brand}`);
}
