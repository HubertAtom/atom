module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'neutral': '#23252f',
      'mikeBGBlue':'#3D3E5A',
      'mikeBlue':'#4E81F0',
      'pink': '#D1036F',
      'orange': '#EF310F',
    },
    fontFamily: {
      'apple': '-apple-system, BlinkMacSystemFont',
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
