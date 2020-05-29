import React, { Component } from "react";
import "./welcome.css";




class Welcome extends Component {
  state = {};

  componentDidMount() {
 console.log("Home Component DID MOUNT!");
    sessionStorage.setItem("loggedin", true);
  }

  // Dynamically grabs name from local storage
  Name = window.sessionStorage.getItem("firstname");

  render() {
    return (
      // <>
      <div>
        <div className="title">
          {" "}
          Welcome {this.Name}! <br />
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div id="PlayGame">Play game</div>

        <div className="bob d-flex justify-content-center">
          <br></br>
          <br></br>
          <section className="bob d-flex justify-content-center">
            <a href="/Instructions">
              <img
                id="whatever"
                src="https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif"
                alt=""
              />
            </a>
          </section>
        </div>
        <div id="PlayGame2">See Results</div>

        <div className="bob d-flex justify-content-center">
          <br></br>
          <br></br>
          <section className="bob d-flex justify-content-center">
            <a href="/Results">
              <img
                id="whatever2"
                src="https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif"
                alt=""
              />
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Welcome;
