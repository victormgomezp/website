import React, { Component } from "React";

import Background from "../img/night.jpg";

export default class Banner extends Component {
  render() {
    return (
      <div
        className="col-md-12 banner-page"
        style={{
          backgroundImage: `url(${Background})`,
          height: `100vh`,
          backgroundSize: `cover`
        }}
      >
        <div className="titles">
          <div>
            <h3>{this.props.headerText}</h3>
            <h1>{this.props.title}</h1>
            <h2>{this.props.time}</h2>
            <p className="w-75">{this.props.description}</p>
            <div className="pt-4">
              <button type="button" className="btn btn-lg btn-1">
                {this.props.textBtnLeft}
              </button>
              <button type="button" className="btn btn-lg btn-2">
                {this.props.textBtnRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
