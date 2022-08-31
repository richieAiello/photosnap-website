/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        grey: '#DFDFDF',
        'grad-1': '#FFC593',
        'grad-2': '#BC7198',
        'grad-3': '#5A77FF',
      },
    },
  },
  plugins: [],
};
