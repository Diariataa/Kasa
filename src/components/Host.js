import React from "react";

const Host = (props) => {
  const [name, lastname] = props.name;

  return (
    <div className="host">
      <div className="host-name">
        <span>{name}</span>
        <span>{lastname}</span>
      </div>
      <img src={props.picture} alt="" className="host-picture" />
    </div>
  );
};

export default Host;
