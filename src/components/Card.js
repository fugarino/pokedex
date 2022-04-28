import React from "react";

const Card = ({ name }) => {
  return (
    <div className="Card">
      <div className="Card-img"></div>
      <h1>{name.name}</h1>
      <div className="stats">
        <div className="stat">Height: {name.height}</div>
        <div className="stat">Weight: {name.weight}</div>
      </div>
    </div>
  );
};

export default Card;
