import React, { useContext } from "react";
import { CourseList } from "./components/CourseList";
import { SemesterForm } from "./components/SemesterForm";
import { CourseProvider, CourseContext } from "./contexts/CourseContext";
import { Schedule } from "./components/Schedule";

function App() {
  const { courses } = useContext(CourseContext);

  return (
    <>
      <SemesterForm />
      <CourseList />
      <button onClick={() => console.log(courses)}>Log Courses</button>
      <Schedule />
    </>
  );
}

export default App;
