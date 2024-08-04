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
      mainTitle: "¡Bienvenido a Schedule Maker! ",

      introTitle: "¿Qué es Schedule Maker?",
      introContentPart1:
        "Schedule Maker es una página donde podrás obtener todas las combinaciones posibles según la gran cantidad de oportunidades de horario que existen:)",
      introContentPart2:
        "Sabemos que escoger un horario puede ser complicado, sobre todo cuando una clase que queremos quizá nos bloquea algunas otras",
      introContentPart3:
        "Es por ello que Schedule Maker llega a resolver esto 🎉",

      initialSetupTitle: "Configuración Inicial",
      initialSetupContentPart1:
        "Primero, ingresa cuántos créditos mínimos y máximos te permite tu universidad 🏛️",
      initialSetupContentPart2:
        'Actualmente nos basamos en el sistema de semestres de Perú (es decir ciclo 2x-0, 2x-1 y 2x-2), pero si eres de algún otro lugar o tu universidad trabaja diferente, ¡escríbeme! Trataré de adaptar el sistema para que puedas realizar un buen horario 🌍\n \nPuedes encontrar mi contacto en la pagina de "Sobre mi". ',

      courseInputTitle: "Ingresar Cursos/Turnos",
      courseInputContentPart1:
        "Es importante que ingreses los cursos que podrías llevar, indicando el nombre del curso, los créditos que vale y cuántas clases por semana tienes del curso. 📝",

      courseInputContentPart2:
        "Por ejemplo, si tienes 2 horas el lunes y 2 horas el martes de ese curso, coloca 2 📅",
      courseInputContentPart3:
        "O si tienes 2 horas en la mañana y 2 horas en la noche del mismo curso, igualmente coloca 2 🕒🕕",

      courseInputContentPart4:
        "Una vez crees un curso, podrás crear los turnos/horas de cada curso con el botón '+', donde podrás escoger en cada turno a qué curso pertenece, la sección/salón que te toque, profesor o profesores del curso, y darle un color al curso 🎨",

      courseInputContentPart5:
        "Este será la forma en la que verás el curso en tu horario 📅",
      courseInputContentPart6:
        "Además, dependiendo del número de veces que tienes que llevar el curso a la semana, te daremos espacio para que indiques qué día y a qué hora te toca el curso 🕒",

      courseInputContentPart7:
        "Actualmente solo trabajamos con horas exactas, es decir, no tomamos en cuenta los minutos, pero estamos trabajando para que pueda darse así ⏳",

      saveOptionsTitle: "Guardar Opciones",
      saveOptionsContentPart1:
        "Una vez hayas definido todos tus turnos, te recomendamos guardar tus opciones, para que de esa forma, la próxima vez que nos visites, cargues tus turnos y tengas todo de vuelta 💾",

      generateScheduleTitle: "Generar Horarios",
      generateScheduleContentPart1:
        "Una vez tengas todos los turnos definidos, dale click a 'Generar' y deja que Schedule Maker haga su magia ✨",
      generateScheduleContentPart2:
        "Podrás ver todos los posibles horarios que hayas seleccionado, permitiéndote así poder escoger sabiamente tu próximo ciclo 📅",
      //AboutMe
      aboutMeTitle: "¡Hola! 👋",
      aboutMeIntro:
        "Soy Joaquín Salinas, estudiante de Ciencias de la Computación en UTEC. Actualmente estoy en el 4to ciclo de mi carrera, y he descubierto que me encanta trabajar en proyectos como este. Cada nuevo proyecto es una oportunidad para aprender y mejorar, y me gustaría seguir creando más en el futuro :)",
      aboutMeContactTitle:
        "Si te encuentras con algún error o bug en el proyecto, o si crees que necesitarías que adapte la página para tu universidad o centro educativo, ¡no dudes en decírmelo!",
      aboutMeContactInstructions:
        "Estoy aquí para ayudar y mejorar la experiencia para todos. Puedes ponerte en contacto conmigo a través de:",
      aboutMeGitHub: "GitHub",
      aboutMePersonalEmail: "Correo personal",
      aboutMeUniversityEmail: "Correo de la universidad",
      aboutMeInstagram: "Instagram",
      aboutMeSupportTitle:
        "Además, si te gusta lo que ves y quieres apoyar el desarrollo de este proyecto, ¡sería genial!",
      aboutMeSupportInstructions:
        "Implementar y adaptar la lógica del código puede ser un desafío, y tu apoyo sería muy valioso. Puedes contribuir de las siguientes maneras:",
      aboutMePayPal: "PayPal",
      aboutMeYape: "Yape (solo para Perú)",
      aboutMeThanks:
        "Cualquier ayuda, grande o pequeña, es muy apreciada y me motiva a seguir mejorando y creando más cosas interesantes. ¡Gracias por tu interés y apoyo! 🎉",
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
      mainTitle: "Welcome to Schedule Maker! ",

      introTitle: "What is Schedule Maker?",
      introContentPart1:
        "Schedule Maker is a website where you can find all possible combinations based on the vast number of schedule opportunities that exist :)",
      introContentPart2:
        "We know that choosing a schedule can be complicated, especially when a class you want might block some others.",
      introContentPart3:
        "That's why Schedule Maker is here to solve this for you 🎉",

      initialSetupTitle: "Initial Setup",
      initialSetupContentPart1:
        "First, enter the minimum and maximum credits allowed by your university. 🏛️",
      initialSetupContentPart2:
        'We currently base our system on the semester system in Peru (i.e., cycles 2x-0, 2x-1, and 2x-2), but if you are from another place or your university works differently, let me know! I will try to adapt the system so you can create a good schedule. 🌍\n\nYou can find my contact information on the "About Me" page.',

      courseInputTitle: "Enter Courses/Shifts",
      courseInputContentPart1:
        "It is important to enter the courses you might take, indicating the course name, the credits it is worth, and how many classes per week you have for that course. 📝",
      courseInputContentPart2:
        "For example, if you have 2 hours on Monday and 2 hours on Tuesday for that course, enter 2. 📅",
      courseInputContentPart3:
        "Or if you have 2 hours in the morning and 2 hours in the evening for the same course, also enter 2. 🕒🕕",
      courseInputContentPart4:
        "Once you create a course, you can create the shifts/hours for each course with the '+' button, where you can select which course the shift belongs to, the section/classroom, the professor(s), and assign a color to the course. 🎨",
      courseInputContentPart5:
        "This will be the way you see the course in your schedule. 📅",
      courseInputContentPart6:
        "Additionally, depending on the number of times you have to attend the course per week, we will provide space for you to indicate the day and time of the course. 🕒",
      courseInputContentPart7:
        "We currently only work with exact hours, meaning we don't account for minutes, but we are working on making this possible. ⏳",

      saveOptionsTitle: "Save Options",
      saveOptionsContentPart1:
        "Once you have defined all your shifts, we recommend saving your options so that the next time you visit, you can load your shifts and have everything back. 💾",

      generateScheduleTitle: "Generate Schedules",
      generateScheduleContentPart1:
        "Once you have defined all the shifts, click 'Generate' and let Schedule Maker work its magic. ✨",
      generateScheduleContentPart2:
        "You will be able to see all the possible schedules you have selected, allowing you to wisely choose your next cycle. 📅",
      //AboutMe
      aboutMeTitle: "Hello! 👋",
      aboutMeIntro:
        "I'm Joaquín Salinas, a Computer Science student at UTEC. Currently, I'm in my 4th semester, and I've discovered that I really enjoy working on projects like this. Each new project is an opportunity to learn and improve, and I'd love to keep creating more in the future :)",
      aboutMeContactTitle:
        "If you encounter any errors or bugs in the project, or if you think you might need the page adapted for your university or educational center, don't hesitate to let me know!",
      aboutMeContactInstructions:
        "I'm here to help and improve the experience for everyone. You can get in touch with me through:",
      aboutMeGitHub: "GitHub",
      aboutMePersonalEmail: "Personal Email",
      aboutMeUniversityEmail: "University Email",
      aboutMeInstagram: "Instagram",
      aboutMeSupportTitle:
        "Also, if you like what you see and want to support the development of this project, that would be awesome!",
      aboutMeSupportInstructions:
        "Implementing and adapting the logic of the code can be challenging, and your support would be greatly appreciated. You can contribute in the following ways:",
      aboutMePayPal: "PayPal",
      aboutMeYape: "Yape (only for Peru)",
      aboutMeThanks:
        "Any help, big or small, is greatly appreciated and motivates me to keep improving and creating more interesting things. Thanks for your interest and support! 🎉",
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
