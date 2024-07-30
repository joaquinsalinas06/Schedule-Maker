import React, { createContext, useState } from "react";

export const DetailedCourseContext = createContext();

export const DetailedCourseProvider = ({ children }) => {
  const [detailedCourses, setDetailedCourses] = useState([]);

  const addDetailedCourse = (course) => {
    setDetailedCourses((prevCourses) => [...prevCourses, course]);
  };

  const setDetailedCoursesList = (courses) => {
    setDetailedCourses(courses);
  };

  return (
    <DetailedCourseContext.Provider
      value={{ detailedCourses, addDetailedCourse, setDetailedCoursesList }}
    >
      {children}
    </DetailedCourseContext.Provider>
  );
};
