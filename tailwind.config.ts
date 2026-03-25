import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
        accent: ["Sora", "sans-serif"],
      },
      colors: {
        ink: "#141414",
        paper: "#f5f3ef",
        fog: "#ece8e2",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
