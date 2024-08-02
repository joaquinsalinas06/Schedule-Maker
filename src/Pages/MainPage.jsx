import React from "react";
import { CourseList } from "../components/Courses/CourseList";
import { SemesterForm } from "../components/SemesterForm";
import { ScheduleComponent } from "../components/Schedule";
import { CourseOptions } from "../components/Courses/ShiftOptions";


export const MainPage = () => {
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 w-4/5 mx-auto">
        <SemesterForm />
        <CourseList />
      </div>
      <CourseOptions />
      <ScheduleComponent />
    </>
  );
};
