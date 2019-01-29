import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="row full-width justify-content-center footer">
        <div className="col-9">
          <div className="flex-footer">
            <div className="col-6 description">
              <h3>Contact</h3>
              <ul>
                <li>We are available Monday to Friday: 9:00am - 6:00pm</li>
                <li>Start Hub, 66 W Flager Street, #900 Miami, Fl 33130</li>
                <li>Phone: +1(727)8882491</li>
                <li>info@4GeeksAcademy.com</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Company</h3>
              <ul>
                <li>We are available Monday to Friday: 9:00am - 6:00pm</li>
                <li>Start Hub, 66 W Flager Street, #900 Miami, Fl 33130</li>
                <li>Phone: +1(727)8882491</li>
                <li>info@4GeeksAcademy.com</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>Locations</h3>
              <ul>
                <li>Miami, Downtown, USA</li>
                <li>Miami Dade College, USA</li>
                <li>Impact Hub, CCS, Vzla</li>
                <li>El Nacional, CCS, Vzla</li>
                <li>Maracaibo, Vzla</li>
              </ul>
            </div>
            <div className="col-6">
              <button src="" className="btn btn-red-large">Apply Now</button>
              <button src="" className="btn btn-grey-large">or review other dates</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
