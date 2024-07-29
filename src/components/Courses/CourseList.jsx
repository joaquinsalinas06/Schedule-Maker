import React, { useContext, useState } from "react";
import { CourseSelect } from "./CourseSelect";
import { CourseContext } from "../../contexts/CourseContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

export const CourseList = () => {
  const { courses, setCourses } = useContext(CourseContext);
  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    name: "",
    credits: "",
    semester: "",
    classesPerWeek: ""
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

  const addCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, newCourse]);
    setNewCourse({ name: "", credits: "", semester: "", classesPerWeek: "" });
    handleClose();
  };

  return (
    <div className="flex justify-center">
      <button onClick={handleOpen}>Add Course</button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Add New Course</h2>
          <form onSubmit={addCourse}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black">Course Name</label>
              <input type="text" name="name" id="name" value={newCourse.name} onChange={handleChange} required className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="credits" className="block text-black">Credits</label>
              <input type="number" name="credits" id="credits" value={newCourse.credits} onChange={handleChange} required className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="semester" className="block text-black">Semester</label>
              <input type="text" name="semester" id="semester" value={newCourse.semester} onChange={handleChange} required className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="classesPerWeek" className="block text-black">Classes Per Week</label>
              <input type="number" name="classesPerWeek" id="classesPerWeek" value={newCourse.classesPerWeek} onChange={handleChange} required className="border border-gray-300 rounded-md p-2 w-full" />
            </div>
            <button type="submit" className="mr-2">Add Course</button>
            <button type="button" onClick={handleClose}>Close</button>
          </form>
        </Box>
      </Modal>
      {courses.length === 0 ? (
        <p className="text-white">No courses found</p>
      ) : (
        <div className="course-list flex flex-wrap">
          {courses.map((course, index) => (
            <div key={index}>
              <CourseSelect course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
