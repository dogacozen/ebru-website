import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Backdrop.css";

function Backdrop() {
  return (
    <div className="overlay">
      <p className="title">
        <strong>What</strong>, Where YEAR
      </p>
      <Link to="/product">
        <p className="project">___________ view project</p>
      </Link>
    </div>
  );
}

export default Backdrop;
