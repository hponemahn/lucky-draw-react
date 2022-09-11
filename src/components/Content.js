import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div>
        <section className="content-section bg-light" id="about">
          <div className="container px-4 px-lg-5 text-center">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-10">
                <h2>Want to try your luck?</h2>
                <p className="lead mb-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount to ether to enter"
                      style={{width: "50%",
                        margin: "0 auto"}}
                    />
                </p>
                <a className="btn btn-dark btn-xl" href="#services">
                  Enter
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-section bg-primary text-white text-center"
          id="services"
        >
          <div className="container px-4 px-lg-5">
            <div className="content-section-heading">
              {/* <h3 className="text-secondary mb-0">Services</h3> */}
              {/* <h2 className="mb-5">Pick a winner</h2> */}
              <a className="btn btn-xl btn-dark" href="#!">
              Pick a winner
            </a>
            </div>
            {/* <div className="row gx-4 gx-lg-5">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone"></i>
                </span>
                <h4>
                  <strong>Responsive</strong>
                </h4>
                <p className="text-faded mb-0">
                  Looks great on any screen size!
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-pencil"></i>
                </span>
                <h4>
                  <strong>Redesigned</strong>
                </h4>
                <p className="text-faded mb-0">
                  Freshly redesigned for Bootstrap 5.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-like"></i>
                </span>
                <h4>
                  <strong>Favorited</strong>
                </h4>
                <p className="text-faded mb-0">
                  Millions of users
                  <i className="fas fa-heart"></i>
                  Start Bootstrap!
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-mustache"></i>
                </span>
                <h4>
                  <strong>Question</strong>
                </h4>
                <p className="text-faded mb-0">I mustache you a question...</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
