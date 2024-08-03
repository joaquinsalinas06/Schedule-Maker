import React, { useState, useContext } from "react";
import { ShiftOption } from "./ShiftOption";
import { useTranslation } from "react-i18next";
import { Download, Upload, AddCircle } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { ShiftsContext } from "../../contexts/ShiftsContext";
import { CourseContext } from "../../contexts/CourseContext";

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
    const dataStr = JSON.stringify(shiftOptions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shiftOptions.json";
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
          const courseKey = `${option.name}-${option.credits}-${option.semester}-${option.classesPerWeek}`;

          if (!addedCourses.has(courseKey)) {
            const newCourse = {
              name: option.name,
              credits: option.credits,
              semester: option.semester,
              classesPerWeek: option.classesPerWeek,
            };
            setCourses((prevCourses) => [...prevCourses, newCourse]);
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
    <div className="flex flex-col items-center w-4/5 mx-auto">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-2xl font-semibold text-white">{t("times")}</h2>
        <div className="flex space-x-2">
          <input
            type="file"
            accept=".json"
            onChange={loadShiftOptions}
            className="hidden"
            id="load-shift-options-input"
          />
          <label
            htmlFor="load-shift-options-input"
            className="inline-flex items-center pl-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonImport hover:bg-buttonImportHover cursor-pointer w-40"
          >
            <Download />
            {t("lCourses")}
          </label>
          <button
            onClick={saveShiftOptions}
            className="inline-flex items-center pl-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonExport hover:bg-buttonExportHover w-40"
          >
            <Upload />
            {t("sCourses")}
          </button>
          <button
            onClick={addShiftOption}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-slate-200"
          >
            <AddCircle />
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 w-full mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {shiftOptions.map((option) => (
          <ShiftOption
            key={option.id}
            index={option.id}
            removeCourse={removeShiftOption}
            copyCourse={copyShiftOption}
            course={option}
            updateCourse={updateShiftOption}
          />
        ))}
      </div>
    </div>
  );
};
