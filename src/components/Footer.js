import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/LOGO.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="footerLogo">
        <img src={logo} alt="logo" />
      </Link>
      <span> © Kasa 2020. All rights reserved</span>
    </footer>
  );
};

export default Footer;
