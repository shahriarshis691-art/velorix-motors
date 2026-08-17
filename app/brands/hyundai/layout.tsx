import BrandEditorialHeader from "@/components/vehicles/BrandEditorialHeader";

export default function HyundaiBrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <BrandEditorialHeader brand="Hyundai" href="/brands/hyundai" />
      {children}
    </div>
  );
}
