import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#0B1121",
        },
        secondary: {
          DEFAULT: "#1E293B",
          foreground: "#F8FAFC",
        },
        techBlue: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF6B2C",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#F1F5F9",
        },
        navy: {
          DEFAULT: "#0F172A",
          950: "#060A13",
          900: "#0B1121",
          800: "#151F32",
        },
      },
      boxShadow: {
        glow: "0 0 48px rgba(37, 99, 235, 0.25)",
        "glow-orange": "0 0 42px rgba(255, 107, 44, 0.25)",
        "glass": "0 24px 80px rgba(6, 10, 19, 0.6)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(248, 250, 252, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 250, 252, 0.04) 1px, transparent 1px)",
        "panel-grid":
          "linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-50%, -50%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
