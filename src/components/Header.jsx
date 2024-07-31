import React from "react";
import { useTranslation } from "react-i18next";
import { GitHub } from "@mui/icons-material";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-bgHeader px-5 py-5">
      <div className="flex justify-between items-center">
        <div>
          <div>
            <p className="text-white text-2xl mb-2 "> {t("language")}: </p>
          </div>
          <div className="flex">
            <button
              onClick={() => changeLanguage("es")}
              className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mr-3 w-20"
            >
              {t("es")}
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="border bg-white rounded-md px-3 py-1 hover:bg-slate-200 mx-3 w-20"
            >
              {t("en")}
            </button>
          </div>
        </div>

        <div className="text-white text-center flex-grow text-3xl">
          Schedule Maker
        </div>

        <div className="text-white ml-32 mr-8">
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
