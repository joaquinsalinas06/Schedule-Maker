import React, { useContext } from "react";
import { CourseSelect } from "./CourseSelect";
import { CourseContext } from "../contexts/CourseContext";

export const CourseList = () => {
  const { courses, setCourses } = useContext(CourseContext);

  const addCourse = (e) => {
    e.preventDefault();
    const course = e.target.course.value;
    setCourses([...courses, course]);
    e.target.reset();
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={addCourse}>
        <input type="text" name="course" id="course" />
        <button type="submit">Add Course</button>
      </form>
      {courses.length === 0 ? (
        <p className="text-white">No courses found</p>
      ) : (
        <div className="course-list flex flex-wrap">
          {courses.map((course, index) => (
            <div key={index}>
              <CourseSelect course={course} />
              <button onClick={() => deleteCourse(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};