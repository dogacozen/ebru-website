import React from "react";
import Slider from "../Slider/Slider";
import "./Main.css";

function Welcome() {
  return <section className="welcome">Ebru Design</section>;
}

function SliderContainer() {
  return (
    <section className="slider__container">
      <Slider />
    </section>
  );
}

function Main() {
  return (
    <main className="main">
      <Welcome />
      <SliderContainer />
    </main>
  );
}

export default Main;
