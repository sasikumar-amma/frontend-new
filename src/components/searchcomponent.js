import React, { Component, Fragment } from "react";
class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="col-md-5 mx-auto my-4 ">
          <form>
            <span className="searchBtn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="search"
              className="form-control searchBox"
              placeholder="search"
            />
            <button className="btn btn-light custom_btn">
              <i className="fas fa-times"></i>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SearchComponent;
