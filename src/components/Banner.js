import React from "react";
import "../styles/Banner.css";
const Banner = (props) => {
  return (
    <div className="bannerImage">
      <img src={props.image} alt="bannière" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Banner;
