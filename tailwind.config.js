const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'heavy-metal': '#1a1d1b',
        'aqua-haze': '#ecf1f4',
        'viking': '#55d8d8',
        'roman': '#de5959',
        'vibrant-purple': '#bb33ff'
      }
    },
    fontFamily: {
      power: ['"Rubik Mono One"', 'sans-serif'],
      sans: ['"Open Sans"', 'sans-serif'],
      mono: ['IBM Plex Mono', 'Consolas']
    },
    screens: {
      'itty-bitty': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
