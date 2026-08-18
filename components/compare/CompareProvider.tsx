"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "velorix-compare";
const MAX_COMPARE = 3;

type CompareContextValue = {
  ids: string[];
  has: (id: string) => boolean;
  toggle: (id: string) => void;
  clear: () => void;
  max: number;
};

const CompareContext = createContext<CompareContextValue | null>(null);

function readIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(Boolean).slice(0, MAX_COMPARE) : [];
  } catch {
    return [];
  }
}

export function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(readIds());
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids]);

  const toggle = useCallback((id: string) => {
    setIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= MAX_COMPARE) return current;
      return [...current, id];
    });
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const value = useMemo(
    () => ({
      ids,
      has: (id: string) => ids.includes(id),
      toggle,
      clear,
      max: MAX_COMPARE,
    }),
    [ids, toggle, clear],
  );

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within CompareProvider");
  }
  return context;
}
