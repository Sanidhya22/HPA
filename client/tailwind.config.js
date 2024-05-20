/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
    },
    screens: {
      "1xl": "1240px",
    },
  },
  plugins: [],
});
