"use client";

import { useMemo, useState } from "react";
import {
  formatTaka,
  monthlyEmi,
  parsePriceToNumber,
} from "@/src/utils/formatters";

const TENURES = [12, 24, 36, 48, 60] as const;
const RATES = [11, 13, 15] as const;

type EmiCalculatorProps = {
  price: string;
};

export default function EmiCalculator({ price }: EmiCalculatorProps) {
  const sticker = parsePriceToNumber(price);
  const [downPercent, setDownPercent] = useState(30);
  const [months, setMonths] = useState<(typeof TENURES)[number]>(36);
  const [rate, setRate] = useState<(typeof RATES)[number]>(13);

  const downPayment = useMemo(
    () => Math.round((sticker * downPercent) / 100),
    [sticker, downPercent],
  );
  const financed = Math.max(sticker - downPayment, 0);
  const emi = monthlyEmi(financed, rate, months);

  if (sticker <= 0) return null;

  return (
    <section className="mt-10 sm:mt-14">
      <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
        Finance
      </p>
      <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111827] sm:text-3xl">
        Monthly estimate
      </h3>
      <p className="mt-2 text-sm text-neutral-500">
        Indicative bank EMI in BDT. Final rate depends on your lender.
      </p>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="mb-1.5 flex justify-between text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Down payment</span>
            <span>
              {downPercent}% · {formatTaka(downPayment)}
            </span>
          </span>
          <input
            type="range"
            min={10}
            max={70}
            step={5}
            value={downPercent}
            onChange={(event) => setDownPercent(Number(event.target.value))}
            className="w-full accent-[#111827]"
          />
        </label>

        <div>
          <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Tenure
          </span>
          <div className="flex flex-wrap gap-2">
            {TENURES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMonths(item)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition ${
                  months === item
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {item / 12} yr
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Interest
          </span>
          <div className="flex flex-wrap gap-2">
            {RATES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRate(item)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition ${
                  rate === item
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {item}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200">
        <div className="bg-white px-4 py-4 sm:px-5 sm:py-5">
          <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
            Amount financed
          </dt>
          <dd className="mt-1.5 font-serif text-base font-medium text-[#111827] sm:text-lg">
            {formatTaka(financed)}
          </dd>
        </div>
        <div className="bg-white px-4 py-4 sm:px-5 sm:py-5">
          <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
            Monthly EMI
          </dt>
          <dd className="mt-1.5 font-serif text-base font-medium text-[#111827] sm:text-lg">
            {formatTaka(emi)}
          </dd>
        </div>
      </dl>
    </section>
  );
}
