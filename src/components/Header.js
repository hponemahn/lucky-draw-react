import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <a className="menu-toggle rounded" href="!#" style={{display: "none"}}>
          <i className="fas fa-bars"></i>
        </a>
        {/* <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#page-top">Start Bootstrap</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#page-top">Home</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#about">About</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav> */}
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            <h1 className="mb-1" style={{color: "#818592", fontWeight: "900"}}>Lucky Draw</h1>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="mb-5">
              <em>This lottery managed by <strong>OxAOEEa931843690D261e9948a1F3a9861428Ca682</strong>. There are currently <strong>0</strong> people entered, competing to win <strong>0</strong> ether!</em>
            </h4>
            {/* <a className="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a> */}
          </div>
        </header>
      </div>
    );
  }
}
