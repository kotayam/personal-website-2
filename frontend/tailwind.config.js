/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        navmin: { min: "1200px" },
        navmax: { max: "1200px" },
      },
    },
  },
  plugins: [],
};
