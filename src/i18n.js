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
      // ShiftOption
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
      //ShiftOptions
      sCourses: "Guardar Turnos",
      lCourses: "Cargar Turnos",
      times: "Horas",
      alMessage:
        "Los cursos se han guardado correctamente, por el momento no se pueden ver en la lista de turnos:( \n\nPero puedes darle a generar sin problemas:)!",
      nTurns: "No se han creado turnos",
      //courseSelect
      sCredits: "Creditos",
      sSem: "Semestre",
      save: "Guardar",
      close: "Cerrar",
      cpw: "Clases x Semana",
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
      es: "Español",
      en: "Ingles",
      semester: "Semestre",
      pSemester: "Elige un Semestre",
      //header
      language: "Idioma",
      help: "Ayuda",
      // help page
      mainTitle: "¡Bienvenido a Schedule Maker! 😀",

      introTitle: "¿Qué es Schedule Maker?",
      introContentPart1:
        "Schedule Maker es una página donde podrás obtener todas las combinaciones posibles según la gran cantidad de oportunidades de horario que existen. 😄",
      introContentPart2:
        "Sabemos que escoger un horario puede ser complicado, sobre todo cuando una clase que queremos quizá nos bloquea algunas otras. 😕",
      introContentPart3:
        "Es por ello que Schedule Maker llega a resolver esto. 🎉",

      initialSetupTitle: "Configuración Inicial",
      initialSetupContentPart1:
        "Primero, ingresa cuántos créditos mínimos y máximos te permite tu universidad. 🎓",
      initialSetupContentPart2:
        "Actualmente nos basamos en el sistema de semestres de Perú, pero si eres de algún otro lugar o tu universidad trabaja diferente, ¡escríbeme! Trataré de adaptar el sistema para que puedas realizar un buen horario. 🌍",

      courseInputTitle: "Ingresar Cursos",
      courseInputContentPart1:
        "Es importante que ingreses los cursos que podrías llevar, indicando el nombre del curso, los créditos que vale y cuántas clases por semana tienes del curso. 📝",
      courseInputContentPart2:
        "Por ejemplo, si tienes 2 horas el lunes y 2 horas el martes de ese curso, coloca 2. 📅",
      courseInputContentPart3:
        "O si tienes 2 horas en la mañana y 2 horas en la noche del mismo curso, igualmente coloca 2. 🕒🕕",
      courseInputContentPart4:
        "Una vez crees un curso, podrás crear los turnos/horas de cada curso con el botón '+', donde podrás escoger en cada turno a qué curso pertenece, la sección/salón que te toque, profesor o profesores del curso, y darle un color al curso. 🎨",
      courseInputContentPart5:
        "Este será la forma en la que verás el curso en tu horario. 📅",
      courseInputContentPart6:
        "Además, dependiendo del número de veces que tienes que llevar el curso a la semana, te daremos espacio para que indiques qué día y a qué hora te toca el curso. 🕒",
      courseInputContentPart7:
        "Actualmente solo trabajamos con horas exactas, es decir, no tomamos en cuenta los minutos, pero estamos trabajando para que pueda darse así. ⏳",

      saveOptionsTitle: "Guardar Opciones",
      saveOptionsContentPart1:
        "Una vez hayas definido todos tus turnos, te recomendamos guardar tus opciones, para que de esa forma, la próxima vez que nos visites, cargues tus turnos y tengas todo de vuelta. 💾",

      generateScheduleTitle: "Generar Horarios",
      generateScheduleContentPart1:
        "Una vez tengas todos los turnos definidos, dale click a 'Generar' y deja que Schedule Maker haga su magia. ✨",
      generateScheduleContentPart2:
        "Podrás ver todos los posibles horarios que hayas seleccionado, permitiéndote así poder escoger sabiamente tu próximo ciclo. 📅",
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
      // ShiftOption
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
      //ShiftOptions
      sCourses: "Save Shifts",
      lCourses: "Load Shifts",
      times: "Times",
      alMessage:
        "The courses have been saved correctly, at the moment they cannot be seen in the shift list:( \n\nBut you can generate the schedules without problems:)!",
      nTurns: "No turns have been created",
      //courseSelect
      alMessage:
        "The courses have been saved correctly, at the moment they cannot be seen in the shift list:( \n\nBut you can generate the schedules without problems:)!",
      sCredits: "Credits",
      sSem: "Semester",
      save: "Save",
      close: "Close",
      cpw: "Classes x Week",
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
      es: "Spanish",
      en: "English",
      semester: "Semester",
      pSemester: "Pick a Semester",
      //header
      language: "Language",
      help: "Help",
      // help page
      helpTitle: "Schedule Maker Help",
      helpIntroTitle: "What is Schedule Maker?",
      helpIntroContent:
        "Schedule Maker is a tool that will help you generate all possible schedules according to your course hours/shifts.",
      helpInitialSetupTitle: "Initial Setup",
      helpInitialSetupContent:
        "First, enter the minimum and maximum courses allowed by your university, as well as the minimum and maximum credits. This information will help us determine if you can generate a schedule with the provided data. Then, indicate the current preferred cycle.",
      helpCourseInputTitle: "Enter Courses",
      helpCourseInputContent1:
        "It is important that you enter the courses you plan to take. When creating a course, be sure to indicate the number of credits it equals, the cycle it belongs to, and the number of classes per week. For example, if a course has classes on Monday and Tuesday, indicate it as 2 times. If you have the same course twice in one day, also indicate 2 times.",
      helpCourseInputContent2:
        "Once the course is created, you can modify its parameters if necessary. We recommend not editing the course while setting the hours/shifts of each course, as errors may occur.",
      helpShiftSetupTitle: "Set Up Shifts",
      helpShiftSetupContent1:
        "Next, indicate the different shifts for each course. Create a new shift and select the previously entered course. This will show spaces for you to indicate the corresponding days and hours. Fill in the section/classroom and the professor's name. If there are several professors, you can place both names.",
      helpShiftSetupContent2:
        "Assign a color to your course. This color will be used to draw the course in your schedule, allowing you to differentiate between shifts by section, professor, and color. Fill in all the days and hours that correspond to you, as well as the other fields. Once all the fields are filled, confirm the course. It cannot be modified after confirmation.",
      helpExportImportTitle: "Export and Import Courses",
      helpExportImportContent:
        "If you want to add more courses, use the '+' symbol on the right to generate more shifts. If you already have all your courses configured, export the courses so that when you return to the page, you can import them and they will still be there.",
      helpGenerateScheduleTitle: "Generate Schedules",
      helpGenerateScheduleContent:
        "Once you have finished selecting courses, press the 'Generate' button and let 'Schedule Maker' work its magic. You will get all the available schedule options so you can make the best decision about your schedule.",
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
