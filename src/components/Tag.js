import React from "react";

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
