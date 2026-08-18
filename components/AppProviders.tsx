"use client";

import { CompareProvider } from "@/components/compare/CompareProvider";
import CompareBar from "@/components/compare/CompareBar";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <CompareProvider>
        {children}
        <CompareBar />
      </CompareProvider>
    </LocaleProvider>
  );
}
