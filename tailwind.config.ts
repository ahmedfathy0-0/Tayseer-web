import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // Primary Brand Colors
        primary: {
          DEFAULT: "#2BAE66", // Primary Green
          50: "#E6F5EC", // Soft Light Green
          100: "#CDEDE0", // Lighter variation
          200: "#9CDBB8",
          300: "#6BC890",
          400: "#47B978",
          500: "#2BAE66", // Main Primary
          600: "#229550",
          700: "#1A7C3E",
          800: "#13612C",
          900: "#0E4A1F",
        },
        // Forest Green for headers and emphasis
        forest: {
          DEFAULT: "#1E5631",
          50: "#F0F5F2",
          100: "#D9E8DD",
          200: "#B3D1BB",
          300: "#8CBA99",
          400: "#66A377",
          500: "#408C55",
          600: "#337544",
          700: "#1E5631", // Main Forest
          800: "#174527",
          900: "#10341D",
        },
        // Teal/Cyan Accent
        teal: {
          DEFAULT: "#00A6A6",
          50: "#E6F9F9",
          100: "#CCF2F2",
          200: "#99E6E6",
          300: "#66D9D9",
          400: "#33CCCC",
          500: "#00A6A6", // Main Teal
          600: "#008585",
          700: "#006464",
          800: "#004343",
          900: "#002121",
        },
        // Dark theme colors
        dark: {
          DEFAULT: "#2F4F4F", // Dark Slate Gray
          50: "#F7F8F8",
          100: "#E8EBEB",
          200: "#D1D7D7",
          300: "#B9C3C3",
          400: "#A2AFAF",
          500: "#8B9B9B",
          600: "#748787",
          700: "#5D7373",
          800: "#2F4F4F", // Main Dark
          900: "#253B3B",
        },
        // Background and surface colors
        background: {
          light: "#FFFFFF",
          "light-secondary": "#E6F5EC", // Soft Light Green
          dark: "#1A2A2A",
          "dark-secondary": "#2F4F4F",
        },
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(135deg, #2BAE66, #00A6A6)",
        "gradient-dark": "linear-gradient(135deg, #1E5631, #2BAE66)",
        "gradient-soft": "linear-gradient(135deg, #E6F5EC, #CDEDE0)",
      },
    },
  },
  plugins: [],
};
export default config;
