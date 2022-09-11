import React, { Component } from "react";
// import Header from './components/Header';
// import Content from './components/Content';
import Footer from "./components/Footer";
import web3 from "./web3";
import luckyDraw from "./luckyDraw";

class App extends Component {
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    enterMessage: "",
    isValidInput: true,
    winnerMessage: "",
  };

  async componentDidMount() {
    this.initCall();
  }

  initCall = async () => {
    const manager = await luckyDraw.methods.manager().call();
    const players = await luckyDraw.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(luckyDraw.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    if (this.state.value === "") {
      this.setState({isValidInput: false});
      return;
    }

    const accounts = await web3.eth.getAccounts();

    this.setState({ enterMessage: "Waiting on the transaction success...." });

    await luckyDraw.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({ enterMessage: "You have been entered." });

    this.initCall();
  };

  onPickAWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({winnerMessage: "Waiting on the transaction success...."});

    await luckyDraw.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({winnerMessage: "A winner have been picked"});

    this.initCall();
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <a
          className="menu-toggle rounded"
          href="!#"
          style={{ display: "none" }}
        >
          <i className="fas fa-bars"></i>
        </a>
        <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            <h1
              className="mb-1"
              style={{ color: "#818592", fontWeight: "900" }}
            >
              Lucky Draw
            </h1>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="mb-5">
              <em>
                This lucky draw managed by <strong>{this.state.manager}</strong>.
                There are currently <strong>{this.state.players.length}</strong> people entered, competing to win <strong>{web3.utils.fromWei(this.state.balance, 'ether')}</strong> ether!
              </em>
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
                <form onSubmit={this.onSubmit}>

                  <div className="lead mb-5">
                    <input
                      type="number"
                      className={`form-control ${!this.state.isValidInput ? "is-invalid" : "" }`}
                      id="validationServer03"
                      aria-describedby="validationServer03Feedback"
                      value={this.state.value}
                      onChange={(event) =>
                        this.setState({ value: event.target.value })
                      }
                      placeholder="Amount to ether to enter"
                      style={{ width: "50%", margin: "0 auto" }}
                    />
                    <div
                      id="validationServer03Feedback"
                      className="invalid-feedback"
                    >
                      Please provide amount.
                    </div>
                  </div>

                  <h3 className="mb-5" style={{ color: "orange" }}>
                    <em>{this.state.enterMessage}</em>
                  </h3>
                  <button className="btn btn-dark btn-xl">Enter</button>
                </form>
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
              <h2 className="mb-5">Pick a winner</h2>
              <h3 className="mb-5" style={{ color: "orange" }}>
                <em>{this.state.winnerMessage}</em>
              </h3>
              <a onClick={this.onPickAWinner} className="btn btn-xl btn-dark" href="#!">
                Pick a winner
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
