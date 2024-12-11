import React, { useState, useContext, useEffect } from "react";
import { ShiftOption } from "./ShiftOption";
import { useTranslation } from "react-i18next";
import { Download, AddCircle, Save } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { ShiftsContext } from "../../contexts/ShiftsContext";
import { CourseContext } from "../../contexts/CourseContext";
import { AnimatePresence, motion } from "framer-motion";

export const ShiftOptions = () => {
  const { t } = useTranslation();
  const defaultShiftOption = {
    id: uuidv4(),
    name: "",
    section: "",
    professor: "",
    days: [],
    startTimes: [],
    endTimes: [],
    color: "#ffffff",
  };
  const [shiftOptions, setShiftOptions] = useState([defaultShiftOption]);
  const { addShift, setShiftsList } = useContext(ShiftsContext);
  const { setCourses } = useContext(CourseContext);

  const addShiftOption = () => {
    const newShiftOption = {
      id: uuidv4(),
      name: "",
      section: "",
      professor: "",
      days: [],
      startTimes: [],
      endTimes: [],
      color: "#ffffff",
    };
    setShiftOptions([...shiftOptions, newShiftOption]);
    addShift(newShiftOption);
  };

  const removeShiftOption = (id) => {
    const updatedOptions = shiftOptions.filter((option) => option.id !== id);
    setShiftOptions(updatedOptions);
    setShiftsList(updatedOptions);
  };

  const updateShiftOption = (id, updatedCourse) => {
    const updatedOptions = shiftOptions.map((option) => {
      if (option.id === id) {
        return { ...updatedCourse, id };
      }
      return option;
    });
    setShiftOptions(updatedOptions);
    setShiftsList(updatedOptions);
  };

  const copyShiftOption = (shiftOption) => {
    const newShiftOption = { ...shiftOption, id: uuidv4() };
    setShiftOptions([...shiftOptions, newShiftOption]);
    addShift(newShiftOption);
  };

  const saveShiftOptions = () => {
    const addedNames = new Set();
    let fileName = "";

    shiftOptions.forEach((option) => {
      if (!addedNames.has(option.name)) {
        fileName += option.name + "-";
        addedNames.add(option.name);
      }
    });

    fileName = fileName.slice(0, -1) + ".json";

    const dataStr = JSON.stringify(shiftOptions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadShiftOptions = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const shiftOptions = JSON.parse(content);

        const addedCourses = new Set();

        shiftOptions.forEach((option) => {
          const courseKey = `${option.name}-${option.credits}-${option.classesPerWeek}`;

          if (!addedCourses.has(courseKey)) {
            const newCourse = {
              name: option.name,
              credits: option.credits,
              classesPerWeek: option.classesPerWeek,
            };
            setCourses((prevCourses) => {
              const updatedCourses = new Set(prevCourses);
              updatedCourses.add(newCourse);
              return updatedCourses;
            });
            addedCourses.add(courseKey);
          }
        });

        setShiftOptions(shiftOptions);
        setShiftsList(shiftOptions);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-between items-center w-full mb-2"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {t("times")}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-2"
          >
            <motion.button
              onClick={saveShiftOptions}
              className="inline-flex items-center p-2 sm:pl-4 md:pl-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonExport hover:bg-buttonExportHover w-auto sm:w-32 md:w-40"
            >
              <Save />
              <span className="hidden sm:inline">{t("sCourses")}</span>
            </motion.button>
            <input
              type="file"
              accept=".json"
              onChange={loadShiftOptions}
              className="hidden"
              id="load-shift-options-input"
            />
            <label
              htmlFor="load-shift-options-input"
              className="inline-flex items-center p-2 sm:pl-4 md:pl-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonImport hover:bg-buttonImportHover cursor-pointer w-auto sm:w-32 md:w-40"
            >
              <Download />
              <span className="hidden sm:inline">{t("lCourses")}</span>
            </label>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <motion.hr
        initial={{ opacity: 0, x: -0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="border-t-2 border-gray-200 w-full mb-2"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full overflow-y-auto hide-scrollbar"
        style={{ height: "36rem" }}
      >
        <AnimatePresence>
          {shiftOptions.map((option) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <ShiftOption
                index={option.id}
                removeCourse={removeShiftOption}
                copyCourse={copyShiftOption}
                course={option}
                updateCourse={updateShiftOption}
              />
            </motion.div>
          ))}

          <motion.button
            onClick={addShiftOption}
            className="inline-flex items-center p-2 sm:px-2 md:px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-slate-200 w-auto mx-auto my-auto"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <AddCircle />
          </motion.button>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
