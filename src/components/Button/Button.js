import React from "react";
import "./Button.css";

class Button extends React.Component {
  // state = {
  //   sidebarOpen: false,
  // };

  // constructor(props) {
  //   super(props);

  //   this.setState({ sidebarOpen: props.active });
  // }

  render() {
    // let buttonClasses = "button";
    // if (this.props.active) {
    //   buttonClasses = "button activated";
    // }

    let lineClasses = "button__line";
    if (this.props.active) {
      lineClasses = "button__line moved";
    }

    return (
      <button
        className="button"
        onMouseOver={this.props.hover}
        onClick={this.props.hover}
      >
        <div className={lineClasses}></div>
        <div className="button__line"></div>
        <div className="button__line"></div>
      </button>
    );
  }
}

export default Button;
