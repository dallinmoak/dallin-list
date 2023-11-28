/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-fade-out": {
          "0%": { 
            opacity: 1,
            display: "flex",
            "margin-left": "0%",
          },
          "100%": {
            opacity: 0,
            display: "none",
            "margin-left": "50px",
          },
        },
      },
    },
  },
  plugins: [],
};
