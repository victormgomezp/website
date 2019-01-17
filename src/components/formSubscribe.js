import React, { Component } from "react";

class FormSubscribe extends Component {
  render() {
    return (
      <div className="row justify-content-center full-width form-subscribe-4geeks">
        <div className="col-9">
          <h2 className="title-subscribe">Subscribe to our Newsletter!</h2>
          <p>Get updates right in your inbox. We promise to not spam you.</p>
          <form className="form-subscribe">
            <div className="section">
              <input
                type="email"
                className="input-form-pdf"
                aria-describedby="emailHelp"
              />
              <label>Your email</label>
            </div>
            <button type="submit" className="btn btn-grey">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormSubscribe;
