import React, { useContext } from "react";
import { CourseContext } from "../contexts/CourseContext";
import { useTranslation } from "react-i18next";

export const SemesterForm = () => {
  const { t } = useTranslation();
  const { courses, setCourses } = useContext(CourseContext);

  return (
    <div className="flex justify-center">
      <form className="border-solid border border-black p-4 w-full sm:w-1/2 bg-formBg">
        <div className="grid grid-cols-2 gap-4 justify-center">
          <div className="mb-4">
            <label htmlFor="minCourses" className="block text-white">
              {t("minCourses")}
            </label>
            <input
              type="number"
              name="minCourses"
              id="minCourses"
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-formBg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxCourses" className="block text-white">
              {t("maxCourses")}
            </label>
            <input
              type="number"
              name="maxCourses"
              id="maxCourses"
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-formBg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="minCredits" className="block text-white">
              {t("minCredits")}
            </label>
            <input
              type="number"
              name="minCredits"
              id="minCredits"
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-formBg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxCredits" className="block text-white">
              {t("maxCredits")}
            </label>
            <input
              type="number"
              name="maxCredits"
              id="maxCredits"
              className="border border-gray-300 rounded-md p-2 w-full text-white bg-formBg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
