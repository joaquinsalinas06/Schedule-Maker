import React, { useContext, useState } from "react";
import { CourseSelect } from "./CourseSelect";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CourseContext } from "../../contexts/CourseContext";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

const courseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export const CourseList = () => {
  const { t } = useTranslation();
  const { courses, addCourse } = useContext(CourseContext);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    credits: "",
    classesPerWeek: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleAddCourse = (e) => {
    e.preventDefault();
    addCourse(newCourse);
    setNewCourse({ name: "", credits: "", classesPerWeek: "" });
    handleClose();
  };

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleOpen}
        className="mt-4 inline-flex items-center pl-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonCourseList hover:bg-buttonCourseListHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonCourseList w-32 "
      >
        {t("addCourse")}
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 className="text-xl font-semibold mb-4">{t("addNCourse")}</h2>
          <form onSubmit={handleAddCourse}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                {t("cName")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={newCourse.name}
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
                value={newCourse.credits}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
                min="1"
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
                value={newCourse.classesPerWeek}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 w-full"
                min="1"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-28"
              >
                {t("addCourse")}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-20 text-center"
              >
                {t("close")}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {courses.size === 0 ? (
          <p className="text-white mt-4 md:col-span-3">{t("noCFound")}</p>
        ) : (
          Array.from(courses).map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={courseVariants}
              viewport={{ once: true }}
            >
              <CourseSelect course={course} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};
