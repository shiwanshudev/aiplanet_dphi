import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-lightgray": "#F8F9FD",
        "brand-lightgray-100": "#F4F4F4",
        "brand-gray": "#B7B7B7",
        "brand-gray-100": "#D9D9D9",
        "brand-gray-200": "#666666",
        "brand-slategray": "#F8F9FD7D",
        "brand-green": "#44924C",
        "brand-blue": "#003145",
        "brand-blue-100": "#002A3B",
        "brand-lightyellow": "#F2C94C40",
        "brand-yellow": "#FFCE5C",
        "brand-lightred": "#FF3C002B",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
