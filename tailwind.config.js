/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.scss",
    "./@velaio/**/*.{html,ts}",
    "./@velaio/**/*.scss",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2", // Definir un color personalizado
        secondary: "#14171A",
      },
      spacing: {
        128: "32rem", // Espaciado personalizado
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
