import React, { Component } from "react";

import babel from "../../img/iconTechnologies/babel.png";
import db from "../../img/iconTechnologies/db.png";
import git from "../../img/iconTechnologies/git.png";
import html from "../../img/iconTechnologies/html.png";
import javascript from "../../img/iconTechnologies/javascript.png";
import mysqlworkbench from "../../img/iconTechnologies/mysqlworkbench.png";
import python from "../../img/iconTechnologies/python.png";
import react from "../../img/iconTechnologies/react.png";
import sass from "../../img/iconTechnologies/sass.png";
import tech1 from "../../img/iconTechnologies/tech1.png";
import technologieIcon from "../../img/iconTechnologies/technologie-icon.png";

const icons = {
    babel,
    db,
    git,
    html,
    javascript,
    mysqlworkbench,
    python,
    react,
    sass,
    tech1,
    technologieIcon
}

class IconTech extends Component {
  render() {
    return <img src={icons[this.props.icon]} />;
  }
}

export default IconTech;
