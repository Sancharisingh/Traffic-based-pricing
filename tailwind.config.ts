import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react"); 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#B2F3F3",
        accent: "rgba(219, 65, 45, .12)"
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
};
export default config;
