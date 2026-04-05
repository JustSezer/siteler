import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6b1c1c",
        secondary: "#d4a017",
        accent: "#d4a017",
        dark: "#2c1810",
        cream: "#faf7f0",
        surface: "#f0e8d8",
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
