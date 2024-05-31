import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-purple':'#9A59FF',
        'primary-gray': '#B1C2BE',
        'dark-blue': '#001F26',
        'primary-black': '#191919',
      },
    },
  },
  plugins: [],
};
export default config;
