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
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="p-10 text-white w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("mainTitle")}</h1>

      {[
        {
          title: t("introTitle"),
          content: (
            <div className="text-lg space-y-4">
              <p>{t("introContentPart1")}</p>
              <p>{t("introContentPart2")}</p>
              <p>{t("introContentPart3")}</p>
            </div>
          ),
        },
        {
          title: t("initialSetupTitle"),
          content: (
            <div className="text-lg space-y-4">
              <p>{t("initialSetupContentPart1")}</p>
              <p>{t("initialSetupContentPart2")}</p>
            </div>
          ),
        },
        {
          title: t("courseInputTitle"),
          content: (
            <ul className="list-disc list-inside text-lg ml-5 space-y-4">
              <li>
                {t("courseInputContentPart1")}
                <ul className="list-disc list-inside ml-10 mt-2">
                  <li>{t("courseInputContentPart2")}</li>
                  <li>{t("courseInputContentPart3")}</li>
                </ul>
              </li>
              <li>
                {t("courseInputContentPart4")}
                <ul className="list-disc list-inside ml-10 mt-2">
                  <li>{t("courseInputContentPart5")}</li>
                  <li>{t("courseInputContentPart6")}</li>
                </ul>
              </li>
              <li>{t("courseInputContentPart7")}</li>
            </ul>
          ),
        },
        {
          title: t("saveOptionsTitle"),
          content: (
            <div className="text-lg space-y-4">
              <p>{t("saveOptionsContentPart1")}</p>
            </div>
          ),
        },
        {
          title: t("generateScheduleTitle"),
          content: (
            <div className="text-lg space-y-4">
              <p>{t("generateScheduleContentPart1")}</p>
              <p>{t("generateScheduleContentPart2")}</p>
            </div>
          ),
        },
      ].map((section, index) => (
        <motion.section
          key={index}
          className="mb-10"
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
