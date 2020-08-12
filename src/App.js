import React, { Component, Fragment } from "react";
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";
import SearchComponent from "./Components/SearchComponent";

//redux part
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  state = {}; //value
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="container my-4">
            <SearchComponent />
            <div className="row">
              <div className="col-md-6">
                <h4 className="h4 font-weight-bold text-uppercase">new Post</h4>
                <hr />
                <PostForm />
              </div>
              <div className="col-md-6">
                <h4 className="h4 font-weight-bold text-uppercase">
                  Published
                </h4>
                <hr />
                <Posts />
              </div>
            </div>
          </div>
        </Fragment>
      </Provider>
    ); //jsx
  }
}

export default App;
