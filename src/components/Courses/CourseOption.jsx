import React, { useState, useContext, useEffect } from "react";
import { CourseContext } from "../../contexts/CourseContext";
import { DetailedCourseContext } from "../../contexts/DetailedCourseContext";
import Delete from "@mui/icons-material/Delete";

export const CourseOption = ({ index, removeCourse }) => {
  const [showButton, setShowButton] = useState(true);
  const [numClasses, setNumClasses] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [professor, setProfessor] = useState("");
  const [days, setDays] = useState([]);
  const [startTimes, setStartTimes] = useState([]);
  const [endTimes, setEndTimes] = useState([]);
  const { courses } = useContext(CourseContext);
  const { addDetailedCourse } = useContext(DetailedCourseContext);

  const handleCourseChange = (event) => {
    const selectedCourseName = event.target.value;
    setSelectedCourse(selectedCourseName);
    const selectedCourse = courses.find(course => course.name === selectedCourseName);
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

  const handleAddCourse = () => {
    const selectedCourseData = courses.find(course => course.name === selectedCourse);
    const course = {
      name: selectedCourse,
      section: sectionName,
      professor: professor,
      days: days.length > 0 ? days : Array(numClasses).fill("Monday"),
      startTimes: startTimes,
      endTimes: endTimes,
      credits: selectedCourseData ? selectedCourseData.credits : null,
      semester: selectedCourseData ? selectedCourseData.semester : null,
      classesPerWeek: numClasses
    };
    addDetailedCourse(course);
    setShowButton(false);
  };

  useEffect(() => {
    if (selectedCourse) {
      const course = courses.find(course => course.name === selectedCourse);
      if (course) {
        setNumClasses(parseInt(course.classesPerWeek));
      }
    }
  }, [courses, selectedCourse]);

  const isFormComplete = () => {
    if (!selectedCourse || !sectionName || !professor) {
      return false;
    }
    for (let i = 0; i < numClasses; i++) {
      if (!days[i] || !startTimes[i] || !endTimes[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="relative border border-double border-gray-300 rounded-lg p-6 w-full mx-auto my-4 bg-white shadow-md">
      <button onClick={() => removeCourse(index)} className="absolute top-2 right-2">
        <Delete/>
      </button>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course:</label>
            <select
              name="course"
              id="course"
              onChange={handleCourseChange}
              value={selectedCourse}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select a course</option>
              {courses.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>

            <label htmlFor="section" className="block text-sm font-medium text-gray-700 mt-4">Section:</label>
            <input
              type="text"
              name="section"
              id="section"
              value={sectionName}
              onChange={handleSectionChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />

            <label htmlFor="professor" className="block text-sm font-medium text-gray-700 mt-4">Professor:</label>
            <input
              type="text"
              name="professor"
              id="professor"
              value={professor}
              onChange={handleProfessorChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="col-span-1">
            {[...Array(numClasses)].map((_, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <label htmlFor={`day-${index}`} className="block text-sm font-medium text-gray-700">Day {index + 1}:</label>
                  <select
                    name={`day-${index}`}
                    id={`day-${index}`}
                    value={days[index] || ""}
                    onChange={(e) => handleDayChange(index, e)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`startTime-${index}`} className="block text-sm font-medium text-gray-700">Start Time {index + 1}:</label>
                    <input
                      type="time"
                      name={`startTime-${index}`}
                      id={`startTime-${index}`}
                      value={startTimes[index] || ""}
                      onChange={(e) => handleStartTimeChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor={`endTime-${index}`} className="block text-sm font-medium text-gray-700">End Time {index + 1}:</label>
                    <input
                      type="time"
                      name={`endTime-${index}`}
                      id={`endTime-${index}`}
                      value={endTimes[index] || ""}
                      onChange={(e) => handleEndTimeChange(index, e)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showButton && (
          <button
            type="button"
            onClick={handleAddCourse}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            disabled={!isFormComplete()}
          >
            Add Course
          </button>
        )}
      </form>
    </div>
  );
};
