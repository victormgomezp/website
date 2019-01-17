import React, { Component } from "react";

import Airbnb from "../img/airbnb.png";

class StudentGraduate extends Component {
  render() {
    return (
      <div className="row justify-content-center full-width student-graduated-4geeks">
        <div className="col-9 title-graduated-4geeks">
          <h2 className="text-center">Over 300 students graduated so far</h2>
          <div className="flex-event">
            <div className="col-3 text-center">
              <img className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img className="img-student" src={Airbnb} />
            </div>
            <div className="col-3 text-center">
              <img className="img-student" src={Airbnb} />
            </div>
          </div>
          <p className="text-center">
            "In reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="text-center">Bob Dylan</p>
        </div>
      </div>
    );
  }
}

export default StudentGraduate;
