import React from "react";
import "./styles.css";

const Hero = ({ heading, subheading }) => (
  <section className="hero">
    <h1>{heading}</h1>
    <p>{subheading}</p>
  </section>
);

export default Hero;