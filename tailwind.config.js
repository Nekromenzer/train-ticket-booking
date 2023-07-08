/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        monts: 'Montserrat,sans-serif',
        roboto: 'Roboto Slab, sans-serif'
      },
      backgroundImage: {
        login: 'url(./src/assets/img/login-bg-effect.png)',
        loginMobile: 'url(./src/assets/img/login-mobile.png)'
      }
    }
  },
  plugins: []
}
