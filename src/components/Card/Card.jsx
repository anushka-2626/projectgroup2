// src/components/Card/Card.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="/store">
        <button className="c-button">Visit the store</button>
      </Link>
    </div>
  );
};

export default Card;