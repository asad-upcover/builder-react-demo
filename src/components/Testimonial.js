import React from "react";
import "./styles.css";

const Testimonial = ({ quote, author }) => (
  <blockquote className="testimonial">
    <p>"{quote}"</p>
    <footer>- {author}</footer>
  </blockquote>
);

export default Testimonial;