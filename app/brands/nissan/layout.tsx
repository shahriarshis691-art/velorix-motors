import BrandEditorialHeader from "@/components/vehicles/BrandEditorialHeader";

export default function NissanBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <BrandEditorialHeader brand="Nissan" href="/brands/nissan" />
      {children}
    </div>
  );
}
