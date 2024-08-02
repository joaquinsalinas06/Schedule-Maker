import React, { useState, useContext, useEffect } from "react";
import { CourseContext } from "../../contexts/CourseContext";
import Delete from "@mui/icons-material/Delete";
import { CheckCircle, FileCopy } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const CourseOption = ({ index, removeCourse, copyCourse, course, updateCourse}) => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(true);
  const [numClasses, setNumClasses] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(course?.name || "");
  const [sectionName, setSectionName] = useState(course?.section || "");
  const [professor, setProfessor] = useState(course?.professor || "");
  const [days, setDays] = useState(course?.days || []);
  const [startTimes, setStartTimes] = useState(course?.startTimes || []);
  const [endTimes, setEndTimes] = useState(course?.endTimes || []);
  const [color, setColor] = useState(course?.color || "#ffffff");
  const { courses } = useContext(CourseContext);

  useEffect(() => {
    if (selectedCourse) {
      const course = courses.find((course) => course.name === selectedCourse);
      if (course) {
        setNumClasses(parseInt(course.classesPerWeek));
      }
    }
  }, [courses, selectedCourse]);

  useEffect(() => {
    const selectedCourseData = courses.find(
      (course) => course.name === selectedCourse
    );
    const updatedCourse = {
      name: selectedCourse,
      section: sectionName,
      professor: professor,
      days: days.length > 0 ? days : Array(numClasses).fill("Monday"),
      startTimes: startTimes,
      endTimes: endTimes,
      credits: selectedCourseData ? selectedCourseData.credits : null,
      semester: selectedCourseData ? selectedCourseData.semester : null,
      classesPerWeek: numClasses,
      color: color,
    };
    updateCourse(index, updatedCourse);
  }, [selectedCourse, sectionName, professor, days, startTimes, endTimes, color, numClasses]);

  const handleCourseChange = (event) => {
    const selectedCourseName = event.target.value;
    setSelectedCourse(selectedCourseName);
    const selectedCourse = courses.find(
      (course) => course.name === selectedCourseName
    );
    if (selectedCourse) {
      setNumClasses(parseInt(selectedCourse.classesPerWeek));
    }
  };

  const handleSectionChange = (event) => {
    setSectionName(event.target.value);
  };

  const handleProfessorChange = (event) => {
    setProfessor(event.target.value);
  };

  const handleDayChange = (index, event) => {
    const newDays = [...days];
    newDays[index] = event.target.value;
    setDays(newDays);
  };

  const handleStartTimeChange = (index, event) => {
    const newStartTimes = [...startTimes];
    newStartTimes[index] = event.target.value;
    setStartTimes(newStartTimes);
  };

  const handleEndTimeChange = (index, event) => {
    const newEndTimes = [...endTimes];
    newEndTimes[index] = event.target.value;
    setEndTimes(newEndTimes);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    if (selectedCourse) {
      const course = courses.find((course) => course.name === selectedCourse);
      if (course) {
        setNumClasses(parseInt(course.classesPerWeek));
      }
    }
  }, [courses, selectedCourse]);



  const handleCopyCourse = () => {
    const selectedCourseData = courses.find(
      (course) => course.name === selectedCourse
    );
    const copiedCourse = {
      name: selectedCourse,
      section: sectionName,
      professor: professor,
      days: [...days],
      startTimes: [...startTimes],
      endTimes: [...endTimes],
      credits: selectedCourseData ? selectedCourseData.credits : null,
      semester: selectedCourseData ? selectedCourseData.semester : null,
      classesPerWeek: numClasses,
      color: color,
    };
    copyCourse(copiedCourse, index);
  };


  return (
    <div className="relative rounded-lg px-6 pt-6 pb-2 w-full mx-auto mt-4 bg-blueBox shadow-md">
      <button
        onClick={() => removeCourse(index)}
        className="absolute top-2 right-2"
      >
        <Delete />
      </button>
      <button
        onClick={() => handleCopyCourse()}
        className="absolute top-2 right-10"
      >
        <FileCopy />
      </button>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              {t("course")}:
            </label>
            <select
              name="course"
              id="course"
              onChange={handleCourseChange}
              value={selectedCourse}
              className="mt-1 block w-full rounded-md shadow-sm bg-bgCourseOptionInput focus:bg-bgCourseOptionInputHover sm:text-sm"
              required
            >
              <option value="">{t("selCourse")}</option>
              {courses.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>

            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700 mt-4 w-full"
            >
              {t("section")}:
            </label>
            <input
              type="text"
              name="section"
              id="section"
              value={sectionName}
              onChange={handleSectionChange}
              className="mt-1 block w-full rounded-md shadow-sm bg-bgCourseOptionInput focus:bg-bgCourseOptionInputHover sm:text-sm"
              required
            />

            <label
              htmlFor="professor"
              className="block text-sm font-medium text-gray-700 mt-4 w-full"
            >
              {t("professor")}:
            </label>
            <input
              type="text"
              name="professor"
              id="professor"
              value={professor}
              onChange={handleProfessorChange}
              className="mt-1 block w-full rounded-md shadow-sm bg-bgCourseOptionInput focus:bg-bgCourseOptionInputHover sm:text-sm"
              required
            />

            <label
              htmlFor="color"
              className="block text-sm font-medium text-gray-700 mt-4 w-full"
            >
              {t("color")}:
            </label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={handleColorChange}
              className="mt-1 block w-full bg-transparent rounded-md sm:text-sm"
              required
            />
          </div>

          <div className="col-span-1">
            {[...Array(numClasses)].map((_, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <label
                    htmlFor={`day-${index}`}
                    className="block text-sm font-medium text-gray-700 w-full"
                  >
                    {t("day")} {index + 1}:
                  </label>
                  <select
                    name={`day-${index}`}
                    id={`day-${index}`}
                    value={days[index] || ""}
                    onChange={(e) => handleDayChange(index, e)}
                    className="mt-1 block w-full rounded-md bg-bgCourseOptionInput sm:text-sm"
                    required
                  >
                    <option value="">{t("selDay")}</option>
                    <option value="Monday">{t("mon")}</option>
                    <option value="Tuesday">{t("tue")}</option>
                    <option value="Wednesday">{t("wed")}</option>
                    <option value="Thursday">{t("thu")}</option>
                    <option value="Friday">{t("fri")}</option>
                    <option value="Saturday">{t("sat")}</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={`startTime-${index}`}
                      className="block text-sm font-medium text-gray-700 w-full"
                    >
                      {t("start")} {index + 1}:
                    </label>
                    <input
                      type="time"
                      name={`startTime-${index}`}
                      id={`startTime-${index}`}
                      value={startTimes[index] || ""}
                      onChange={(e) => handleStartTimeChange(index, e)}
                      className="mt-1 block w-full rounded-md shadow-sm bg-bgCourseOptionInput focus:bg-bgCourseOptionInputHover sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`endTime-${index}`}
                      className="block text-sm font-medium text-gray-700 w-full"
                    >
                      {t("end")} {index + 1}:
                    </label>
                    <input
                      type="time"
                      name={`endTime-${index}`}
                      id={`endTime-${index}`}
                      value={endTimes[index] || ""}
                      onChange={(e) => handleEndTimeChange(index, e)}
                      className="mt-1 block w-full rounded-md shadow-sm bg-bgCourseOptionInput focus:bg-bgCourseOptionInputHover sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};