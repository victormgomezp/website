import React, { Component } from "react";

class Skill extends Component {
  render() {
    const props = this.props;
    return (
      <div className="col-3 text-center">
        {this.props.children}
        <p>{props.title}</p>
      </div>
    );
  }
}

export default Skill;
