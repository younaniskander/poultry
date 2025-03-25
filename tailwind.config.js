module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      container: {
        center: true, // يجعل الكونتينر في المنتص
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
};
