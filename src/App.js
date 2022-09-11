import React, { Component } from 'react';
// import Header from './components/Header';
// import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        {/* <Header /> */}
        <a className="menu-toggle rounded" href="!#" style={{display: "none"}}>
          <i className="fas fa-bars"></i>
        </a>
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
        {/* <Content /> */}
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
        <Footer />
      </div>
    );
  }
}

export default App;