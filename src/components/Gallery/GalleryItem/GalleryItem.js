import React from "react";
import Backdrop from "../Backdrop/Backdrop";

import "./GalleryItem.css";

function GalleryItem() {
  return (
    <div className="item">
      <Backdrop />
      <img className="image" src="https://picsum.photos/600/600" />
    </div>
  );
}

export default GalleryItem;
