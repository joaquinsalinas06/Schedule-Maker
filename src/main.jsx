import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CourseProvider } from "./contexts/CourseContext.jsx";
import { DetailedCourseProvider } from "./contexts/DetailedCourseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DetailedCourseProvider>
  <CourseProvider>
    <App />
  </CourseProvider>
  </DetailedCourseProvider>
);
