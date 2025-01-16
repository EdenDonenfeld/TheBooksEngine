/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in your `src` directory
  ],
  theme: {
    extend: {
      colors: {
        babyBlue: 'rgba(48, 176, 199, 0.20)', // Custom color
        darkerBlue: 'rgba(31, 157, 180, 0.75)', // Custom color
        recBlue: 'rgba(204, 220, 222, 1)', // Custom color
        borderBlue: 'rgba(31, 157, 180, 0.2)', // Custom color
      },
      fontFamily: {
        croissant: ['Croissant One', 'sans-serif'], // Define the custom font
        crimson: ['Crimson Pro', 'serif'], // Add the Crimson Pro font family
      },
    },
  },
  plugins: [],
};
