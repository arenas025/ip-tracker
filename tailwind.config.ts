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
        "blue-image-desktop": "url('/pattern-bg-desktop.png')",
        "blue-image-mobile": "url('/pattern-bg-mobile.png')",
      },
    },
    screens: {
    'mobile1': { 'raw': '(min-height: 800px)' },
    },
  },
  plugins: [],
};
export default config;
