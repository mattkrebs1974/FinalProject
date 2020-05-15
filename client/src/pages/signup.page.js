import React, { Component } from "react";
import API from "../util/API";


// import { Link } from "react-router-dom";


class signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  loadUsers = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          user: res.data,
          firstname: "",
          lastname: "",
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
    if (
      this.state.firstname &&
      this.state.lastname &&
      this.state.email &&
      this.state.password
    ) {
      API.saveUser({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
        .then((res) => this.loadUsers())

        .catch((err) => console.log(err));
    } else {
      alert("All fields must be completed!");
    }
  };

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            value={this.state.firstname}
            onChange={this.handleInputChange}
            name="firstname"
            type="text"
            className="firstname form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            value={this.state.lastname}
            onChange={this.handleInputChange}
            name="lastname"
            type="text"
            className="lastname form-control"
            placeholder="Last name"
          />
        </div>

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

        <button
          type="submit"
          className="submit btn btn-primary btn-block"
          onClick={this.handleFormSubmit}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">sign in</a>
        </p>
      </form>
    );
  }
}
export default signup;
