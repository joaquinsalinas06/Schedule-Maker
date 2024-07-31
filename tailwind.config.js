/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBox: '#679999',
        whiteInputs: '#D4ECE1',
        blueBar: '#6E757F',
        blackHeader: '#201D1A',
        bgSemesterForm: '#9BC7C7',
        bgSemesterFormInput: '#D7EADD',
        courseListSelectBg: '#D9D9D9',
        buttonCourseList: '#64A4A1',
        buttonImport: '#4A918E',
        buttonExport: '#4E888F',
        bgCourseOptionInput: '#D4ECE1',
        bgCourseOptions: '#679999',
        textColor: '#2E3137',
      },
    },
  },
  plugins: [],
}