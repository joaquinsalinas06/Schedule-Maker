import { MainPage } from "./Pages/MainPage";
import { AboutMe } from "./Pages/AboutMe";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Help } from "./Pages/Help";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
