/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'light-orange' : '#fdf2e9',
        'light-orange-10' : '#ea9346',
        'orange' : '#d0721f',
        'yellow' : '#ffd43b',
        'black' : '#000',
        'dark-gray' : '#333333',
        'brown' : '#45260a',
        'gray' : '#888a8c',
        'light-gray' : '#dddddd', 
        'green' : '#51cf66',
        'light-green' : '#94d82d'
      },
    },
  },
  plugins: [],
}

