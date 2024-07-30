import React, { useState, useContext } from "react";
import { CourseOption } from "./CourseOption";
import { DetailedCourseContext } from "../../contexts/DetailedCourseContext";

export const CourseOptions = () => {
  const { detailedCourses, addDetailedCourse, setDetailedCoursesList } = useContext(DetailedCourseContext);
  const [courseOptions, setCourseOptions] = useState([{ id: 1 }]);

  const addCourse = () => {
    setCourseOptions([...courseOptions, { id: courseOptions.length + 1 }]);
  };

  const removeCourse = (index) => {
    const updatedOptions = courseOptions.filter((_, i) => i !== index);
    setCourseOptions(updatedOptions);
  };

  const saveCourses = () => {
    const dataStr = JSON.stringify(detailedCourses, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "detailedCourses.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadCourses = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const courses = JSON.parse(content);
        setDetailedCoursesList(courses);
        setCourseOptions(courses.map((_, index) => ({ id: index + 1 })));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseOptions.map((_, index) => (
          <CourseOption key={index} index={index} removeCourse={removeCourse} />
        ))}
      </div>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={addCourse}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Course
        </button>
        <button
          onClick={saveCourses}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save Courses
        </button>
        <input
          type="file"
          accept=".json"
          onChange={loadCourses}
          className="hidden"
          id="load-courses-input"
        />
        <label
          htmlFor="load-courses-input"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 cursor-pointer"
        >
          Load Courses
        </label>
      </div>
    </div>
  );
};
