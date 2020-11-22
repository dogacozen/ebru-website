import React from "react";

import Main from "./components/Main/Main";
import Button from "./components/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";
import Gallery from "./components/Gallery/Gallery";
import Product from "./components/Product/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

// import DemoCarousel from "./components/DemoCarousel/DemoCarousel";

class App extends React.Component {
  state = {
    sidebarOpen: false,
  };

  sidebarOpenHandler = () => {
    this.setState({ sidebarOpen: true });
  };

  sidebarCloseHandler = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.sidebarCloseHandler} />;
    }

    return (
      // <DemoCarousel />
      <Router>
        <div className="app">
          <Button
            active={this.state.sidebarOpen}
            hover={this.sidebarOpenHandler}
          />
          <Sidebar
            show={this.state.sidebarOpen}
            hover={this.sidebarCloseHandler}
          />
          {backdrop}
          <Route path="/" exact component={Main} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/product" component={Product} />
        </div>
      </Router>
    );
  }
}

export default App;
