/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    clipPath:{
      polygonDesign: "polygon(50% 0%, 80% 6%, 100% 0, 100% 100%, 80% 96%, 48% 100%, 24% 94%, 0 100%, 0 0, 21% 6%)",
      polygonDesignSmall: "polygon(50% 0%, 80% 2%, 100% 0, 100% 100%, 80% 99%, 50% 100%, 21% 99%, 0 100%, 0 0, 22% 2%)",
    },
    extend: {},
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}