import React, { useState } from "react";
import { CourseOption } from "./CourseOption";

export const CourseOptions = () => {
  const [courseNum, setCourseNum] = useState(1);

  const addCourse = () => {
    setCourseNum(courseNum + 1);
  };

  return (
    <div className="flex flex-col items-center">
      {[...Array(courseNum)].map((_, index) => (
        <CourseOption key={index} />
      ))}
      <button onClick={addCourse} className="text-white">
        Add Course
      </button>
    </div>
  );
};
