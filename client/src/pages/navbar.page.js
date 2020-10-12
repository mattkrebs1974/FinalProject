import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {
    email: "",
    loggedin: "",
  };

  componentDidMount() {
    const login = sessionStorage.getItem("email");
    const areyouloggedin = sessionStorage.getItem("loggedin");
    console.log("loggedin", login);
    this.setState({ email: login }, () => console.log(this.state));
    this.setState({ loggedin: areyouloggedin }, () => console.log(this.state));
  }
  handleFormSubmit() {
    sessionStorage.clear();
    console.log("Home Component is about to MOUNT!");
    sessionStorage.setItem("loggedin", false);
    window.location.href = "/";
    
  }

  render() {
    return (
      <div>
        <nav
          id="nav2"
          className="navbar-dark navbar-success bg-transparent navbar-expand navigation-bar is-visible"
          data-nav-status="toggle"
        >
          <button
            id="navbarButton"
            className="navbar-toggler mr-auto custom-toggler"
            style={{ margin: "20px 0 0 20px" }}
            type="button"
            data-toggle="collapse"
            data-target="#nav3"
          >
            <div className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="nav3">
            <ul className="nav navbar-nav.navbar-right ml-auto">
              {!this.state.email && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Home
                  </Link>
                </li>
              )}

              {!this.state.email && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
              )}
              {!this.state.email && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              )}

              {this.state.email && (
                <li className="dropdown">
                  <a href="javascript:void(0)" className="dropbtn">
                    Compare
                  </a>
                  <div className="dropdown-content">
                    <a href="/exercise">Exercise</a>
                    <a href="/hunger">Hunger</a>
                    <a href="/mood">Mood</a>
                    <a href="/sleep">Sleep</a>
                  </div>
                </li>
              )}

              {this.state.email && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={this.handleFormSubmit}
                    to={"/"}
                  >
                    Log Out
                  </Link>
                </li>
              )}

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
