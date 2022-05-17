import React, { Component } from "react";
import "./banner.css";
export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner text-center py-5">
          <div className="container bg-light wrap">
            <div className="p-5">
              <h1 className="font-weight-bold">A warm welcome!</h1>
              <p>
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <a className="btn btn-primary btn-lg text-white">Call to action</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
