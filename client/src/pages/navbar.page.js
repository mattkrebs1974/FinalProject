import React, { Component } from "react";
import { Link } from "react-router-dom";


import "./navbar.css";


class Navbar extends Component {
  state = {
    email: "",
  };

  componentDidMount() {
    const loggedin = localStorage.getItem("email");
    console.log("loggedin", loggedin);
    this.setState({email:loggedin},()=>console.log(this.state))
  }

  render() {
    return (
      <div>
         {!this.state.email && <nav
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
             <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Instructions"}>
                  Instructions
                </Link>
              </li>
            </ul>
          </div>
            </nav>}
      </div>
    );
  }
}

export default Navbar;