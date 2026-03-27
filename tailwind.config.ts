import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        burgundy: "#6B1F2A",
        sand: "#E8DCCB",
        cream: "#F7F3EE",
        olive: "#7A8062",
        graphite: "#2B2A28",
        gold: "#C6A96A",
        blush: "#D7B6A5"
      },
      fontFamily: {
        display: ['"Palatino Linotype"', '"Book Antiqua"', "Georgia", "serif"],
        sans: ['"Segoe UI"', '"Helvetica Neue"', "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(43, 42, 40, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(198, 169, 106, 0.28), transparent 32%), radial-gradient(circle at bottom right, rgba(107, 31, 42, 0.16), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
