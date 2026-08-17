import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrandListingPage from "@/components/models/BrandListingPage";
import { BRAND_SLUGS, getBrand, isBrandSlug } from "@/lib/brands";
import { getCarsByBrand } from "@/lib/cars";

type PageProps = {
  params: Promise<{ brand: string }>;
};

export function generateStaticParams() {
  return BRAND_SLUGS.map((brand) => ({ brand }));
}

export const dynamicParams = false;

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

export default async function BrandModelsPage({ params }: PageProps) {
  const { brand } = await params;
  if (!isBrandSlug(brand)) notFound();

  const meta = getBrand(brand);
  if (!meta) notFound();

  return <BrandListingPage brand={meta} cars={getCarsByBrand(brand)} />;
}
