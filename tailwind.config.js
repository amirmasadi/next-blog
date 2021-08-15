module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
          primary: {
            100: '#232946',
            200: '#3E487A',
          },
          secondary: '#D4D8F0',
          accent: '#EEBBC3',
        },
        fontFamily:{
          body: ['iranyekan']
        },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
