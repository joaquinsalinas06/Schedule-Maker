import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GitHub, CalendarMonth, ContactPage } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const MainPage = () => {
    navigate("/");
  };

  const Help = () => {
    navigate("/help");
  };

  const AboutMe = () => {
    navigate("/aboutme");
  };

  return (
    <motion.header
      className="bg-bgHeader py-4 shadow-md"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center px-6">
        <div className="flex flex-row items-center mb-4 sm:mb-0 space-x-2">
          <button
            onClick={() => changeLanguage("es")}
            className="border border-gray-300 bg-white rounded-md hover:bg-gray-200 px-2 sm:px-3 py-1 sm:py-2 text-sm w-16 sm:w-20 font-semibold"
          >
            {t("es")}
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="border border-gray-300 bg-white rounded-md hover:bg-gray-200 px-2 sm:px-3 py-1 sm:py-2 text-sm w-16 sm:w-20 font-semibold"
          >
            {t("en")}
          </button>
        </div>

        <div className="text-white text-center flex-grow text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">
          <a onClick={MainPage} className="cursor-pointer">
            Schedule Maker
          </a>
        </div>

        <div className="flex flex-row sm:flex-row items-center space-x-2 sm:space-x-4">
          <button
            onClick={MainPage}
            className="border border-gray-300 bg-white rounded-md hover:bg-gray-200 text-black p-1"
          >
            <CalendarMonth />
          </button>
          <button
            onClick={AboutMe}
            className="border border-gray-300 bg-white rounded-md hover:bg-gray-200 text-black p-1"
          >
            <ContactPage />
          </button>
          <button
            onClick={Help}
            className="border border-gray-300 bg-white rounded-md hover:bg-gray-200 text-black py-1 sm:py-2 text-sm w-12 sm:w-16 font-semibold"
          >
            <span>{t("help")}</span>
          </button>
          <a
            href="https://github.com/joaquinsalinas06/Scheduler-Maker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <GitHub className="cursor-pointer" style={{ fontSize: 36 }} />
          </a>
        </div>
      </div>
    </motion.header>
  );
};
