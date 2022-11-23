import React, { useState } from "react";
import "../styles/Slideshow.css";
import arrowRight from "../assets/images/arrowRight.png";
import arrowLeft from "../assets/images/arrowLeft.png";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   backgroundImage: `picture(${slides[currentIndex].picture})`,
  // };

  return (
    <div className="slider">
      {pictures.map((picture, slideIndex) => {
        return (
          <div
            key={slideIndex}
            className={
              slideIndex === currentIndex
                ? "slide slider-move"
                : "slide  slider-unmove"
            }
          >
            {slideIndex === currentIndex && (
              <img src={picture} alt="" className="slide-picture" />
            )}
          </div>
        );
      })}
      {pictures.length > 1 ? (
        <div>
          <div className="goToPrevious" onClick={goToPrevious}>
            <img className="arrow-left" src={arrowLeft} alt="" />
          </div>
          <div className="goToNext" onClick={goToNext}>
            <img className="arrow-right" src={arrowRight} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Slideshow;
