import VehiclesHeader from "@/components/vehicles/VehiclesHeader";

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <VehiclesHeader />
      {children}
    </div>
  );
}
