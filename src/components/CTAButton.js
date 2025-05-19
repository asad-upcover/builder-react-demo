import React from "react";
import "./styles.css";

const CTAButton = ({ label }) => {
  return (
    <button
      className="cta-button"
    >
      {label}
    </button>
  );
};

export default CTAButton;
