import React from "react";
import { SemesterForm } from "./SemesterForm";
import { CourseList } from "./Courses/CourseList";
import { motion } from "framer-motion";

export const Information = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 0.5, delay:0.3 }}
    >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 ">
      <SemesterForm />
      <CourseList />
    </div>
    </motion.div>
  );
};
