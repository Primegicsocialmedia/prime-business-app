// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PRIMARY: "#7F57F1",
        GRAY: "#8f8f8f",
      },
    },
    
    
  },
  plugins: [],
};
