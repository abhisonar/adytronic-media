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
        "portfolio-pattern": "url('/assets/portfolio/case-grident-shape.png')",
        instgramGradient:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        "service-img": "url('/assets/services/service-header.svg')",
      },
      backgroundColor: {
        facebook: "#4064AC",
        linkedin: "#0077B5",
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
        blackOpacity: "var(--black-opacity)",
        facebookBlue: "var(--facebook-blue)",
        linkedinBlue: "var(--linkedin-blue)",
        instagramPink: "var(--instagram-pink)",
      },
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md": "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg": "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl": "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderWidth: {},
    },
  },
  plugins: [],
};
export default config;
