import React, { useContext, useState, useEffect } from "react";
import { SemesterContext } from "../contexts/SemesterContext";
import { useTranslation } from "react-i18next";

export const SemesterForm = () => {
  const { t } = useTranslation();
  const {
    setMinCourses,
    setMaxCourses,
    setMinCredits,
    setMaxCredits,
    setSemester,
    showValues,
  } = useContext(SemesterContext);

  const [semesters, setSemesters] = useState([]);
  const [minCredits, setMinCreditsState] = useState(0);
  const [maxCredits, setMaxCreditsState] = useState(Infinity);
  const [semester, setSemesterState] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    switch (name) {
      case "minCourses":
        setMinCourses(numericValue);
        break;
      case "maxCourses":
        setMaxCourses(numericValue);
        break;
      case "minCredits":
        if (numericValue >= 0) {
          setMinCredits(numericValue);
          setMinCreditsState(numericValue);
        }
        break;
      case "maxCredits":
        if (numericValue >= 0) {
          setMaxCredits(numericValue);
          setMaxCreditsState(numericValue);
        }
        break;
      case "semester":
        setSemester(value);
        setSemesterState(value);
        break;
      default:
        break;
    }
  };

  const getSemesters = () => {
    const year = new Date().getFullYear();
    const lastTwoDigits = year.toString().slice(-2);
    return [`${lastTwoDigits}-0`, `${lastTwoDigits}-1`, `${lastTwoDigits}-2`];
  };

  useEffect(() => {
    const semestersList = getSemesters();
    setSemesters(semestersList);
    setSemester(semestersList[0]);
    setSemesterState(semestersList[0]);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="p-4 bg-blueBox max-w-md w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="minCredits" className="block text-textColor">
              {t("minCredits")}
            </label>
            <input
              type="number"
              name="minCredits"
              id="minCredits"
              className="border border-gray-300 rounded-md p-2 w-full text-textColor bg-bgSemesterFormInput"
              onChange={handleChange}
              value={minCredits}
              min="0"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxCredits" className="block text-textColor">
              {t("maxCredits")}
            </label>
            <input
              type="number"
              name="maxCredits"
              id="maxCredits"
              className="border border-gray-300 rounded-md p-2 w-full text-textColor bg-bgSemesterFormInput"
              onChange={handleChange}
              value={maxCredits}
              min="0"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="semester" className="block text-textColor">
            {t("semester")}
          </label>
          <select
            name="semester"
            id="semester"
            className="border border-gray-300 rounded-md p-2 w-full text-textColor bg-bgSemesterFormInput"
            onChange={handleChange}
            value={semester}
          >
            <option value="" disabled>
              {t("Pick a Semester")}
            </option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};