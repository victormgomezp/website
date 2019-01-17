import React, { Component } from "react";

class PorcentTechnologie extends Component {
  render() {
    const props = this.props;
    return (
      <div style={{ width: props.porcent }}>
        <p style={{ color: props.color }} className="text-center">
          {props.title} {props.porcent}
        </p>
        <div
          style={{
            backgroundColor: props.color,
            height: `7px`,
            borderRadius: `25px`,
            marginRight: `-2px`
          }}
        />
      </div>
    );
  }
}

export default PorcentTechnologie;
