import React, { useContext } from "react";
import { CourseContext } from "./contexts/CourseContext";
import { MainPage } from "./Pages/MainPage";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Help } from "./Pages/Help";
import { Footer } from "./components/Footer";

function App() {
  const { courses } = useContext(CourseContext);

  const { t, i18n } = useTranslation();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
