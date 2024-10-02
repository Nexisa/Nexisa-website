/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'times': ['"Times New Roman"', 'serif'],
      },
      boxShadow: {
        'custom': '6px 4px 6px rgba(0, 0, 0, 0.1), 4px 2px 4px rgba(0, 0, 0, 0.06)', // Example of a custom shadow
      }
    },
  },
  plugins: [],
}

