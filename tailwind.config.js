/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#00A3AF",
          dark: "#19353A",
        },
        secondary: {
          cream: "#FFFDF1"
        },
        text: {
          brownish: "#4A4A4A",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      }
    },
  },

  plugins: [],
}
