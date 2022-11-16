import React from "react";
import bannerHome from "../assets/images/banner_image.png";
import "../styles/Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="bannerImage">
        <img src={bannerHome} alt="bannière" />
        <h3>Chez vous, partout et ailleurs</h3>
      </div>
    </div>
  );
};

export default Banner;
