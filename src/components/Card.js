import React from "react";

const Card = ({ url }) => {
  return (
    <div className="Card">
      <div className="Card-img"></div>
      <h1>{url}</h1>
      <div className="stats">
        <div className="stat">Height: {}</div>
        <div className="stat">Weight: {}</div>
      </div>
    </div>
  );
};

export default Card;
