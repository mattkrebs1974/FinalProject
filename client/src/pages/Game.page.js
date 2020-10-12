import React, { Component } from "react";
import "./game.css";
import API from "../util/API";

var click = 0;
function rando() {
  return Math.floor(Math.random() * 60) + 20;
}

function randoInterval() {
  return Math.floor(Math.random() * 4000) + 500;
}

// A function used later to change the color of the box
function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  } //ends for loop
  return color;
}

//local storage variables
var email = window.sessionStorage.getItem("email");
var question1 = window.sessionStorage.getItem("question1");
var question2 = window.sessionStorage.getItem("question2");
var question3 = window.sessionStorage.getItem("question3");
var question4 = window.sessionStorage.getItem("question4");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      hidden: false,
      startTime: 0,
      score: 0,
      userResult: [],
    };
  }

  move() {
    var temparray = this.state.userResult;
    temparray.push((Date.now() - this.state.startTime) / 1000);
    click++;
    console.log(click);
    this.setState((state) => ({
      x: rando()+"%",
      y: rando()+"%",
      userResult: temparray,

      hidden: true,
      score: this.state.score + trackScore,
    }));
    const timeout = setTimeout(() => {
      this.setState((state) => ({
        hidden: false,
        startTime: Date.now(),
      }));
    }, randoInterval());

    var num = this.state.score / 8;
    var SuperNumber = num.toFixed(2);
    console.log("Your score", SuperNumber);

    if (click === 8) {
      clearTimeout(timeout);
      console.log("email:", email);
      API.gameData({
        score: SuperNumber,
        userResult: this.state.userResult,
        email: email,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    var trackScore = (Date.now() - this.state.startTime) / 1000;
  }

  componentDidMount() {
    this.setState({
      startTime: Date.now(),
    });
  }

  render() {
    console.log("x:", this.state.x);
    console.log("y:", this.state.y);
    return (
      <div>
        <div className="app" style={{ position: "relative", height: "80%"}}>
          <div
            style={{
              position: "absolute",
              visibility: this.state.hidden ? "hidden" : "visible",
              marginTop: "200px",
              top: this.state.y,
              right: this.state.x,
              height: 100,
              width: 100,
              borderradius: 50,
              backgroundColor: getRandomColor(),
            }}
            onClick={() => {
              this.move();
            }}
          ></div>
          <h1>
            {" "}
            Your reaction speed:{" "}
            {!!this.state.userResult[this.state.userResult.length - 1]
              ? this.state.userResult[this.state.userResult.length - 1].toFixed(
                  2
                )
              : null}{" "}
            seconds{" "}
          </h1>

          {click === 8 ? (
            <>
              <a href="/Results" alt="description of image">
                {" "}
                <img
                  id="resultspage"
                  src="https://www.freepnglogos.com/uploads/button-png/red-button-circle-image-pixabay-20.png"
                  alt="description of image"
                  style={{ width: 400, height: 400 }}
                />{" "}
              </a>
              <h2> Please select giant red button to see your results! </h2>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

//           <h2>Your composite score: {this.state.score.toFixed(2)} seconds</h2>
