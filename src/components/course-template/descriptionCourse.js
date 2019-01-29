import React, { Component } from "react";

class DescriptionCourse extends Component {
  render() {
    const menu = this.props.data;
    return (
      <div className="row justify-content-center full-width description-course">
        <div className="col-9 title-description-course">
            <h2 className="title">{menu.description}</h2>
            <h3 className="subtitle">[ {menu.time} ]</h3>
        </div>
      </div>
    );
  }
}

export default DescriptionCourse