import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => { //todo change to set 
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <CourseContext.Provider value={{ courses, setCourses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
