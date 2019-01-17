import React, { Component } from "react";

import PorcentTech from "../components/porcentTechnologie";

class LearnTechnologies extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center full-width learn-tecnologies">
          <div className="col-9 title-learn-technologies">
            <h2>Why do we teach these technologies?</h2>
            <span>
              <p>
                JavaScript has 26x's more job vacancies than Ruby On Rails.
                Python has 14x's more job vacancies than Ruby On Rails.{" "}
                <a>Click here to check it out!</a>
              </p>
            </span>
          </div>
        </div>
        <div className="row justify-content-center full-width learn-tecnologies">
          <div className="col-9 title-learn-technologies">
            <div className="flex-learn-technologies">
              <PorcentTech porcent="60%" title="JavaScript" color="red" />
              <PorcentTech porcent="27%" title="Python" color="blue" />
              <PorcentTech porcent="13%" title="Ruby" color="grey" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnTechnologies;
