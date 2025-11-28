/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pullup: {
          // overall app background
          bg: "#020317",          // deep navy-black
          // card surfaces
          card: "#05081B",        // slightly lighter navy
          row: "#050816",         // inner rows
          // brand / accent
          primary: "#38BDF8",     // cyan
          // status colors
          positive: "#4ADE80",    // green
          warning: "#FACC15",     // yellow
          negative: "#FB7185",    // pink/red
        },
      },
      borderRadius: {
        "card": "24px",
      },
      boxShadow: {
        "card-strong": "0 24px 60px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
