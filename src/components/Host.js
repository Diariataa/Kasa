import React from "react";
import "../styles/Host.css";

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <div className="host-name">
        <span>{name}</span>
      </div>
      <img src={picture} alt="" className="host-picture" />
    </div>
  );
};

export default Host;
