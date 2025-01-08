/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    colors: {
      bg: "rgba(255,255,255,0.2)",
    },
    extend: {},
  },
  plugins: [],
};
