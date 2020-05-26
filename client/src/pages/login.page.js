import React, { Component } from "react";
import API from "../util/API";
import "./login.css";


class login extends Component {
  componentDidMount() {
    localStorage.clear();
    console.log("Login Component DID MOUNT!");
  }

  state = {
    email: "",
    password: "",
    rememberMe: false,
    firstname: "",
  };

  loadUsers = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          email: "",
          password: "",
        })
      )
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password,
      })
        .then((res) => {
          console.log(res, "adsfaafasfa", res.data.firstname);
          if (res) {
            const firstname = res.data.firstname;
            const { email, rememberMe } = this.state;
            console.log("this is first name", firstname);
            localStorage.setItem("rememberMe", rememberMe);
            localStorage.setItem("email", email);
            localStorage.setItem("firstname", firstname);

            window.location.href = "/Welcome";
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("All fields must be completed");
    }
  };

  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            type="email"
            className="email form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            className="password form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              checked={this.state.rememberMe}
              onChange={this.handleInputChange}
              name="rememberMe"
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          id="submit"
          type="submit"
          className="submit btn btn-primary btn-block"
          onClick={this.handleFormSubmit}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          <a href="/sign-up">Create Account</a>
        </p>
      </form>
    );
  }
}
export default login;
