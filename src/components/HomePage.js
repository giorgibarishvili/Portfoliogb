// import { Fade } from "react-awesome-reveal";
import "../styles/Homepage.css";
import Appear from "./animations/Appear";
import Reveal from "./animations/Reveal";
// import { ReactComponent as Programmer } from "../images/computer-programmer.svg";
import Programmer1 from "../images/programming.png";
import InkStain from "../images/ink-stain-2.png";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ModalPop from "./ModalPop";
import { toast } from "react-toastify";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

function HomePage() {
  const modalRef = useRef(null);
  const { t } = useTranslation();
  const [messageBox, setMessageBox] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEMail] = useState("");
  const [eMailTouched, setEmailTouched] = useState(false);
  const [userNameTouched, setUserNameTouched] = useState(false);
  const [messageBoxTouched, setMessageBoxTouched] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOnClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  function fromSubmited(event) {
    event.preventDefault();
    if (!eMail || !userName || !messageBox) {
      setEmailTouched(true);
      setUserNameTouched(true);
      setMessageBoxTouched(true);
      toast.error("გთხოვთ შეავსოთ ყველა ველი");
      return;
    }
    const formObj = {
      msg: messageBox,
      name: userName,
      mail: eMail,
    };
    setIsLoading(true);
    fetch(
      "https://portfolio-1e2ea-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        method: "POST",
        body: JSON.stringify(formObj),
      }
    ).then(({ ok }) => {
      setIsLoading(false);
      if (ok) {
        setEMail("");
        setUserName("");
        setMessageBox("");
        setMessageBoxTouched("");
        setUserNameTouched("");
        setEmailTouched("");
        toast.success("მესიჯი წარმატებით გაიგზავნა");
      } else {
        toast.error("მესიჯი ვერ გაიგზავნა");
      }
    });
  }
  return (
    <motion.div
      className="container main"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="who-am-i mt-5 mb-5 me-3 ms-3">
        <div className="greetings">
          <Appear>
            {t("greetings")}
            <br />
            {t("description")}
          </Appear>
        </div>
        <Reveal>
          <div className="homeimg ">
            <img src={InkStain} alt="Ink Stain" className="ink-stain" />
            <img src={Programmer1} alt="Programmer" className="programmer" />
          </div>
          {/* <Programmer className="programmer" /> */}
        </Reveal>
      </div>
      <div className="mt-5 mb-5 modal-div me-3 ms-3">
        <div className="pt-5 mb-3">
          <Appear>
            This is my PORTFOLIO and in case you are wondering
            <br />
            how it was created, just click this button below!
          </Appear>
        </div>
        <Reveal>
          <button className="morph-btn" onClick={() => setOnClose(true)}>
            modal
          </button>
        </Reveal>
      </div>
      {onClose && (
        <ModalPop onClose={setOnClose} size={"lg"} ref={modalRef}>
          <div className="row text-center">
            <div className="col-12 mx-auto">
              <div className="modal-text mt-1">
                <div className="d-flex align-items-center ab-portfolio col-8">
                  {t("homeModal")}
                </div>
                <ul className="col-4 frameworks-list">
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>bootstrap</li>
                  <li>router-dom</li>
                  <li>I18N</li>
                  <li>awesome-reveal</li>
                  <li>framer-motion</li>
                  <li>embla-carousel</li>
                </ul>
              </div>
              {/* <div className="mx-auto mt-5 mb-3 d-flex justify-content-center">
                <div className="col-md-6 d-flex justify-content-end">
                  <button
                    className="no-btn me-3"
                    onClick={() => setOnClose(false)}
                  >
                    {t("no")}
                  </button>
                </div>
                <div className="col-md-6 d-flex ">
                  <button
                    className="yes-btn"
                    onClick={() => {
                      setOnClose(false);
                    }}
                  >
                    {t("yes")}
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </ModalPop>
      )}
      <div className="form d-md-flex me-3 ms-3">
        <div
          className="me-5 align-items-center d-flex"
          style={{ width: "300px" }}
        >
          <Appear>
            {t("messageMe")} <br />
            {t("myMail")} Barishili2001@gmail.com
          </Appear>
        </div>
        <form className="form ms-md-5 mt-4">
          <Reveal>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={`form-control${
                  userNameTouched && !userName ? " is-invalid" : ""
                }`}
                id="floatingInput"
                value={userName}
                placeholder=""
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">{t("nameInput")}</label>
              {userNameTouched && !userName && (
                <span className="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className="form-floating input-frame pb-5">
              <input
                type="text"
                className={`form-control${
                  eMailTouched && !eMail ? " is-invalid" : ""
                }`}
                id="floatingInput"
                value={eMail}
                placeholder=""
                onChange={(e) => setEMail(e.target.value)}
                autoComplete="off"
                required
              />
              <label htmlFor="floatingInput">{t("emailInput")}</label>
              {eMailTouched && !eMail && (
                <span className="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className="form-floating input-frame pb-3">
              <textarea
                className={`input-field textarea form-floating form-control ${
                  messageBoxTouched && !messageBox ? " is-invalid" : ""
                }`}
                id="floatingInput"
                placeholder=""
                value={messageBox}
                onChange={(e) => setMessageBox(e.target.value)}
                required
              ></textarea>
              <label htmlFor="floatingInput">{t("textInput")}</label>
              {messageBoxTouched && !messageBox && (
                <span className="text-danger error-validation-text">
                  {t("mandatory")}
                </span>
              )}
            </div>
          </Reveal>
          <button
            className="mb-5 morph-btn"
            type="submit"
            onClick={fromSubmited}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
export default HomePage;
