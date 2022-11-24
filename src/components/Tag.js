import React from "react";
import "../styles/Tag.css";

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return <span key={index}>{tag}</span>;
      })}
    </div>
  );
};

export default Tag;
