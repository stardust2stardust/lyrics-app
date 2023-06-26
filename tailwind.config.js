/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      background: "#000000",
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
      active: "#F40812",
      light: "#121212",
    },
  },
  plugins: [],
};
