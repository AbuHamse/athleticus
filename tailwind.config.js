/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
       },
       height: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },
      fontSize: {
        'med': '1.125rem'// Adjust the size as needed
      },

      colors: {
        'black-300' : '#212124',
        'black-400' : '#161619',
        'black-500' : '#00000a',
        'white-300' : '#F9F9F9'
      }
    },
  },
  plugins: [],
}
