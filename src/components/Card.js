import React, { createFactory } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = () => {
  return (
    <div className="all-cards">
      <div className="card">
        <Link>
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
