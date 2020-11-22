import React from "react";
import SliderContainer from "../Slider/SliderContainer";
import Footer from "../Footer/Footer";
import "./Main.css";

function Welcome() {
  return <section className="welcome">Ebru Design</section>;
}

function Main() {
  return (
    <main className="main">
      <Welcome />
      <SliderContainer />
      {/* <Footer /> */}
    </main>
  );
}

export default Main;
