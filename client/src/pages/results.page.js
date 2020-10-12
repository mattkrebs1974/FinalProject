import React, { Component } from "react";
import "./results.css";

class results extends Component {
  componentDidMount() {
    console.log("Results Component DID MOUNT!");
  }
 



  
  render() {
    return (
      <div>
        <div className="words">
          <h4>
            You have just recorded your raction time. Now you can click to see
            how the history of your reaction times may be impacted by the
            following variables.
          </h4>
        </div>
        <a href="/Sleep">
          <button>Sleep</button>
        </a>
        <a href="/Mood">
          <button> Mood</button>
        </a>
        <a href="/Hunger">
          <button> Hunger</button>
        </a>
        <a href="/Exercise">
          <button> Exercise</button>
        </a>
      </div>
    );
  }
}
export default results;


