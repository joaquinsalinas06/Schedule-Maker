import React, { createContext, useState } from "react";

export const ShiftsContext = createContext();

export const ShiftsProvider = ({ children }) => {
  const [shifts, setShifts] = useState([]);

  const addShift = (course) => {
    setShifts((prevCourses) => [...prevCourses, course]);
  };

  const setShiftsList = (courses) => {
    setShifts(courses);
  };

  return (
    <ShiftsContext.Provider
      value={{ shifts, addShift, setShiftsList }}
    >
      {children}
    </ShiftsContext.Provider>
  );
};
