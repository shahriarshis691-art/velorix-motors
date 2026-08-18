"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCompare } from "@/components/compare/CompareProvider";

export default function CompareBar() {
  const { ids, clear } = useCompare();
  const pathname = usePathname();

  if (ids.length === 0) return null;

  const isDetail =
    pathname.startsWith("/vehicles/") && pathname !== "/vehicles";
  const href = `/compare?ids=${ids.join(",")}`;

  return (
    <div
      className={`fixed inset-x-0 z-50 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur-md ${
        isDetail
          ? "bottom-[4.75rem] md:bottom-0"
          : "bottom-0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          {ids.length} of 3 selected
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={clear}
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 transition hover:text-neutral-900"
          >
            Clear
          </button>
          {ids.length >= 2 ? (
            <Link
              href={href}
              className="inline-flex min-h-11 items-center bg-[#111827] px-5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Compare
            </Link>
          ) : (
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
              Add one more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
