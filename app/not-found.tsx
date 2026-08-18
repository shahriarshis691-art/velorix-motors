import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6 text-center">
      <p className="font-display text-[11px] tracking-[0.35em] text-neutral-500">
        ATELIER
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-[0.16em] text-neutral-900">
        <span className="metallic-text">PAGE NOT FOUND</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-neutral-600">
        That page is not in the current VELORIX inventory.
      </p>
      <Link
        href="/"
        className="mt-8 min-h-11 rounded-full border border-neutral-300 px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.18em] text-neutral-900 hover:bg-neutral-100"
      >
        Back to Home
      </Link>
    </main>
  );
}
