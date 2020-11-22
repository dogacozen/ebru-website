import React from "react";
import DemoCarousel from "../DemoCarousel/DemoCarousel";

import "./SliderContainer.css";

class SliderContainer extends React.Component {
  render() {
    return (
      <div className="sliderContainer">
        <DemoCarousel />
      </div>
    );
  }
}

export default SliderContainer;
