import React from "react";
import logo from "../assets/logo_adobespark.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="" />
      <div className="footer-icons">
        <img className="icon" src={facebook} alt="facebook" />
        <img className="icon" src={twitter} alt="twitter" />
        <img className="icon" src={instagram} alt="instagram" />
        <img className="icon" src={linkedin} alt="linkedin" />
      </div>
      <p className="footer__text">
        La mejor empresa de envios interplanetarios
      </p>
    </footer>
  );
};

export default Footer;
