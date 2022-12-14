/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1680px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        text: {
          primary: "#606F7B",
          secondary: "#EE2737",
          tertiary: "#EAEAEA",
          dark: "#1D1D1D",
        },
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
