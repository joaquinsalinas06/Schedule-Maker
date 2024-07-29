import React, { useContext } from "react";
import { CourseList } from "./components/Courses/CourseList";
import { SemesterForm } from "./components/SemesterForm";
import {  CourseContext } from "./contexts/CourseContext";
import { Schedule } from "./components/Schedule";
import { CourseOption } from "./components/CourseOption";

function App() {
  const { courses } = useContext(CourseContext);

  return (
    <>
      <SemesterForm />
      <CourseList />
      <button onClick={() => console.log(courses)}>Log Courses</button>
      <CourseOption />
      <Schedule />
    </>
  );
}

export default App;
