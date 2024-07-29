import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CourseContext } from "../contexts/CourseContext";

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

export const CourseSelect = ({ course }) => {
  const { courses, setCourses } = useContext(CourseContext);
  const [open, setOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState({
    name: course,
    credits: "",
    semester: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form with details:", courseDetails);
    handleClose();
  };

  const handleEliminate = () => {
    const updatedCourses = courses.filter((c) => c !== course);
    setCourses(updatedCourses);
    handleClose();
  };

  return (
    <div
      className="course-box text-white p-2 m-1 border border-white cursor-pointer"
      onClick={handleOpen}
    >
      {course}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title">Edit Course</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black">
                Course Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={courseDetails.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="credits" className="block text-black">
                Credits
              </label>
              <input
                type="number"
                name="credits"
                id="credits"
                value={courseDetails.credits}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="semester" className="block text-black">
                Semester
              </label>
              <input
                type="text"
                name="semester"
                id="semester"
                value={courseDetails.semester}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <button type="submit" className="mr-2">
              Save
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Close button clicked");
                handleClose();
              }}
            >
              Close
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Eliminate button clicked");
                handleEliminate();
              }}
              className="ml-2 bg-red-500 text-white p-2 rounded-md"
            >
              Eliminate
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};