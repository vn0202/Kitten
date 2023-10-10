/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#E53988',
        secondary: "#1ED6FF",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),

  ],
}