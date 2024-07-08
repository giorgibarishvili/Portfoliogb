import { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Button from "./Button.js";
import i18n from "./i18n/i18n";
import { useTranslation } from "react-i18next";
import { ReactComponent as GithubLogo } from "../images/github-mark-white.svg";
import { ReactComponent as Linkedin } from "../images/icons8-linkedin.svg";
import Georgian from "../images/GeorgiaFlag.svg";
import Kingdom from "../images/UnitedKingdomFlag.svg";
import { ReactComponent as DownArrow } from "../images/chevron-down.svg";
import { ReactComponent as BurgerMenu } from "../images/bars-solid.svg";
import { ReactComponent as BurgerMenuWhite } from "../images/bars-white.svg";
import { ReactComponent as CloseMark } from "../images/xmark-solid.svg";
import { ReactComponent as CloseMarkWhite } from "../images/xmark-white.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const sideBarRef = useRef(null);

  const [lang, setLang] = useState("en");
  const [activeButton, setActiveButton] = useState("");
  const [showLang, setShowLang] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function DarkMode() {
    if (darkMode) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  }
  function changeBetweenLanguages() {
    const newLang = lang === "en" ? "ka" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  }

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const setActiveButtonBasedOnPath = (pathname) => {
    switch (pathname) {
      case "/":
        setActiveButton("home");
        break;
      case "/About":
        setActiveButton("about");
        break;
      case "/Projects":
        setActiveButton("projects");
        break;
      default:
        setActiveButton("");
    }
  };

  useEffect(() => {
    setActiveButtonBasedOnPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLang(false);
      }
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setSideBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, sideBarRef]);
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBar]);

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <div className="row">
      <div
        className="menu-icon"
        onClick={() => setSideBar(!sideBar)}
        ref={sideBarRef}
      >
        {sideBar ? (
          darkMode ? (
            <CloseMarkWhite />
          ) : (
            <CloseMark />
          )
        ) : darkMode ? (
          <BurgerMenuWhite />
        ) : (
          <BurgerMenu />
        )}
      </div>
      <div
        className={`nav-menu${sideBar ? " active" : ""} navbar container-fluid`}
      >
        <div className="ms-md-5 col-xl-8">
          <Link onClick={closeSideBar} to="/" className="">
            <Button
              className={`me-3 ${activeButton === "home" ? "active" : ""}`}
              onClick={() => handleButtonClick("home")}
            >
              {t("home")}
            </Button>
          </Link>
          <Link onClick={closeSideBar} to="/About">
            <Button
              className={`me-3 ${activeButton === "about" ? "active" : ""}`}
              onClick={() => handleButtonClick("about")}
            >
              {t("about")}
            </Button>
          </Link>
          <Link onClick={closeSideBar} to="/Projects">
            <Button
              className={`me-3 ${activeButton === "projects" ? "active" : ""}`}
              onClick={() => handleButtonClick("projects")}
            >
              {t("projects")}
            </Button>
          </Link>
          <a
            href="portfolio/src/images/Giorgi Barishvili.pdf"
            download="Giorgi Barishvili CV"
            target="_blank"
          >
            <Button>CV</Button>
          </a>
        </div>
        <div className="nav-links me-md-5 col-md-3 d-flex justify-content-center align-items-center">
          <div class="form-check form-switch">
            <input
              className="form-check-input me-md-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={() => {
                setDarkMode(!darkMode);
                DarkMode();
              }}
            />
          </div>
            {/* <label class="form-check-label" for="flexSwitchCheckChecked">
            Dark mode
            </label> */}
          {/* <label class="switch">
            <input
              type="checkbox"
              onClick={() => {
                setDarkMode(!darkMode);
                DarkMode();
              }}
            />
            <span class="slider round"></span>
          </label> */}
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropbtn d-flex"
              onClick={() => setShowLang((item) => !item)}
            >
              <img
                className="pe-2"
                src={lang !== "ka" ? Kingdom : Georgian}
                alt=""
              />
              {lang === "ka" ? "ქარ" : "Eng"}
              <DownArrow className="ms-1" />
            </button>
            {showLang && (
              <div
                className="dropdown-content"
                style={{ minWidth: "100px", marginRight: "-4px" }}
              >
                <div
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowLang(false);
                    changeBetweenLanguages();
                  }}
                >
                  <img
                    className="pe-2"
                    src={lang === "ka" ? Kingdom : Georgian}
                    alt=""
                  />
                  {lang !== "ka" ? "ქარ" : "Eng"}
                </div>
              </div>
            )}
          </div>
          <a
            href="https://github.com/giorgibarishvili"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link ms-md-2"
          >
            <GithubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/giorgi-b-125912ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link ms-md-4"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
