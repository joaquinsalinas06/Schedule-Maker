import { Schedule } from "@mui/icons-material";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      //courseList
      addCourse: "Añadir Curso",
      addNCourse: "Añadir nuevo Curso",
      cName: "Nombre",
      cCredits: "Nro de Creditos",
      cSemester: "Semestre del Curso",
      cClasses: "Clases por Semana",
      close: "Cerrar",
      noCFound: "No se encontraron cursos",
      // CourseOption
      course: "Curso",
      selCourse: "Selecciona un Curso",
      section: "Seccion",
      professor: "Profesor",
      color: "Dale un color a tu curso!",
      day: "Dia",
      selDay: "Selecciona un Dia",
      mon: "Lunes",
      tue: "Martes",
      wed: "Miercoles",
      thu: "Jueves",
      fri: "Viernes",
      sat: "Sabado",
      start: "Hora de Inicio",
      end: "Hora de Fin",
      conCourse: "Confirmar Curso",
      //CourseOptions
      sCourses: "Guardar Cursos",
      lCourses: "Cargar Cursos",
      //courseSelect
      save: "Guardar",
      close: "Cerrar",
      //schedule
      schedule: "Horario",
      time: "Hora",
      prev: "Anterior",
      gen: "Generar",
      next: "Siguiente",
      //semesterForm
      minCourses: "Cursos Minimos",
      maxCourses: "Cursos Maximos",
      minCredits: "Creditos Minimos",
      maxCredits: "Creditos Maximos",
    },
  },
  en: {
    translation: {
      //courseList
      addCourse: "Add Course",
      addNCourse: "Add New Course",
      cName: "Name",
      cCredits: "Number of Credits",
      cSemester: "Course Semester",
      cClasses: "Classes per Week",
      close: "Close",
      noCFound: "No courses found",
      // CourseOption
      course: "Course",
      selCourse: "Select a Course",
      section: "Section",
      professor: "Professor",
      color: "Give your course a color!",
      day: "Day",
      selDay: "Select a Day",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      start: "Start Time",
      end: "End Time",
      conCourse: "Confirm Course",
      //CourseOptions
      sCourses: "Save Courses",
      lCourses: "Load Courses",
      //courseSelect
      save: "Save",
      close: "Close",
      //schedule
      schedule: "Schedule",
      time: "Time",
      prev: "Previous",
      gen: "Generate",
      next: "Next",
      //semesterForm
      minCourses: "Minimum Courses",
      maxCourses: "Maximum Courses",
      minCredits: "Minimum Credits",
      maxCredits: "Maximum Credits",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
