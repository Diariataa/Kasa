import React from "react";
import "../styles/Ratings.css";
import redStar from "../assets/images/redStar.png";
import greyStar from "../assets/images/greyStar.png";

const Ratings = (props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratings">
      {stars.map((star) =>
        props.rating >= star ? (
          <img className="ratingRed" src={redStar} alt="" />
        ) : (
          <img className="ratingGrey" src={greyStar} alt="" />
        )
      )}
    </div>
  );
};

export default Ratings;
