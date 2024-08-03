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
      alMessage: "Los cursos se han guardado correctamente, por el momento no se pueden ver en la lista de turnos:( \n\nPero puedes darle a generar sin problemas:)!",
      nTurns: "No se han creado turnos",
      //courseSelect
      sCredits: "Creditos",
      sSem: "Semestre",
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
      es: "Español",
      en: "Ingles",
      semester: "Semestre",
      //header
      language: "Idioma",
      help: "Ayuda",
      // help page
      helpTitle: "Ayuda de Schedule Maker",
      helpIntroTitle: "¿Qué es Schedule Maker?",
      helpIntroContent: "Schedule Maker es una herramienta que te ayudará a generar todos los posibles horarios según las horas/turnos de tus cursos.",
      helpInitialSetupTitle: "Configuración Inicial",
      helpInitialSetupContent: "Primero, ingresa los cursos mínimos y máximos permitidos por tu universidad, así como la cantidad de créditos mínima y máxima. Esta información nos ayudará a determinar si puedes generar un horario con los datos proporcionados. Luego, indica el ciclo actual de preferencia.",
      helpCourseInputTitle: "Ingresar Cursos",
      helpCourseInputContent1: "Es importante que ingreses los cursos que planeas llevar. Al crear un curso, asegúrate de indicar el número de créditos que equivale, el ciclo al que pertenece y el número de clases por semana. Por ejemplo, si un curso tiene clases el lunes y martes, indícalo como 2 veces. Si tienes el mismo curso dos veces en un mismo día, también indica 2 veces.",
      helpCourseInputContent2: "Una vez creado el curso, podrás modificar sus parámetros si es necesario. Recomendamos no editar el curso mientras configuras las horas/turnos de cada curso, ya que podrían ocurrir errores.",
      helpShiftSetupTitle: "Configurar Turnos",
      helpShiftSetupContent1: "Después, indica los diferentes turnos para cada curso. Crea un nuevo turno y selecciona el curso previamente ingresado. Esto mostrará espacios para que indiques los días y horas correspondientes. Completa el apartado de sección/aula y el nombre del profesor. Si hay varios profesores, puedes colocar ambos nombres.",
      helpShiftSetupContent2: "Asigna un color a tu curso. Este color se usará para dibujar el curso en tu horario, permitiéndote diferenciar entre turnos según la sección, profesor y color. Rellena todos los días y horas que te corresponden, así como los demás campos. Una vez que todos los campos estén llenos, confirma el curso. No se podrá modificar después de confirmar.",
      helpExportImportTitle: "Exportar e Importar Cursos",
      helpExportImportContent: "Si deseas añadir más cursos, utiliza el símbolo de '+' a la derecha para generar más turnos. Si ya tienes todos tus cursos configurados, exporta los cursos para que, cuando vuelvas a la página, puedas importarlos y seguirán ahí.",
      helpGenerateScheduleTitle: "Generar Horarios",
      helpGenerateScheduleContent: "Una vez que hayas terminado la selección de cursos, presiona el botón 'Generar' y deja que 'Schedule Maker' haga su magia. Obtendrás todas las opciones de horarios disponibles para que puedas tomar la mejor decisión en cuanto a tu horario."
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
      alMessage: "The courses have been saved correctly, at the moment they cannot be seen in the shift list:( \n\nBut you can generate the schedules without problems:)!",
      nTurns: "No turns have been created",
      //courseSelect
      alMessage: "The courses have been saved correctly, at the moment they cannot be seen in the shift list:( \n\nBut you can generate the schedules without problems:)!",
      sCredits: "Credits",
      sSem: "Semester",
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
      es: "Spanish",
      en: "English",
      semester: "Semester",
      //header
      language: "Language",
      help: "Help",
      // help page
      helpTitle: "Schedule Maker Help",
      helpIntroTitle: "What is Schedule Maker?",
      helpIntroContent: "Schedule Maker is a tool that will help you generate all possible schedules according to your course hours/shifts.",
      helpInitialSetupTitle: "Initial Setup",
      helpInitialSetupContent: "First, enter the minimum and maximum courses allowed by your university, as well as the minimum and maximum credits. This information will help us determine if you can generate a schedule with the provided data. Then, indicate the current preferred cycle.",
      helpCourseInputTitle: "Enter Courses",
      helpCourseInputContent1: "It is important that you enter the courses you plan to take. When creating a course, be sure to indicate the number of credits it equals, the cycle it belongs to, and the number of classes per week. For example, if a course has classes on Monday and Tuesday, indicate it as 2 times. If you have the same course twice in one day, also indicate 2 times.",
      helpCourseInputContent2: "Once the course is created, you can modify its parameters if necessary. We recommend not editing the course while setting the hours/shifts of each course, as errors may occur.",
      helpShiftSetupTitle: "Set Up Shifts",
      helpShiftSetupContent1: "Next, indicate the different shifts for each course. Create a new shift and select the previously entered course. This will show spaces for you to indicate the corresponding days and hours. Fill in the section/classroom and the professor's name. If there are several professors, you can place both names.",
      helpShiftSetupContent2: "Assign a color to your course. This color will be used to draw the course in your schedule, allowing you to differentiate between shifts by section, professor, and color. Fill in all the days and hours that correspond to you, as well as the other fields. Once all the fields are filled, confirm the course. It cannot be modified after confirmation.",
      helpExportImportTitle: "Export and Import Courses",
      helpExportImportContent: "If you want to add more courses, use the '+' symbol on the right to generate more shifts. If you already have all your courses configured, export the courses so that when you return to the page, you can import them and they will still be there.",
      helpGenerateScheduleTitle: "Generate Schedules",
      helpGenerateScheduleContent: "Once you have finished selecting courses, press the 'Generate' button and let 'Schedule Maker' work its magic. You will get all the available schedule options so you can make the best decision about your schedule."
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
