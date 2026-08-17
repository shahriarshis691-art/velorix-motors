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
          black: "#0f172a",
          slate: "#111111",
          red: "#0070f3",
          cyan: "#0070f3",
          ice: "#e8eef6",
          silver: "#64748b",
          metal: "#334155",
          ink: "#0f172a",
          cream: "#faf9f6",
          ivory: "#fcfcfc",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        mega: "0.45em",
        brand: "0.28em",
      },
      boxShadow: {
        "red-glow": "0 10px 25px -8px rgba(15, 23, 42, 0.18)",
        "red-glow-lg": "0 14px 40px -8px rgba(15, 23, 42, 0.22)",
        "cyan-pillar": "0 8px 30px -10px rgba(0, 112, 243, 0.25)",
      },
      backgroundImage: {
        metal:
          "linear-gradient(180deg, #1a1a1a 0%, #111111 50%, #0a0a0a 100%)",
        "metal-hover":
          "linear-gradient(180deg, #2a2a2a 0%, #171717 48%, #0a0a0a 100%)",
        showroom:
          "linear-gradient(180deg, #ffffff 0%, #faf9f6 48%, #fcfcfc 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
