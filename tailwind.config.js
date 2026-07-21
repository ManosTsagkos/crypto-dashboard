/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0f0f1e",
          800: "#1a1a2e",
          700: "#2d2d44",
          600: "#3d3d5c",
        },
        neon: {
          blue: "#00d4ff",
          purple: "#b946f5",
          orange: "#ff6b35",
          green: "#00ff88",
          pink: "#ff006e",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-purple": "0 0 20px rgba(185, 70, 245, 0.3)",
        "glow-pink": "0 0 20px rgba(255, 0, 110, 0.3)",
      },
    },
  },
  plugins: [],
}