import React, { Component } from "react";
import API from "../util/API";
import "./results.css";

class results extends Component {
  componentDidMount() {
    localStorage.clear();
    console.log("Results Component DID MOUNT!");
  }

  state = {
    email: "",
  };

  loadUsers = (event) => {
    event.preventDefault();
    API.performancedata({ something: "value" })
      .then((res) =>
        this.setState({
          email: "",
        })
      )
      .catch((err) => console.log(err));
  };




  
  render() {
    return (

      
      <form>
        <button
          id="submit"
          type="submit"
          className="submit btn btn-primary btn-block"
          onClick={this.loadUsers}
        >
          Show Data
        </button>
      </form>
    );
  }
}
export default results;
