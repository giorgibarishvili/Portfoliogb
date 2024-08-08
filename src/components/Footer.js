import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactComponent as Facebook } from "../images/facebook-icon.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin-icon.svg";
import { ReactComponent as Github } from "../images/github-icon.svg";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>{t("about")}</h2>
            <Link to="/About">{t("aboutMe")}</Link>
            <Link to="/Projects">{t("projects")}</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>{t("social")}</h2>
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100010572222331"
            >
              Facebook
            </Link>
            <Link target="_blank" to="https://github.com/giorgibarishvili">
              Github
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/giorgi-b-125912ba/"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            Giorgi Barishvili Portfolio © 2024
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="https://www.facebook.com/profile.php?id=100010572222331"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </Link>
            <Link
              className="social-icon-link"
              to="https://github.com/giorgibarishvili"
              target="_blank"
              aria-label="Github"
            >
              <Github />
            </Link>
            <Link
              className="social-icon-link"
              to="https://www.linkedin.com/in/giorgi-b-125912ba/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
