import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends React.Component {
  // state = {
  //   // sidebarOpen: false,
  //   // drawerClasses: "sidebar",
  // };

  // constructor(props) {
  //   super(props);

  //   // this.setState({ sidebarOpen: props.show });
  // }

  render() {
    let drawerClasses = "sidebar";
    if (this.props.show) {
      drawerClasses = "sidebar open";
    }

    return (
      <div className={drawerClasses} onMouseLeave={this.props.hover}>
        <div className="sidebar__header"></div>
        <div className="sidebar__content">
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="item">
            <Link to="/product">Product</Link>
          </div>
          <div className="item">
            <Link to="/">--empty--</Link>
          </div>
          <div className="item">
            <Link to="/">--empty--</Link>
          </div>
          <div className="spacer" />
          <div className="brand">
            <a>Ebru Design</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
