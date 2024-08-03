import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CourseContext } from "../../contexts/CourseContext";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CourseSelect = ({ course }) => {
  const { t } = useTranslation();
  const { courses, setCourses } = useContext(CourseContext);
  const [open, setOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState(course);

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCourses = courses.map((c) =>
      c.name === course.name ? courseDetails : c
    );
    setCourses(updatedCourses);
    handleClose();
  };

  const handleEliminate = (e) => {
    e.stopPropagation();
    const updatedCourses = courses.filter((c) => c.name !== course.name);
    setCourses(updatedCourses);
    handleClose();
  };

  return (
    <div
      className="course-box text-textColor p-6 rounded-lg shadow-lg cursor-pointer bg-courseListSelectBg hover:bg-courseListSelectBgHover"
      onClick={handleOpen}
    >
      <div className="flex flex-col justify-between items-start space-y-2 w-48 pr-2">
        <div className="text-xl font-bold">{course.name}</div>
        <div className="text-md">
          {t("cCredits")}: {course.credits}{" "}
        </div>
        <div className="text-md">
          {t("cSemester")}: {course.semester}
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} onClick={(e) => e.stopPropagation()}>
          <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                {t("cName")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={courseDetails.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="credits" className="block text-gray-700">
                {t("cCredits")}
              </label>
              <input
                type="number"
                name="credits"
                id="credits"
                value={courseDetails.credits}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="semester" className="block text-gray-700">
                {t("cSemester")}
              </label>
              <input
                type="text"
                name="semester"
                id="semester"
                value={courseDetails.semester}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="classesPerWeek" className="block text-gray-700">
                {t("cClasses")}
              </label>
              <input
                type="number"
                name="classesPerWeek"
                id="classesPerWeek"
                value={courseDetails.classesPerWeek}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t("save")}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                {t("close")}
              </button>
              <button
                type="button"
                onClick={handleEliminate}
                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Eliminate
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
