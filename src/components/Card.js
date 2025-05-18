import React from "react";
import "./styles.css";

const Card = ({ title, description }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;