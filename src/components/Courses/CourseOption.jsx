import React, { useState, useContext, useEffect } from "react";
import { CourseContext } from "../../contexts/CourseContext";

export const CourseOption = () => {
  const [numClasses, setNumClasses] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [sectionName, setSectionName] = useState("");
  const { courses } = useContext(CourseContext);

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

  useEffect(() => {
    if (selectedCourse) {
      const course = courses.find(course => course.name === selectedCourse);
      if (course) {
        setNumClasses(parseInt(course.classesPerWeek));
      }
    }
  }, [courses, selectedCourse]);

  return (
    <div className="border border-double border-gray-300 rounded-lg p-6 w-4/5 mx-auto my-4 bg-white shadow-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course:</label>
          <select
            name="course"
            id="course"
            onChange={handleCourseChange}
            value={selectedCourse}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section:</label>
          <input 
            type="text" 
            name="section" 
            id="section" 
            value={sectionName} 
            onChange={handleSectionChange} 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
          />
        </div>

        <div>
          <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">Professor:</label>
          <input type="text" name="teacher" id="teacher" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        {[...Array(numClasses)].map((_, index) => (
          <div key={index} className="space-y-2">
            <div>
              <label htmlFor={`day-${index}`} className="block text-sm font-medium text-gray-700">Day {index + 1}:</label>
              <select name={`day-${index}`} id={`day-${index}`} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>

            <div>
              <label htmlFor={`initialTime-${index}`} className="block text-sm font-medium text-gray-700">Initial Time {index + 1}:</label>
              <input
                type="time"
                name={`initialTime-${index}`}
                id={`initialTime-${index}`}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor={`finalTime-${index}`} className="block text-sm font-medium text-gray-700">Final Time {index + 1}:</label>
              <input
                type="time"
                name={`finalTime-${index}`}
                id={`finalTime-${index}`}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};
