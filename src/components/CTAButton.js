import React from "react";
import "./styles.css";

const CTAButton = ({ label, link, onClick }) => (
  <button
    className="cta-button"
    onClick={() => {
      if (typeof onClick === "function") {
        onClick();
      } else if (link) {
        window.location.href = link;
      }
    }}
  >
    {label}
  </button>
);

export default CTAButton;