import React, { Component } from "react";

import Icon1 from "../components/iconTechnologies/icon1";
import IconSass from "../components/iconTechnologies/sass";
import IconHtml from "../components/iconTechnologies/html";
import IconGit from "../components/iconTechnologies/git";
import IconDb from "../components/iconTechnologies/db";
import IconMysql from "../components/iconTechnologies/mysql";
import IconJavascript from "../components/iconTechnologies/javascript";
import IconBabel from "../components/iconTechnologies/babel";
import Icon2 from "../components/iconTechnologies/icon2";
import IconReact from "../components/iconTechnologies/react";
import IconPython from "../components/iconTechnologies/python";

class Technologies extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width tecnologies">
        <div className="col-9">
          <h2>{props.title}</h2>
          <div className="description-technologies">
            <div className="flex-tecnologies">
              {props.children}
              {/* <div className="col-1">
                <Icon1 />
              </div>
              <div className="col-1">
                <IconSass />
              </div>
              <div className="col-1">
                <IconHtml />
              </div>
              <div className="col-1">
                <IconGit />
              </div>
              <div className="col-1">
                <IconDb />
              </div>
              <div className="col-1">
                <IconMysql />
              </div>
              <div className="col-1">
                <IconJavascript />
              </div>
              <div className="col-1">
                <IconBabel />
              </div>
              <div className="col-1">
                <Icon2 />
              </div>
              <div className="col-1">
                <IconReact />
              </div>
              <div className="col-1">
                <IconPython />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
