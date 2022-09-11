import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* <footer className="footer text-center">
          <div className="container px-4 px-lg-5">
            <ul className="list-inline mb-5">
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#!"
                >
                  <i className="icon-social-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-link rounded-circle text-white mr-3"
                  href="#!"
                >
                  <i className="icon-social-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white" href="#!">
                  <i className="icon-social-github"></i>
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-0">
              Copyright &copy; Your Website 2022
            </p>
          </div>
        </footer> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    );
  }
}
