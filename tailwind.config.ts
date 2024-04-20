import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "kanit": ['Kanit', "sans-serif"],
        // "playFair" : ['Abril Fatface', "serif"],
        "playFair" : ['Alfa Slab One'],
        "archivoBlack" : ['Archivo Black', "sans-serif"],
        "rowdies": ['Rowdies', 'sans-serif'],
        "oswald" : ['Oswald' , 'sans-serif'],
        "bebasNeue" : ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
