module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          orange: '#FF8C42',
          yellow: '#FFD23F',
          teal: '#3BCEAC',
          green: '#52B788',
          pink: '#FF6B9D'
        }
      },
      fontFamily: {
        display: ['Fredoka', 'Comic Sans MS', 'sans-serif'],
        body: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}