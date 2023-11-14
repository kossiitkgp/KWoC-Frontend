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
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
