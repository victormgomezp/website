import React, { Component } from "React";

import Icon1 from "../components/iconGoal/icon1";
import Icon2 from "../components/iconGoal/icon2";
import Icon3 from "../components/iconGoal/icon3";
import Icon4 from "../components/iconGoal/icon4";
import Icon5 from "../components/iconGoal/icon5";
import Icon6 from "../components/iconGoal/icon6";
import DescriptionGoal from "../components/descriptionGoal";

class Goals extends Component {
  render() {
    const props = this.props;
    return (
      <div className="goals">
        <div className="row justify-content-center full-width">
          <div className="col-9 title-goals">
            <h2>{props.title}</h2>
          </div>
        </div>
        <DescriptionGoal
          firstLine="Master the coding fundamentals"
          secondLine="and how to apply them to create web applications."
        >
          <Icon1 />
        </DescriptionGoal>
        <DescriptionGoal
          firstLine="Learn how to think"
          secondLine="to solve problems gaster and efficiently. Think like and engineer."
        >
          <Icon2 />
        </DescriptionGoal>
        <DescriptionGoal
          firstLine="Land your first coding job,"
          secondLine="increase your income and enjoy being a coder for the next 20 years."
        >
          <Icon3 />
        </DescriptionGoal>
        <DescriptionGoal
          firstLine="Build a real web application"
          secondLine="of your choice using everything you have learned."
        >
          <Icon4 />
        </DescriptionGoal>
        <DescriptionGoal
          firstLine="Join the local tech ecosystem"
          secondLine="and participate in the top tech events in the city."
        >
          <Icon6 />
        </DescriptionGoal>
      </div>
    );
  }
}

export default Goals;
