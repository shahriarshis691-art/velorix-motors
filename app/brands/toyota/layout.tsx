import BrandEditorialHeader from "@/components/vehicles/BrandEditorialHeader";

export default function ToyotaBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <BrandEditorialHeader brand="Toyota" href="/brands/toyota" />
      {children}
    </div>
  );
}
