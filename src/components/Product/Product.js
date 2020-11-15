import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="header">
        <div className="back">OK</div>
        <div className="title">
          <h2>Title of the project</h2>
          <h3>Type and Year</h3>
        </div>
        <div className="next">
          <h3>Next Project</h3>
          <p> # / ALL</p>
        </div>
      </div>
      <div className="photos">
        <img className="image" src="https://picsum.photos/900/600" />
        <img className="image" src="https://picsum.photos/600/800" />
        <img className="image" src="https://picsum.photos/700/400" />
        <img className="image" src="https://picsum.photos/400/400" />
        <img className="image" src="https://picsum.photos/900/400" />
      </div>
    </div>
  );
}

export default Product;
