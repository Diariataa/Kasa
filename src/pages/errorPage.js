import React from "react";
import { Link } from "react-router-dom";

const errorPage = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous avez demander n'existe pas</p>
      <Link to="/" className="ErrorResponse">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default errorPage;
