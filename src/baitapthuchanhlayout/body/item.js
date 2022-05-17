import React, { Component } from "react";
import "./item.css";
export default class Item extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row ">
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body  text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                  <p className="mb-0">
                    With Bootstrap 5, we've created a fresh new layout for this
                    template!
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-cloud-download" />
                  </div>
                  <h2 className="fs-4 fw-bold">Free to download</h2>
                  <p className="mb-0">
                    As always, Start Bootstrap has a powerful collectin of free
                    templates.
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-card-heading" />
                  </div>
                  <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                  <p className="mb-0">
                    The heroic part of this template is the jumbotron hero
                    header!
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-bootstrap" />
                  </div>
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p className="mb-0">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-bootstrap" />
                  </div>
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p className="mb-0">
                    We've created some custom feature boxes using Bootstrap
                    icons!
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 m-4">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i className="bi bi-patch-check" />
                  </div>
                  <h2 className="fs-4 fw-bold">A name you trust</h2>
                  <p className="mb-0">
                    Start Bootstrap has been the leader in free Bootstrap
                    templates since 2013!
                  </p>
                  <a className="btn btn-primary btn-lg text-white mt-4">
                    Find out more!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
