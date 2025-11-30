import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "aleph-dark": {
          extend: "dark", // start from built‑in dark[web:172][web:178]
          colors: {
            background: "rgb(34, 40, 49)",
            content1: "rgb(68, 68, 68)",

            primary: "rgb(218, 0, 55)",
            // primaryForeground: "rgb(237, 237, 237)",

            // foreground: "rgb(237, 237, 237)",
            border: "rgb(68, 68, 68)",
            focus: "rgb(218, 0, 55)",
          },
        },
      },
    }),
  ],
};

module.exports = config;
