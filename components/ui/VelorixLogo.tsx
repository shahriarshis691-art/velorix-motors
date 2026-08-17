"use client";

type VelorixLogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { icon: 28, text: "text-sm", motors: "text-[8px]" },
  md: { icon: 40, text: "text-xl", motors: "text-[9px]" },
  lg: { icon: 72, text: "text-4xl", motors: "text-xs" },
};

export function VEmblem({
  className = "",
  size = 160,
}: {
  className?: string;
  size?: number;
}) {
  const id = `v-chrome-${size}`;

  return (
    <svg
      width={size}
      height={size * 0.92}
      viewBox="0 0 200 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-face`} x1="100" y1="8" x2="100" y2="176">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="28%" stopColor="#E2E8F0" />
          <stop offset="58%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id={`${id}-left`} x1="20" y1="10" x2="90" y2="170">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="45%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id={`${id}-right`} x1="180" y1="0" x2="110" y2="170">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="40%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id={`${id}-red`} x1="150" y1="0" x2="188" y2="80">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
        </filter>
        <linearGradient id={`${id}-spec`} x1="50" y1="16" x2="90" y2="140">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g filter={`url(#${id}-glow)`}>
        <path
          d="M18 14 L78 14 L100 162 L22 14 Z"
          fill={`url(#${id}-left)`}
        />
        <path
          d="M122 14 L182 14 L100 176 L122 14 Z"
          fill={`url(#${id}-right)`}
        />
        <path
          d="M78 14 L122 14 L100 162 L78 14 Z"
          fill={`url(#${id}-face)`}
        />
        <path
          d="M148 8 L188 8 L176 52 L136 52 Z"
          fill={`url(#${id}-red)`}
        />
        <path
          d="M28 16 H74 L98 150 28 16 Z"
          fill={`url(#${id}-spec)`}
          opacity="0.28"
        />
      </g>
    </svg>
  );
}

export function VelorixWordmark({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const s = sizeMap[size];

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span
        className={`font-display font-extrabold tracking-[0.18em] ${s.text}`}
      >
        <span className="metallic-text">VELORI</span>
        <span className="relative inline-block">
          <span className="metallic-text">X</span>
          <span
            aria-hidden
            className="absolute left-[46%] top-[6%] h-[88%] w-[2.5px] -translate-x-1/2 rotate-[-32deg] rounded-full bg-neutral-900"
          />
        </span>
      </span>
      <span
        className={`mt-1 flex items-center gap-2 font-display font-medium uppercase tracking-[0.42em] text-neutral-500 ${s.motors}`}
      >
        <span className="h-px w-4 bg-neutral-300" />
        Motors
        <span className="h-px w-4 bg-neutral-300" />
      </span>
    </div>
  );
}

export default function VelorixLogo({
  size = "sm",
  showWordmark = true,
  className = "",
}: VelorixLogoProps) {
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <VEmblem size={s.icon} />
      {showWordmark && <VelorixWordmark size={size} />}
    </div>
  );
}
