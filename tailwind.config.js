module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.625rem',
      },
      fontFamily: {
        arkitek: ["ARKITEK", "regular"]
      },
      maxWidth: {
        'xs': '17rem'
      }
    },
  },
  plugins: [],
}
