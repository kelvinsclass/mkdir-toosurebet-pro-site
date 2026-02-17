/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#32CD32', // Vert lumineux
        'accent-yellow': '#FFD700', // Jaune lumineux
        'dark-bg': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
