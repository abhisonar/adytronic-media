/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      // => @media (min-width: 450px) { ... }

      md: "650px",
      // => @media (min-width: 650px) { ... }

      lg: "850px",
      // => @media (min-width: 850px) { ... }

      xl: "1080px",
      // => @media (min-width: 1080px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-section/slider-grident-bg.png')",
        "hero-img-1": "url('/src/assets/hero-section/hero-1.png')",
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
