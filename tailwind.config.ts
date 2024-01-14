import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "hero-pattern": "url('/assets/hero-section/slider-grident-bg.png')",
        "hero-img-1": "url('/assets/hero-section/hero-1.png')",
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
        success: {
          default: "var(--success-color)",
          lighter: "var(--success-color-lighter)",
        },
        redishWhite: "var(--redish-white)",
      },
      borderWidth: {},
    },
  },
  plugins: [],
};
export default config;
