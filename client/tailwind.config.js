/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
    screens: {
      'lc-md': '600px',
      'lc-lg': '840px',
    },
  },
  plugins: [],
});
