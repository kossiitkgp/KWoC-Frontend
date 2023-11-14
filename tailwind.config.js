/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    clipPath: {
      polygonDesign:
        "polygon(50% 0%, 80% 100px, 100% 0, 100% 100%, 80% 100%, 48% 100%, 24% 100%, 0 100%, 0 0, 21% 80px)",
      polygonDesignSmall:
        "polygon(50% 0%, 80% 50px, 100% 0, 100% 100%, 80% 100%, 48% 100%, 24% 100%, 0 100%, 0 0, 21% 40px)",
    },
    fontFamily: {
      display: ["Macondo", "cursive"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6096B4",
          50: "#DDE8EF",
          100: "#CFDFE8",
          200: "#B3CDDB",
          300: "#97BBCE",
          400: "#7CA8C1",
          500: "#6096B4",
          600: "#467995",
          700: "#355A6F",
          800: "#233B49",
          900: "#111C23",
          950: "#080D10",
        },
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
