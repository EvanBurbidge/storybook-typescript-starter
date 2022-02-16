module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212936",
        primaryHover: "#43526B",
        secondary: "#525C6B",
        success: "#329441",
        successHover: "#287935",
        warning: "#847D47",
        error: "#6B1E1A",
        highlight: "#0083aa",
        draggableBg: '#FCFDFF',
        draggableBorder: '#CCD6E2',
        draggableFont: '#525C6B',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
