import BrandEditorialHeader from "@/components/vehicles/BrandEditorialHeader";

export default function BmwBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <BrandEditorialHeader brand="BMW" href="/brands/bmw" />
      {children}
    </div>
  );
}
