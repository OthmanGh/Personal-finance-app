/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          beige: '#98908B',
          'beige-light': '#F8F4F0',
          'grey-900': '#201F24',
          'grey-500': '#696868',
          'grey-100': '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
};
