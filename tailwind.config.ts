import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          950: "#071527",
          900: "#0B1F3A",
          800: "#132B4F",
          700: "#1E3D6B",
        },
        brand: {
          blue: "#155EEF",
          steel: "#2F6FED",
          gold: "#B77A32",
          "gold-light": "#D49B55",
          brick: "#A85D3A",
          concrete: "#D8DDE5",
          "green-natural": "#5E765A",
          "green-success": "#16855B",
          "red-error": "#B42318",
        },
        surface: {
          mist: "#EAF2FF",
          ice: "#F7FAFF",
          subtle: "#F1F5F9",
          card: "#FFFFFF",
        },
        muted: {
          slate: "#334155",
          DEFAULT: "#64748B",
          light: "#94A3B8",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        heading: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        display: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        serif: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        manrope: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        dm: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        mono: ["var(--font-manrope)", "Manrope", "'SF Mono'", "Consolas", "Monaco", "monospace"],
        ibm: ["var(--font-manrope)", "Manrope", "'SF Mono'", "Consolas", "Monaco", "monospace"],
        // Legacy fallbacks mapped cleanly
        migra: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        reckless: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        poppins: ["var(--font-manrope)", "Manrope", "sans-serif"],
        baskerville: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        cormorant: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        playfair: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        cinzel: ["var(--font-dm-serif)", "'DM Serif Display'", "Georgia", "serif"],
        jakarta: ["var(--font-manrope)", "Manrope", "sans-serif"],
        inter: ["var(--font-manrope)", "Manrope", "sans-serif"],
        script: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(11, 31, 58, 0.05), 0 1px 2px rgba(11, 31, 58, 0.03)",
        card: "0 4px 20px -2px rgba(11, 31, 58, 0.06), 0 2px 6px -1px rgba(11, 31, 58, 0.03)",
        elevated: "0 12px 32px -4px rgba(11, 31, 58, 0.1), 0 4px 12px -2px rgba(11, 31, 58, 0.05)",
        blueprint: "0 0 0 1px rgba(21, 94, 239, 0.15), 0 8px 24px -4px rgba(21, 94, 239, 0.08)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(11, 31, 58, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 31, 58, 0.04) 1px, transparent 1px)",
        "grid-pattern-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
