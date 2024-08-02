import React, { useState, useContext } from "react";
import { CourseOption } from "./CourseOption";
import { useTranslation } from "react-i18next";
import { Download, Upload, AddCircle } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid'; 
import { DetailedCourseContext } from "../../contexts/DetailedCourseContext";

export const CourseOptions = () => {
  const { t } = useTranslation();
  const [detailedCourseOptions, setDetailedCourseOptions] = useState([]);
  const { detailedCourses, addDetailedCourse, setDetailedCoursesList } = useContext(DetailedCourseContext);

  const addDetailedCourseOption = () => {
    console.log("Adding a new detailed course option");
    const newDetailedCourseOption = { id: uuidv4(), name: "", section: "", professor: "", days: [], startTimes: [], endTimes: [], color: "#ffffff" };
    setDetailedCourseOptions([...detailedCourseOptions, newDetailedCourseOption]);
    addDetailedCourse(newDetailedCourseOption);
  };

  const removeDetailedCourseOption = (id) => {
    console.log(`Removing detailed course option with id ${id}`);
    const updatedOptions = detailedCourseOptions.filter(option => option.id !== id);
    setDetailedCourseOptions(updatedOptions);
    setDetailedCoursesList(updatedOptions);
  };

  const updateDetailedCourseOption = (id, updatedCourse) => {
    console.log(`Updating detailed course option with id ${id}`);
    const updatedOptions = detailedCourseOptions.map(option => {
      if (option.id === id) {
        return { ...updatedCourse, id };
      }
      return option;
    });
    setDetailedCourseOptions(updatedOptions);
    setDetailedCoursesList(updatedOptions);
  };

  const copyDetailedCourseOption = (detailedCourseOption) => {
    console.log(detailedCourseOption);
    console.log(`Copying detailed course option with id ${detailedCourseOption.id}`);
    const newDetailedCourseOption = { ...detailedCourseOption, id: uuidv4() };
    setDetailedCourseOptions([
      ...detailedCourseOptions,
      newDetailedCourseOption
    ]);
    addDetailedCourse(newDetailedCourseOption);
  };

  const saveDetailedCourseOptions = () => {
    const dataStr = JSON.stringify(detailedCourseOptions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "detailedCourseOptions.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadDetailedCourseOptions = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const detailedCourseOptions = JSON.parse(content);
        setDetailedCourseOptions(detailedCourseOptions);
        setDetailedCoursesList(detailedCourseOptions);
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
            onChange={loadDetailedCourseOptions}
            className="hidden"
            id="load-detailed-course-options-input"
          />
          <label
            htmlFor="load-detailed-course-options-input"
            className="inline-flex items-center pl-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonImport hover:bg-buttonImportHover cursor-pointer w-40"
          >
            <Download />
            {t("lCourses")}
          </label>
          <button
            onClick={saveDetailedCourseOptions}
            className="inline-flex items-center pl-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonExport hover:bg-buttonExportHover w-40"
          >
            <Upload />
            {t("sCourses")}
          </button>
          <button
            onClick={addDetailedCourseOption}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-slate-200"
          >
            <AddCircle />
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 w-full mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {detailedCourseOptions.map((option) => (
          <CourseOption
            key={option.id}
            index={option.id}
            removeCourse={removeDetailedCourseOption}
            copyCourse={copyDetailedCourseOption}
            course={option}
            updateCourse={updateDetailedCourseOption}
          />
        ))}
      </div>
      <button
        onClick={() => console.log(detailedCourseOptions, detailedCourses)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-slate-200"
      >
        Debug
      </button>
    </div>
  );
};