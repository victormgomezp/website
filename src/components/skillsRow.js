import React, { Component } from "react";

import logoGoals from "../img/icon.png";

import Skill from "../components/skill";
import IconWebArchitect from "../components/iconSkill/webArchitect";
import IconDataMaster from "../components/iconSkill/dataMaster";
import IconDynamicWebsite from "../components/iconSkill/dynamicWebsite";

class SkillsRow extends Component {
  render() {
    const props = this.props;
    return (
      <div className="skills">
        <div className="row justify-content-center full-width">
          <div className="col-9 title-skills">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div className="row justify-content-center full-width descriptions-skills">
          <div className="col-9">
            <div className="flex-skills">
              <Skill title="Web Architect">
                <IconWebArchitect />
              </Skill>
              <Skill title="Data Master">
                <IconDataMaster />
              </Skill>
              <Skill title="Dynamic Website">
                <IconDynamicWebsite />
              </Skill>
              <div className="col-3 text-center">
                <img src={logoGoals} alt="Logo" />
                <p>Title</p>
              </div>
              <div className="col-3 text-center">
                <img src={logoGoals} alt="Logo" />
                <p>Title</p>
              </div>
              <div className="col-3 text-center">
                <img src={logoGoals} alt="Logo" />
                <p>Title</p>
              </div>
              <div className="col-3 text-center">
                <img src={logoGoals} alt="Logo" />
                <p>Title</p>
              </div>
              <div className="col-3 text-center">
                <img src={logoGoals} alt="Logo" />
                <p>Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsRow;
