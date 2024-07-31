import React, { useState, useContext } from "react";
import { CourseOption } from "./CourseOption";
import { DetailedCourseContext } from "../../contexts/DetailedCourseContext";
import { useTranslation } from "react-i18next";
import { Download, Upload, AddCircle } from "@mui/icons-material";

export const CourseOptions = () => {
  const { t } = useTranslation();
  const { detailedCourses, addDetailedCourse, setDetailedCoursesList } =
    useContext(DetailedCourseContext);
  const [courseOptions, setCourseOptions] = useState([{ id: 1 }]);

  const addCourse = () => {
    setCourseOptions([...courseOptions, { id: courseOptions.length + 1 }]);
  };

  const removeCourse = (index) => {
    const updatedOptions = courseOptions.filter((_, i) => i !== index);
    setCourseOptions(updatedOptions);
  };

  const saveCourses = () => {
    const dataStr = JSON.stringify(detailedCourses, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "detailedCourses.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadCourses = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const courses = JSON.parse(content);
        setDetailedCoursesList(courses);
        setCourseOptions(courses.map((_, index) => ({ id: index + 1 })));
      };
      reader.readAsText(file);
      alert(t("alMessage"));
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
            onChange={loadCourses}
            className="hidden"
            id="load-courses-input"
          />
          <label
            htmlFor="load-courses-input"
            className="inline-flex items-center pl-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonImport hover:bg-buttonImportHover cursor-pointer w-40"
          >
            <Download />
            {t("lCourses")}
          </label>
          <button
            onClick={saveCourses}
            className="inline-flex items-center pl-5 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-buttonExport hover:bg-buttonExportHover w-40"
          >
            <Upload />
            {t("sCourses")}
          </button>
          <button
            onClick={addCourse}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-slate-200"
          >
            <AddCircle />
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200 w-full mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {courseOptions.map((_, index) => (
          <CourseOption key={index} index={index} removeCourse={removeCourse} />
        ))}
      </div>
    </div>
  );
};
