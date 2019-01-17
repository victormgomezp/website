import React, { Component } from "react";

class DownloadPDF extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <div className="row justify-content-center full-width download-pdf">
          <div className="col-9 title-download-pdf">
            <h2>{props.title}</h2>
            <form className="form-pdf">
              <div className="section">
                <input
                  type="email"
                  className="input-form-pdf"
                  aria-describedby="emailHelp"
                />
                <label>Email address</label>
              </div>
              <div className="section">
                <input
                  type="password"
                  className="input-form-pdf"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>
              <button type="submit" className="btn btn-red">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadPDF;
