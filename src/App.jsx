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
        <button onClick={() => changeLanguage("es")} className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mx-3">{t("es")}</button>
        <button onClick={() => changeLanguage("en")} className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mx-3">{t("en")}</button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <SemesterForm />
        <CourseList />
      </div>
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
}

export default App;
