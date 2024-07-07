import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Projects.css";
import Astroworld from "../images/astroworld.png";
import Imedil from "../images/imedil.png";
import Sapiens from "../images/sapiens.svg";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

function Projects() {
  const images = [
    {
      original: Astroworld,
      thumbnail: Astroworld,
      description: "This is the description for the first image",
      link: "https://giorgibarishvili.github.io/Astroworld/",
    },
    {
      original: Imedil,
      thumbnail: Imedil,
      description: "This is the description for the second image",
      link: "https://profile.imedil.ge/login/ge",
    },
    {
      original: Sapiens,
      thumbnail: Sapiens,
      description: "Next project incoming soon... never gonna give you up!",
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
      <div className="d-flex flex-wrap justify-content-center">
        <div className="mt-5">
          esaa chemi ramdenime proeqti, romlebic gavakete martom an mimigia
          monawileoba mis sheqmnashi, titoeuli proeqtis agwera tan dartulia
          surattan da masze daklikebit shegidzliat gadaxvidet linkze
        </div>
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
