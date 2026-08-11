import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FFFFFF",
          dark: "#0A0B0D",
        },
        surface: {
          DEFAULT: "#F6F7F9",
          dark: "#131418",
        },
        panel: {
          DEFAULT: "#FFFFFF",
          dark: "#111318",
        },
        line: {
          DEFAULT: "rgba(11,14,20,0.09)",
          dark: "rgba(255,255,255,0.09)",
        },
        ink: {
          DEFAULT: "#0B0E14",
          dark: "#F4F5F7",
        },
        muted: {
          DEFAULT: "#5B6472",
          dark: "#9AA1AC",
        },
        accent: {
          DEFAULT: "#2955EC",
          dim: "#EDF1FE",
          "dim-dark": "rgba(41,85,236,0.16)",
        },
        deep: {
          DEFAULT: "#0B0E14",
          dark: "#000000",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        container: "72rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(11,14,20,0.04)",
        card: "0 1px 2px rgba(11,14,20,0.03), 0 12px 32px -18px rgba(11,14,20,0.16)",
        "card-dark": "0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -18px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
