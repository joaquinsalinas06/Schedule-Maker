import React, { useContext } from "react";
import { CourseContext } from "../contexts/CourseContext";
import { useTranslation } from "react-i18next";

export const SemesterForm = () => {
  const { t } = useTranslation();
  const { courses, setCourses } = useContext(CourseContext);

  return (
    <div className="flex justify-center items-center h-full">
      <form className="border-solid border border-black p-4 bg-bgSemesterForm max-w-md w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="minCourses" className="block text-textColor">
              {t("minCourses")}
            </label>
            <input
              type="number"
              name="minCourses"
              id="minCourses"
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-bgSemesterFormInput"
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
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-bgSemesterFormInput"
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
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-bgSemesterFormInput"
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
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-bgSemesterFormInput"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
