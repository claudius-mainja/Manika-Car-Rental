/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          "orange-light": "#FF8C3A",
          "orange-dark": "#E05C00",
          "orange-glow": "#FF8533",
        },
        gray: {
          850: "#1a1a2e",
          900: "#0f0f1a",
          950: "#0a0a14",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
