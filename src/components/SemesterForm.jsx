import React, { useContext } from "react";
import { CourseContext } from "../contexts/CourseContext";

export const SemesterForm = () => {
  const { courses, setCourses } = useContext(CourseContext);

  return (
    <div className="flex justify-center">
      <form className="border-solid border border-black p-4 w-full sm:w-1/2 bg-formBg">
        <div className="grid grid-cols-2 gap-4 justify-center">
          <div className="mb-4">
            <label htmlFor="minCourses" className="block text-white">
              Min Courses
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
              Max Courses
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
              Min Credits
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
              Max Credits
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
