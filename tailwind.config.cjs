/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
