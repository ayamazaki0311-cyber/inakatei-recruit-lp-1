import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kinari: "#fff8eb",
        miso: "#8a4b24",
        shoyu: "#5b3320",
        daidai: "#d96b27",
        negi: "#4f7d52",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(91, 51, 32, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
