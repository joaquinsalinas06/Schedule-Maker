import React, { useContext } from "react";
import { CourseList } from "./components/Courses/CourseList";
import { SemesterForm } from "./components/SemesterForm";
import { CourseContext } from "./contexts/CourseContext";
import { ScheduleComponent } from "./components/Schedule";
import { CourseOptions } from "./components/Courses/CourseOptions";
import { useTranslation } from 'react-i18next';

function App() {
  const { courses } = useContext(CourseContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("en")}>English</button>
      <CourseList />
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
}

export default App;
