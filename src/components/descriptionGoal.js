import React, { Component } from "react";

import logoGoals from "../img/icon.png";
import Icon from "../components/iconGoal/icon2";

class DescriptionGoal extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width descriptions-goals">
        <div className="col-2 div-img-goal">
          {/* <img src={logoGoals} alt="Logo" /> */}
          {props.children}
        </div>
        <div className="col-7">
          <p className="first-line">{props.firstLine}</p>
          <p className="second-line">{props.secondLine}</p>
        </div>
      </div>
    );
  }
}

export default DescriptionGoal;
