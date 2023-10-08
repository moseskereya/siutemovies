/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FB8122',      
        secondary: '#1D2228',  
        accent: '#E1E2E2',       
      },
    },
  },
  plugins: [],
};
