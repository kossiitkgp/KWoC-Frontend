/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.7)",
          "0 0px 65px rgba(255, 255,255, 0.8)"
        ]
      }
    },
  },
  plugins: [],
}