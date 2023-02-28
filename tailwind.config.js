/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: [
    //     "./screens/**/*.{js,jsx,ts,tsx}",
    //     "./pages/**/*.{js,jsx,ts,tsx}",
    //     "./components/**/*.{js,jsx,ts,tsx}",
    // ],
    content: [
        "./App.{js,jsx,ts,tsx}", 
        "./Screens/*.{js,jsx,ts,tsx}",
        "./Screens/**/*.{js,jsx,ts,tsx}",
        "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
      },
      plugins: [],
}