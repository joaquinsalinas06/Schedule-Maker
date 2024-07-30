import React, { useContext } from "react";
import { CourseList } from "./components/Courses/CourseList";
import { SemesterForm } from "./components/SemesterForm";
import { CourseContext } from "./contexts/CourseContext";
import { ScheduleComponent } from "./components/Schedule";
import { CourseOptions } from "./components/Courses/CourseOptions";

function App() {
  const { courses } = useContext(CourseContext);

  return (
    <>
      <CourseList />
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
}

export default App;
