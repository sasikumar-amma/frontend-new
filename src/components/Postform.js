import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);
    this.setState({
      title: "",
      body: "",
    });
  }
  render() {
    return (
      <Fragment>
        <div className="card my-4">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Details</label>
                <textarea
                  className="form-control"
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-dark float-right my-2">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { createPost })(PostForm);
