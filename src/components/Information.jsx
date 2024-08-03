import React from "react";
import { SemesterForm } from "./SemesterForm";
import { CourseList } from "./Courses/CourseList";

export const Information = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 ">
      <SemesterForm />
      <CourseList />
    </div>
  );
};
