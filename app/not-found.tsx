import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6 text-center">
      <p className="font-display text-[11px] tracking-[0.35em] text-vx-red">
        ATELIER
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-[0.16em]">
        <span className="metallic-text">PAGE NOT FOUND</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-vx-silver/70">
        That model gallery is not in the current VELORIX inventory.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-white/15 px-5 py-2.5 font-display text-[11px] uppercase tracking-[0.18em] text-white hover:border-cyan-300/40"
      >
        Back to Home
      </Link>
    </main>
  );
}
