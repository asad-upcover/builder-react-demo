import React from "react";
import "./styles.css";

const CTAButton = ({ label, onClick }) => {
  return (
    <button
      className="cta-button"
      onClick={() => {
        console.log("Button clicked!"); // for debugging
        if (onClick && typeof onClick === "function") {
          onClick();
        }
      }}
    >
      {label}
    </button>
  );
};

export default CTAButton;
