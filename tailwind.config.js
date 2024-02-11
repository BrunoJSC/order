/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter_600SemiBold", "sans-serif"],
        subtitle: ["Inter_500Medium", "sans-serif"],
        body: ["Inter_400Regular", "sans-serif"],
        bold: ["Inter_700Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
