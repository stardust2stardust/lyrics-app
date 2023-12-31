/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        n950: "#030712", // gray-950
        n900: "#111827", // gray-900
        n800: "#1f2937", // gray-800
        n400: "#9ca3af", // gray-400
        n300: "#d1d5db", // gray-300
        n200: "#e5e7eb", // gray-200
        n100: "#f3f4f6", // gray-100
        primary: "#06b6d4", // cyan-500
        secondary: "#6366f1", // indigo-500
        accent: "#d946ef", // fuchsia-500
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
};
