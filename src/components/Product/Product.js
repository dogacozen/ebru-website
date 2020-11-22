import React from "react";
import { ICON_NAME } from "react-icons/md";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="header">
        <div className="back">
          {/* <i class="fas fa-less-than"></i> */}
          <img src="/src/resources/less-than.png" alt="Arrow" />
        </div>
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
        <img className="image" src="https://picsum.photos/800/600" />
        <img className="image" src="https://picsum.photos/600/800" />
        <img className="image" src="https://picsum.photos/700/400" />
        <img className="image" src="https://picsum.photos/400/400" />
        <img className="image" src="https://picsum.photos/800/400" />
      </div>
    </div>
  );
}

export default Product;
