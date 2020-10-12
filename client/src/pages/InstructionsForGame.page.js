import React, { Component } from "react";
import "./InstructionsForGame.css";
class InstructionsForGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  componentDidMount() {
    var timeout = setTimeout(() => {
      this.setState((state) => ({
        hidden: true,
      }));
    }, 10000);
  }

  render() {
    return (
      <div>
        <p className="lol">
          <h1> Game Instructions:</h1>
          <h2>Purpose:</h2>
          The following game is designed to test your reaction speed by
          measuring the time it takes you to click the boxs that appear on the
          page.
          <br />
          <br />
          <h2>How to play:</h2>
          Your objective is to click the boxes as quickly as you can.
          <br />
          When you click the start button below you will be taken to a new page.
          Immediatly afterwards, you will notice a box appear on the page. You
          must click this box, and all the subsequent boxes until the game is
          completed. You will know the game is done when a large red button
          appears on the screen.
          <a href="/Game">
            {" "}
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc9e1141599113.57ac73aa7fe04.gif"
              alt=""
              style={{
                height: 150,
              }}
            />
          </a>
        </p>
      </div>
    );
  }
}

export default InstructionsForGame;
