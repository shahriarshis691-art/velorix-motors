import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vx: {
          black: "#050505",
          slate: "#0B0F19",
          red: "#EF4444",
          cyan: "#22D3EE",
          ice: "#67E8F9",
          silver: "#94A3B8",
          metal: "#E2E8F0",
          ink: "#0F172A",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.45em",
        brand: "0.28em",
      },
      boxShadow: {
        "red-glow": "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
        "red-glow-lg": "0 14px 40px -6px rgba(239, 68, 68, 0.55)",
        "cyan-pillar": "0 0 40px 8px rgba(34, 211, 238, 0.35)",
      },
      backgroundImage: {
        metal:
          "linear-gradient(180deg, #E2E8F0 0%, #94A3B8 50%, #475569 100%)",
        "metal-hover":
          "linear-gradient(180deg, #F8FAFC 0%, #CBD5E1 48%, #64748B 100%)",
        showroom:
          "linear-gradient(180deg, #050505 0%, #0B0F19 48%, #050505 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
