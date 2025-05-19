import React from "react";
import "./styles.css";

const CTAButton = ({ label, onClick }) => {
  const handleClick = () => {
    try {
      if (typeof onClick === "function") {
        onClick();
      } else if (typeof onClick === "string") {
        // Dynamically evaluate the string as a function
        const fn = new Function(onClick);
        fn();
      } else {
        console.log("No valid onClick provided");
      }
    } catch (err) {
      console.error("CTAButton click error:", err);
    }
  };

  return (
    <button className="cta-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default CTAButton;