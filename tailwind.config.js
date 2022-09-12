/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#e28743',
        secondary: '#64748b',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}
