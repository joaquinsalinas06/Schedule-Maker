import React from "react";
import { useTranslation } from "react-i18next";
import { GitHub } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { CalendarMonth } from "@mui/icons-material";

export const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const MainPage = () => {
    navigate("/");
  };

  const Help = () => {
    navigate("/help");
  };

  return (
    <header className="bg-bgHeader px-5 py-3">
      <div className="flex justify-between items-center">
        <div>
          <div>
            <p className="text-white text-lg mb-2 "> {t("language")} </p>
          </div>
          <div className="flex">
            <button
              onClick={() => changeLanguage("es")}
              className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mr-2 w-20"
            >
              {t("es")}
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mx-2 w-20"
            >
              {t("en")}
            </button>
          </div>
        </div>

        <div className="text-white text-center flex-grow text-3xl">
          <a onClick={MainPage} className="cursor-pointer">
            Schedule Maker
          </a>
        </div>

        <div className="text-white ml-6 mr-8">
          <a onClick={MainPage}>
            <button className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 text-black mr-4 mt-2 ">
              <CalendarMonth />
            </button>
          </a>
          <a>
            <button
              onClick={Help}
              className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 text-black mr-6 mt-2 w-16 "
            >
              {t("help")}
            </button>
          </a>

          <a
            href="https://github.com/joaquinsalinas06/Scheduler-Maker"
            target="_blank"
          >
            <GitHub className="cursor-pointer" style={{ fontSize: 44 }} />
          </a>
        </div>
      </div>
    </header>
  );
};
