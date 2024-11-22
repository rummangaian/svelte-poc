/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',  // Make sure to scan all relevant files
    './node_modules/flowbite/**/*.js', // Flowbite JS files
    './node_modules/flowbit'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

