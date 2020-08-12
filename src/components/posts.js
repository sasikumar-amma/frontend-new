import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    let postItems = this.props.posts.map((post) => (
      <Fragment key={post.id}>
        <div className="card-body1 pt-4">
          <h5 className="h5 text-uppercase border-bottom pb-3">{post.title}</h5>
          <p className="para">{post.body}</p>
        </div>
      </Fragment>
    ));
    return (
      <Fragment>
        <section id="postCard">
          <div className="card m-0">{postItems}</div>
        </section>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
