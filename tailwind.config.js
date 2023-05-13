/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grayish-blue-dark": "hsl(217, 19%, 35%)",
        "grayish-blue": "hsl(212, 23%, 69%)",
        "grayish-blue-light": "hsl(210, 46%, 95%)",
        "dark-blue-desaturated": "hsl(214, 17%, 51%)",
      },
    },
  },
  plugins: [],
};
