import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Help = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="p-10 text-white w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("helpTitle")}</h1>

      {[
        {
          title: t("helpIntroTitle"),
          content: <p className="text-lg">{t("helpIntroContent")} :D</p>,
        },
        {
          title: t("helpInitialSetupTitle"),
          content: <p className="text-lg">{t("helpInitialSetupContent")}</p>,
        },
        {
          title: t("helpCourseInputTitle"),
          content: (
            <ul className="list-disc list-inside text-lg ml-5">
              <li>{t("helpCourseInputContent1")}</li>
              <br />
              <li>{t("helpCourseInputContent2")}</li>
            </ul>
          ),
        },
        {
          title: t("helpShiftSetupTitle"),
          content: (
            <ul className="list-disc list-inside text-lg ml-5">
              <li>{t("helpShiftSetupContent1")}</li>
              <br />
              <li>{t("helpShiftSetupContent2")}</li>
            </ul>
          ),
        },
        {
          title: t("helpExportImportTitle"),
          content: <p className="text-lg">{t("helpExportImportContent")}</p>,
        },
        {
          title: t("helpGenerateScheduleTitle"),
          content: <p className="text-lg">{t("helpGenerateScheduleContent")} :)</p>,
        },
      ].map((section, index) => (
        <motion.section
          key={index}
          className="mb-5"
          custom={index}
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.content}
        </motion.section>
      ))}
    </div>
  );
};