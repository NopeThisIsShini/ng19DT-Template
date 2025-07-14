/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  backgroundImage: {
    'shoe-image': "url('https://cdn.midjourney.com/414e303a-faf5-4816-a36a-ac61bfe6277b/0_0.png')",
  }
};
