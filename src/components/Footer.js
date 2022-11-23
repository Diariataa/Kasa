import React from "react";
import "../styles/Footer.css";

import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="footerLogo" to="/">
        <Logo fill="#fff" className="logo" />
      </Link>
      <span> © Kasa 2020. All rights reserved</span>
    </footer>
  );
};

export default Footer;
