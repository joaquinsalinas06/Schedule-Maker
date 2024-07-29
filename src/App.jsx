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
      <SemesterForm />
      <CourseList />
      <button onClick={() => console.log(courses)}>Log Courses</button>
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
}

export default App;
