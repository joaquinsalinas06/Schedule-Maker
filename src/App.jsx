import React, { useContext } from "react";
import { CourseList } from "./components/Courses/CourseList";
import { SemesterForm } from "./components/SemesterForm";
import { CourseContext } from "./contexts/CourseContext";
import { ScheduleComponent } from "./components/Schedule";
import { CourseOptions } from "./components/Courses/CourseOptions";
import { useTranslation } from 'react-i18next';
import { Header } from "./components/Header";

function App() {
  const { courses } = useContext(CourseContext);

  const { t, i18n } = useTranslation();



  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 w-4/5 mx-auto">
        <SemesterForm />
        <CourseList />
      </div>
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
}

export default App;
