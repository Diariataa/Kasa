import React from "react";
import bannerAbout from "../assets/images/banner_about.png";
import "../styles/BannerAbout.css";

const BannerAbout = () => {
  return (
    <div>
      <div className="bannerImage">
        <img src={bannerAbout} alt=" bannière" />
      </div>
    </div>
  );
};

export default BannerAbout;
