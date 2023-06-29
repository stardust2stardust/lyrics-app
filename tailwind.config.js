/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#030712", // gray-950
      primary: "#f3f4f6", // gray-100
      secondary: "#1f2937", // gray-800
      active: "#0891b2", // cyan-600
      light: "#d1d5db", // gray-300
    },
  },
  plugins: [],
};
