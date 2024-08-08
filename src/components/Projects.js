import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Projects.css";
import Astroworld from "../images/astroworld.png";
import Imedil from "../images/imedil.png";
import Sapiens from "../images/sapiens.svg";
import { useTranslation } from "react-i18next";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

function Projects() {
  const { t } = useTranslation();

  const images = [
    {
      original: Astroworld,
      thumbnail: Astroworld,
      description: t("astroworld"),
      link: "https://giorgibarishvili.github.io/Astroworld/",
    },
    {
      original: Imedil,
      thumbnail: Imedil,
      description: t("imedil"),
      link: "https://profile.imedil.ge/login/ge",
    },
    {
      original: Sapiens,
      thumbnail: Sapiens,
      description: t("nextProject"),
    },
  ];

  const ImageClicked = (link) => {
    window.open(link, "_blank");
  };

  const renderItem = (item) => {
    return (
      <div className="image-gallery-item">
        <img
          src={item.original}
          alt=""
          onClick={() => ImageClicked(item.link)}
        />
        <div className="image-gallery-description">
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex flex-wrap justify-content-center mb-4">
        <div className="mt-5">{t("projectsText")}</div>
        <div className="projects mt-5">
          <ImageGallery
            items={images}
            renderItem={renderItem}
            showFullscreenButton={false}
            autoPlay={true}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
