import React from "react";

const Button = ({ text, onClick, buttonType }) => {
  return (
    <button onClick={() => onClick(buttonType)} className="button">
      {text}
    </button>
  );
};

export default Button;
