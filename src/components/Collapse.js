import React, { useState } from "react";
import "../styles/Collapse.css";
import arrow from "../assets/images/arrowUp.png";

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="drops">
      <div
        className={`collapse-content ${!isActive ? "content-margin" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="collapse-title">{props.title}</div>
        <img
          className={`arrow-up ${isActive ? "arrow-down" : ""}`}
          src={arrow}
          alt=""
        />
      </div>
      <div className={isActive ? "show animated" : "hide"}>{props.content}</div>
    </div>
  );
};

export default Collapse;
