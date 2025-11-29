/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        "card-strong": "0 24px 60px rgba(15, 23, 42, 0.55)",
      },
    },
  },
  plugins: [],
};
