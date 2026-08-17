"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Pause, Play, Search, X } from "lucide-react";
import type { CatalogCar } from "@/components/catalog";

type CatalogViewerProps = {
  car: CatalogCar | null;
  onClose: () => void;
};

export default function CatalogViewer({ car, onClose }: CatalogViewerProps) {
  const [playing, setPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 40 });
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  useEffect(() => {
    if (!car) return;
    setPlaying(true);
    setRotation(0);
    setZoom(1);
    setOrigin({ x: 50, y: 40 });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [car, onClose]);

  const title =
    car?.mode === "zoom"
      ? "INSPECT"
      : car?.mode === "rotate"
        ? "360° VIEW"
        : car?.mode === "play"
          ? "CINEMA"
          : car?.mode === "view"
            ? "STUDIO VIEW"
            : "TRAVERSE";

  return (
    <AnimatePresence>
      {car && (
        <motion.div
          key={car.id}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close viewer"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${car.name} ${title}`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="relative z-10 flex h-[min(88vh,920px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]"
          >
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div>
                <p className="font-display text-[10px] tracking-[0.35em] text-vx-silver/70">
                  {title}
                </p>
                <p className="metallic-text font-display text-sm font-bold tracking-[0.22em]">
                  {car.name}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1.5 text-vx-silver transition hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </header>

            <div className="relative flex-1 overflow-hidden bg-white">
              {car.mode === "zoom" && (
                <ZoomStage
                  src={car.image}
                  alt={car.name}
                  zoom={zoom}
                  origin={origin}
                  onZoom={setZoom}
                  onOrigin={setOrigin}
                />
              )}
              {car.mode === "rotate" && (
                <RotateStage
                  src={car.image}
                  alt={car.name}
                  rotation={rotation}
                  drag={drag}
                  onRotation={setRotation}
                />
              )}
              {car.mode === "play" && (
                <PlayStage src={car.image} alt={car.name} playing={playing} />
              )}
              {car.mode === "view" && (
                <ViewStage src={car.image} alt={car.name} />
              )}
              {car.mode === "arrow" && (
                <ArrowStage src={car.image} alt={car.name} />
              )}
            </div>

            <footer className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-vx-silver/70">
                {car.mode === "zoom" && "Click to magnify · move to inspect"}
                {car.mode === "rotate" && "Drag horizontally to orbit"}
                {car.mode === "play" && "Cinematic front fascia study"}
                {car.mode === "view" && "Move to reveal · atelier spotlight"}
                {car.mode === "arrow" && "Use arrows to traverse the fascia"}
              </p>
              {car.mode === "zoom" && (
                <span className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-vx-silver">
                  <Search size={12} /> {Math.round(zoom * 100)}%
                </span>
              )}
              {car.mode === "play" && (
                <button
                  type="button"
                  onClick={() => setPlaying((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white"
                >
                  {playing ? <Pause size={12} /> : <Play size={12} />}
                  {playing ? "Pause" : "Play"}
                </button>
              )}
              {car.mode === "view" && (
                <span className="flex items-center gap-2 text-[11px] tracking-[0.16em] text-vx-silver">
                  <Eye size={12} /> Gaze
                </span>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ZoomStage({
  src,
  alt,
  zoom,
  origin,
  onZoom,
  onOrigin,
}: {
  src: string;
  alt: string;
  zoom: number;
  origin: { x: number; y: number };
  onZoom: (z: number) => void;
  onOrigin: (o: { x: number; y: number }) => void;
}) {
  return (
    <button
      type="button"
      className="relative h-full w-full cursor-zoom-in overflow-hidden"
      onClick={() => onZoom(zoom >= 2.2 ? 1 : 2.4)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        onOrigin({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-200 ease-out"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
      />
    </button>
  );
}

function RotateStage({
  src,
  alt,
  rotation,
  drag,
  onRotation,
}: {
  src: string;
  alt: string;
  rotation: number;
  drag: MutableRefObject<{ x: number; active: boolean }>;
  onRotation: (n: number) => void;
}) {
  return (
    <div
      className="flex h-full w-full cursor-grab items-center justify-center active:cursor-grabbing"
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, active: true };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerUp={() => {
        drag.current.active = false;
      }}
      onPointerMove={(e) => {
        if (!drag.current.active) return;
        const delta = e.clientX - drag.current.x;
        drag.current.x = e.clientX;
        onRotation(rotation + delta * 0.45);
      }}
    >
      <div className="relative h-[85%] w-[70%] max-w-xl" style={{ perspective: 1200 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="h-full w-full select-none object-contain"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </div>
  );
}

function PlayStage({
  src,
  alt,
  playing,
}: {
  src: string;
  alt: string;
  playing: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover object-top ${playing ? "catalog-kenburns" : ""}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
    </div>
  );
}

function ViewStage({ src, alt }: { src: string; alt: string }) {
  const [spot, setSpot] = useState({ x: 50, y: 38 });

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-white"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpot({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top"
      />
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-150"
        style={{
          background: `radial-gradient(circle 32% at ${spot.x}% ${spot.y}%, transparent 0%, rgba(0,0,0,0.18) 42%, rgba(0,0,0,0.62) 100%)`,
        }}
      />
    </div>
  );
}

function ArrowStage({ src, alt }: { src: string; alt: string }) {
  const [pan, setPan] = useState(0);

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full select-none object-cover object-top transition-transform duration-500 ease-out"
        style={{ transform: `scale(1.22) translateX(${pan * 9}%)` }}
      />
      <button
        type="button"
        aria-label="Pan left"
        onClick={() => setPan((v) => Math.max(-1, v - 1))}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Pan right"
        onClick={() => setPan((v) => Math.min(1, v + 1))}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

