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

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "minCourses":
        setMinCourses(Number(value));
        break;
      case "maxCourses":
        setMaxCourses(Number(value));
        break;
      case "minCredits":
        setMinCredits(Number(value));
        break;
      case "maxCredits":
        setMaxCredits(Number(value));
        break;
      case "semester":
        setSemester(value);
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
    setSemesters(getSemesters());
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form className=" p-4 bg-blueBox max-w-md w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="minCourses" className="block text-textColor">
              {t("minCourses")}
            </label>
            <input
              type="number"
              name="minCourses"
              id="minCourses"
              className="border focus:border-red-700 rounded-md p-2 w-full text-textColor bg-bgSemesterFormInput"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxCourses" className="block text-textColor">
              {t("maxCourses")}
            </label>
            <input
              type="number"
              name="maxCourses"
              id="maxCourses"
              className="border border-gray-300 rounded-md p-2 w-full text-textColor bg-bgSemesterFormInput"
              onChange={handleChange}
            />
          </div>
        </div>

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
          >
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
