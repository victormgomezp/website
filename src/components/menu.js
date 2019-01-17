import React, { Component } from "React";
import { Link } from "gatsby";

class Menu extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row full-width justify-content-center">
        <div className="col-md-12 no-padding">
          <nav className="navbar navbar-expand-lg navbar-light menu px-3 position-absolute w-100 pt-5">
            <a className="navbar-brand" href="#">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto ul-menu">
                <li className="nav-item item-menu">
                  <Link to={"www.google.co.ve"}>The programs</Link>
                </li>
                <li className="nav-item item-menu">
                  <Link to={"www.google.co.ve"}>4G Academy</Link>
                </li>
                <li className="nav-item item-menu">
                  <Link to={"www.google.co.ve"}>Partners</Link>
                </li>
                <li className="nav-item item-menu">
                  <Link to={"www.google.co.ve"}>Upcoming programs</Link>
                </li>
              </ul>
            </div>
          </nav>
          {props.children}
        </div>
      </div>
    );
  }
}

export default Menu;
