import React, { Component } from "React";

class RowEvent extends Component {
  render() {
    const props = this.props;
    return (
      <div className="row justify-content-center full-width event py-4">
        <div className="col-9">
          <div className="container-center">
            <div className="box-1">
              <p>{props.date}</p>
            </div>
            <div className="box-2">
              <div>
                <button type="button" class="btn btn-lg btn-1">
                  Apply Now
                </button>
                <p className="pt-3 text-center">or review other dates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RowEvent;
