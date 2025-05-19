// CTAButton.js
import React from "react";

const CTAButton = ({ label, onClick }) => {
  const handleClick = () => {
    console.log("Button clicked!");

    // 1. Manually trigger your React logic (e.g., alert)
    alert("Clicked from React!");

    // 2. Execute Builder.io's action if provided
    if (onClick && typeof onClick === "string") {
      try {
        new Function(onClick)(); // Execute Builder.io's code
      } catch (e) {
        console.error("Builder.io action failed:", e);
      }
    }
  };

  return (
    <button className="cta-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CTAButton;