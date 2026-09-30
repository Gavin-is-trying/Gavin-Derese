/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f0e8',
        ink: '#1e2926',
        moss: '#354b40',
        oxblood: '#6f332c',
        gold: '#b08a46',
      },
    },
  },
  plugins: [],
}
