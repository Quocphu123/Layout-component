import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <hedaer className="header ">
        <nav className="bg-dark text-white navbar-dark">
          <div className="container d-flex  align-items-center justify-content-between ">
            <a className="text-light">Start Bootstrap</a>
            <nav className="nav">
         
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </nav>
          </div>
        </nav>
      </hedaer>
    );
  }
}
