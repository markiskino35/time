/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bgimage: "url('./src/assets/bgimage.jpg')",
      },
    },
  },
  plugins: [],
};
