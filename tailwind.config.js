/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {

      colors:{
        primary:'#FB5722',
        secondary:'#0C0DB5',
        lightBlue:'#3C5CC9',
        textColor:'#5F5B5B',
        green:'#0BA645',
      },
      backgroundImage:{
        Hero:"url('assets/images/home.png')",
        Inspection:"url('assets/images/man-washing-his-car-garage 2.png')",
      
      }
    },
  },
  plugins: [],
}

