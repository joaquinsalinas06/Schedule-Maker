import React, { createContext, useState } from "react";

export const DetailedCourseContext = createContext();

export const DetailedCourseProvider = ({ children }) => {
  const [detailedCourses, setDetailedCourses] = useState([]);

  const addDetailedCourse = (course) => {
    setDetailedCourses(prevCourses => [...prevCourses, course]);
  };

  return (
    <DetailedCourseContext.Provider value={{ detailedCourses, addDetailedCourse }}>
      {children}
    </DetailedCourseContext.Provider>
  );
};
