import "../styles/About.css";
import { motion } from "framer-motion";
import Appear from "./animations/Appear";
import { useTranslation } from "react-i18next";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};
function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mt-5"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-5 row information">
        <div className="about-me mb-2 col-12">{t("aboutMe")}</div>
        <div className="ragaca-span col-12">
          <Appear>{t("aboutText")}</Appear>
        </div>
      </div>
      <div className="information pt-4 mb-5 row">
        <div className="about-me mb-2 col-12">{t("techSkills")}</div>
        <div className="ragaca-span">
          <Appear>{t("techText")}</Appear>
        </div>
      </div>
      <div className="information pt-4 mb-5 row">
        <div className="about-me mb-2 col-12">{t("education")}</div>
        <div className="ragaca-span">
          <Appear>{t("educationText")}</Appear>
        </div>
      </div>
      <div className="information pt-4 mb-5 row">
        <div className="about-me mb-2 col-12">{t("work")}</div>
        <div className="ragaca-span">
          <Appear>{t("workText")}</Appear>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
