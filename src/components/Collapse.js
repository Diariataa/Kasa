import React, { useState } from "react";
import "../styles/Collapse.css";
import arrow from "../assets/images/arrowUp.png";

const Collapse = (props) => {
  const [isActive, setIsActive] = useState(false);

  const getContent = () => {
    if (Array.isArray(props.content)) {
      return props.content.map((item, index) => (
        <li key={`item-${index}`}>{item}</li>
      ));
    }
    return <p>{props.content}</p>;
  };

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
      <div className={isActive ? "show animated" : "hide"}>{getContent()}</div>
    </div>
  );
};

export default Collapse;
