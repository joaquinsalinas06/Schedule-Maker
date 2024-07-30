import React, { useState } from "react";
import { CourseOption } from "./CourseOption";

export const CourseOptions = () => {
  const [courseOptions, setCourseOptions] = useState([{ id: 1 }]);

  const addCourse = () => {
    setCourseOptions([...courseOptions, { id: courseOptions.length + 1 }]);
  };

  const removeCourse = (index) => {
    const updatedOptions = courseOptions.filter((_, i) => i !== index);
    setCourseOptions(updatedOptions);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseOptions.map((_, index) => (
          <CourseOption key={index} index={index} removeCourse={removeCourse} />
        ))}
      </div>
      <button
        onClick={addCourse}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Course
      </button>
    </div>
  );
};
