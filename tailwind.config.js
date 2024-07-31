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
        blueBoxHover: '#4F7B7B',  // un tono más oscuro
        bgSemesterForm: '#9BC7C7',
        bgSemesterFormHover: '#7EA2A2',  // un tono más oscuro
        bgSemesterFormInput: '#D7EADD',
        bgSemesterFormInputHover: '#B5C8BB',  // un tono más oscuro
        courseListSelectBg: '#E2F3F3',
        courseListSelectBgHover: '#C4D7D7',  // un tono más oscuro
        buttonCourseList: '#64A4A1',
        buttonCourseListHover: '#507F7D',  // un tono más oscuro
        buttonImport: '#4A918E',
        buttonImportHover: '#38716F',  // un tono más oscuro
        buttonExport: '#4E888F',
        buttonExportHover: '#3B6A70',  // un tono más oscuro
        bgCourseOptionInput: '#D4ECE1',
        bgCourseOptionInputHover: '#B1CDBF',  // un tono más oscuro
        textColor: '#2E3137',
        textColorHover: '#232529',  // un tono más oscuro
        bgHeader: '#181514',
        bgHeaderHover: '#0E0C0B',  // un tono más oscuro
      },
    },
  },
  plugins: [],
}
