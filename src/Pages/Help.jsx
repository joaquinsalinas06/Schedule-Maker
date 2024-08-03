import React from "react";
import { useTranslation } from "react-i18next";

export const Help = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 text-white w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("helpTitle")}</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t("helpIntroTitle")}</h2>
        <p className="text-lg">{t("helpIntroContent")} :D</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("helpInitialSetupTitle")}
        </h2>
        <p className="text-lg">{t("helpInitialSetupContent")}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("helpCourseInputTitle")}
        </h2>
        <ul className="list-disc list-inside text-lg ml-5">
          <li>{t("helpCourseInputContent1")}</li>
          <br />
          <li>{t("helpCourseInputContent2")}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("helpShiftSetupTitle")}
        </h2>
        <ul className="list-disc list-inside text-lg ml-5">
          <li>{t("helpShiftSetupContent1")}</li>
          <br />
          <li>{t("helpShiftSetupContent2")}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          {t("helpExportImportTitle")}
        </h2>
        <p className="text-lg">{t("helpExportImportContent")}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          {t("helpGenerateScheduleTitle")}
        </h2>
        <p className="text-lg">{t("helpGenerateScheduleContent")} :)</p>
      </section>
    </div>
  );
};
