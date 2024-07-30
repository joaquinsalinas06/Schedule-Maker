import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CourseProvider } from "./contexts/CourseContext.jsx";
import { DetailedCourseProvider } from "./contexts/DetailedCourseContext.jsx";
import i18n from "./i18n.js";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
  <DetailedCourseProvider>
  <CourseProvider>
    <App />
  </CourseProvider>
  </DetailedCourseProvider>
  </I18nextProvider>
);
