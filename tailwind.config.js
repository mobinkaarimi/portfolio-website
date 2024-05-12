/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "palette-bold": ["Barlow-Condensed-Extra-Bold-Italic", "sans-serif"],
      "palette-regular": ["Barlow-Condensed-Extra-Bold-Italic", "sans-serif"],
    },
    extend: {
      colors: {
        palette: {
          "primary-yellow": "#ce8622",
          "primary-gray": "#121212",
        },
      },
    },
  },
  plugins: [],
};
