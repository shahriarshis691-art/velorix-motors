"use client";

import Image from "next/image";

type VehicleGalleryProps = {
  images: string[];
  title: string;
};

export default function VehicleGallery({ images, title }: VehicleGalleryProps) {
  const slides = images.filter(Boolean);
  if (slides.length === 0) return null;

  return (
    <section aria-label={`${title} gallery`} className="mt-10 md:mt-14">
      <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
        Gallery
      </p>
      <h3 className="mt-2 font-serif text-2xl font-medium leading-tight text-[#111111] md:text-3xl">
        Detail
      </h3>

      <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-3 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
        {slides.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-[16/10] w-[82%] shrink-0 snap-center overflow-hidden rounded-sm bg-neutral-100 md:w-full"
          >
            <Image
              src={src}
              alt={`${title} detail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 82vw, 360px"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
