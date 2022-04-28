import React from "react";
import Button from "./Button";

const Buttons = ({ onClick }) => {
  return (
    <div className="Buttons">
      <Button text="Previous" onClick={onClick} buttonType={2} />
      <Button text="Next" onClick={onClick} buttonType={1} />
    </div>
  );
};

export default Buttons;
