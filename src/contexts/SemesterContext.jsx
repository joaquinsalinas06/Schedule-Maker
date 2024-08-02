import React, { createContext, useState } from "react";

export const SemesterContext = createContext();

export const SemesterProvider = ({ children }) => {
  const [minCourses, setMinCourses] = useState();
  const [maxCourses, setMaxCourses] = useState();
  const [minCredits, setMinCredits] = useState();
  const [maxCredits, setMaxCredits] = useState();
  const [semester, setSemester] = useState();

  const showValues  =  () => {
    console.log(minCourses, maxCourses, minCredits, maxCredits, semester);
  }

  return (
    <SemesterContext.Provider
      value={{
        setMinCourses,
        setMaxCourses,
        setMinCredits,
        setMaxCredits,
        setSemester,
        showValues
      }}
    >
      {children}
    </SemesterContext.Provider>
  );
};
