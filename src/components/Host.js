import React from "react";
import "../styles/Host.css";

const Host = (host) => {
  const name = host.name.split(" ");
  const [firstName, lastName] = name;
  return (
    <div className="host">
      <div className="host-name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img src={host.picture} alt="" className="host-picture" />
    </div>
  );
};

export default Host;
