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

        secondary: {
          green: '#27C7C8',
          yellow: '#F2CDAC',
          cyan: '#82C9D7',
          navy: '#626070',
          red: '#C94736',
          purple: '#826C8D',
          'purple-light': '#AF81BA',
          turquoise: '#95C77C',
          brown: '#93674F',
          magenta: '#934F6F',
          blue: '#3F82B2',
          'navy-grey': '#97A0AC',
          'army-green': '#797061',
          gold: '#CA8B61',
          orange: '#BE6C49',
        },
      },

      fontSize: {
        'preset-1': ['32px', { lineHeight: '120%', letterSpacing: '0px' }],
        'preset-2': ['20px', { lineHeight: '120%', letterSpacing: '0px' }],
        'preset-3': ['16px', { lineHeight: '150%', letterSpacing: '0px' }],
        'preset-4': ['14px', { lineHeight: '150%', letterSpacing: '0px' }],
        'preset-5': ['12px', { lineHeight: '150%', letterSpacing: '0px' }],
      },

      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },

      fontWeight: {
        bold: 'bold',
        regular: 'normal',
      },

      spacing: {
        500: '40px',
        400: '32px',
        300: '24px',
        250: '20px',
        200: '16px',
        150: '12px',
        100: '8px',
        50: '4px',
      },
    },
  },
  plugins: [],
};
