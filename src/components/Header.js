import React from "react";
import "../styles/Header.css";

import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="header">
      <Link className="headerLogo" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="navhome">
        <Link className="link" to="/">
          Accueil
        </Link>
        <Link className="link" to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
