/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000", // Pure black background
        card: "#111111", // Dark cards (used for bg-card)
        light: "#FFFFFF", // Pure white text
        gray: {
          700: "#333333", // Darker gray
          600: "#444444", // Medium gray
          500: "#666666", // Lighter gray
        },
      },
    },
  },
  plugins: [],
};
