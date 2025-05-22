/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // custom theme
        rob: {
            background: '#3F3F3F',
            foreground: '#DCDCCC',
            red: '#CC9393',
            green: '#7F9F7F',
            blue: '#6CA0A3',
            cyan: '#93E0E3',
            magenta: '#DC8CC3',
            yellow: '#F0DFAF',
            orange: '#DFAF8F',
            lightblue: '#8CD0D3'
        },
        // basic
        accent: '#f43f5e',
        background: '#0a0a0a',
        foreground: '#ededed',
      },
    },
  },
  plugins: [],
};
