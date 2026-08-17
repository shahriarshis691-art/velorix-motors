"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type VehicleGalleryProps = {
  images: string[];
  title: string;
};

export default function VehicleGallery({ images, title }: VehicleGalleryProps) {
  const slides = images.length > 0 ? images : [];
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (direction: -1 | 1) => {
      if (slides.length === 0) return;
      setIndex((current) => (current + direction + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (slides.length === 0) return null;

  const current = slides[index];

  return (
    <section aria-label={`${title} gallery`} className="mt-16 sm:mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neutral-400">
        Gallery
      </p>
      <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
        Interior & exterior
      </h3>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              if (info.offset.x > 60) go(-1);
            }}
          >
            <Image
              src={current}
              alt={`${title} — view ${index + 1} of ${slides.length}`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="pointer-events-none object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition hover:bg-white sm:left-4"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/90 text-neutral-900 shadow-sm backdrop-blur-sm transition hover:bg-white sm:right-4"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
            <p className="absolute bottom-3 right-3 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-700 backdrop-blur-sm">
              {index + 1} / {slides.length}
            </p>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:gap-3">
          {slides.map((src, i) => {
            const selected = i === index;
            return (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-pressed={selected}
                className={`relative aspect-[16/9] overflow-hidden bg-neutral-100 transition ${
                  selected
                    ? "ring-1 ring-neutral-900 ring-offset-2 ring-offset-white"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
