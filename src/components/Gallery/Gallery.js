import React from "react";
import GalleryItem from "./GalleryItem/GalleryItem";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__title">Gallery</div>
      <div className="gallery__contents">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
}

export default Gallery;
