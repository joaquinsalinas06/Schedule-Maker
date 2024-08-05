import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(new Set());

  const addCourse = (course) => {
    const isCourseExist = Array.from(courses).some((existingCourse) => {
      return (
        existingCourse.name === course.name &&
        existingCourse.classesPerWeek === course.classesPerWeek &&
        existingCourse.credits === course.credits
      );
    });

    if (!isCourseExist) {
      setCourses((prevCourses) => new Set([...prevCourses, course]));
    }
  };

  return (
    <CourseContext.Provider value={{ courses, setCourses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
