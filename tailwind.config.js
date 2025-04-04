/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        '2xl': "100%",
      },
    },
  },
  darkMode: 'class', // Enable dark mode
  // Specify the dark mode class
  // or 'media' for system preference
  // or 'class' for manual control
  // or false to disable dark mode
  // darkMode: 'media', // Use system preference
  // darkMode: 'class', // Use class for dark mode
  // darkMode: false, // Disable dark mode
  // Specify the dark mode class
  theme: {
    extend: {},
  },
  plugins: [],
}

