import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#1D3557',
        darkCharcoal: '#2C3E50',
        lightGray: '#ECF0F1',
        offWhite: '#F8F9F9',
        gold: '#F39C12',
        crimsonRed: '#C0392B',
        slateGray: '#708090',
        ivory: '#F1F1F1',
      },
    }, 
  },
  plugins: [],
} satisfies Config;
