import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Yape from "../assets/Yape.png";

export const AboutMe = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="p-10 text-white w-3/4 mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-6"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeTitle")}
      </motion.h1>

      <motion.p
        className="text-lg mb-4"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeIntro")}
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold mb-4"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeContactTitle")}
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        custom={3}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeContactInstructions")}
      </motion.p>
      <motion.ul
        className="list-disc list-inside text-lg ml-5 mb-6"
        custom={4}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <li>
          <strong>{t("aboutMeGitHub")}: </strong>
          <a
            href="https://github.com/joaquinsalinas06"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/joaquinsalinas06
          </a>
        </li>
        <li>
          <strong>{t("aboutMePersonalEmail")}: </strong>
          <a
            href="mailto:joaquinsalinassalas@gmail.com"
            className="text-blue-400"
          >
            joaquinsalinassalas@gmail.com
          </a>
        </li>
        <li>
          <strong>{t("aboutMeUniversityEmail")}: </strong>
          <a
            href="mailto:joaquin.salinas@utec.edu.pe"
            className="text-blue-400"
          >
            joaquin.salinas@utec.edu.pe
          </a>
        </li>
        <li>
          <strong>{t("aboutMeInstagram")}: </strong>
          <a
            href="https://www.instagram.com/salins.uwu/"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            @salinsuwu
          </a>
        </li>
      </motion.ul>

      <motion.h2
        className="text-2xl font-semibold mb-4"
        custom={5}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeSupportTitle")}
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        custom={6}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeSupportInstructions")}
      </motion.p>
      <motion.ul
        className="list-disc list-inside text-lg ml-5 mb-6"
        custom={7}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <li>
          <strong>{t("aboutMePayPal")}: </strong>
          <a
            href="https://paypal.me/salinsuwu?country.x=PE&locale.x=es_XC"
            className="text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            paypal.me/salinsuwu
          </a>
        </li>
        <li>
          <strong>{t("aboutMeYape")}:</strong>
          <motion.img
            src={Yape}
            alt="Código de Yape"
            className="mt-2 w-4/5 sm:w-1/5 mx-auto"
            custom={8}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          />
        </li>
      </motion.ul>

      <motion.p
        className="text-lg"
        custom={9}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {t("aboutMeThanks")}
      </motion.p>
    </div>
  );
};
