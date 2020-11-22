import React, { Component } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./DemoCarousel.css";

class DemoCarousel extends Component {
  render() {
    return (
      <CarouselProvider
        className="demo-carousel"
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={4}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <Image src="https://picsum.photos/800/800" className="image" />
          </Slide>
          <Slide index={1}>
            <Image src="https://picsum.photos/800/800" className="image" />
          </Slide>
          <Slide index={2}>
            <Image src="https://picsum.photos/800/800" className="image" />
          </Slide>
          <Slide index={3}>
            <Image src="https://picsum.photos/800/800" className="image" />
          </Slide>
        </Slider>
        <div className="slideInfo">
          <div>
            <strong>Title</strong>, City YEAR
          </div>
          <div className="dot-group">
            <Dot className="dot" slide={0} />
            <Dot className="dot" slide={1} />
            <Dot className="dot" slide={2} />
            <Dot className="dot" slide={3} />
          </div>
          <div>Details</div>
        </div>
      </CarouselProvider>

      // <Carousel
      //   className="demo-carousel"
      //   showThumbs={false}
      //   autoPlay
      //   infiniteLoop
      //   stopOnHover
      //   swipeable
      //   showIndicators={false}
      //   showStatus={false}
      // >
      //   <div>
      //     <img src="https://picsum.photos/1200/600" />
      //     {/* <p className="legend">Legend 1</p> */}
      //   </div>
      //   <div>
      //     <img src="https://picsum.photos/1200/600" />
      //     {/* <p className="legend">Legend 2</p> */}
      //   </div>
      //   <div>
      //     <img src="https://picsum.photos/1200/600" />
      //     {/* <p className="legend">Legend 3</p> */}
      //   </div>
      // </Carousel>
    );
  }
}

export default DemoCarousel;
