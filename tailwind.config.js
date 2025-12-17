/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",
          "secondary": "#22c55e",
          "accent": "#f59e0b",
          "base-100": "#ffffff",
          "base-content": "#111827",
        },
        dark: {
          "primary": "#60a5fa",
          "secondary": "#4ade80",
          "accent": "#fbbf24",
          "base-100": "#0f172a",
          "base-content": "#e5e7eb",
        },
      },
    ],
  },
}
