/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B2545",
        secondary: "#12345A",
        accent: "#FFB52E",
        background: "#F3F6FB",

        healthy: "#35B58A",
        warning: "#F5A623",
        critical: "#E63946",
      },
    },
  },
  plugins: [],
};