/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "650px",
      // => @media (min-width: 768px) { ... }

      lg: "850px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-section/slider-grident-bg.png')",
      },
      colors: {
        primary: {
          default: "var(--primary-color)",
          lighter: "var(--primary-color-lighter)",
        },
        warn: {
          default: "var(--warn-color)",
          lighter: "var(--warn-color-lighter)",
        },
        success: {},
      },
      borderWidth: {},
    },
  },
  plugins: [],
};
