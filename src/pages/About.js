import React from "react";
import aboutData from "./../assets/data/aboutData.json";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import banner from "../assets/images/banner_about.png";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <Banner image={banner} title="" />
      <Collapse />
      <div className="drop">
        {aboutData.map((data, index) => {
          return (
            <Collapse key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
};

export default About;
