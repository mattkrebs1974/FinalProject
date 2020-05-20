import React, { Component } from "react";
export default class Form extends Component {
 
    constructor() {
      super();
      this.state = {
        name: "React"
      };
      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
    }
    onValueChange(event) {
      this.setState({
        selectedOption: event.target.value
      });
    }
    formSubmit(event) {
      event.preventDefault();
      console.log(this.state.selectedOption)
    }
    render() {
      return (
          <>

        <form onSubmit={this.formSubmit}>
          <div className="radio">
            <label>
              <h3> On a scale of 1 - 5 how well rested do you feel</h3>
              <input
                type="radio"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.onValueChange}
              />
              1 
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={this.onValueChange}
              />
              2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="3"
                checked={this.state.selectedOption === "3"}
                onChange={this.onValueChange}
              />
              3
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="4"
                checked={this.state.selectedOption === "4"}
                onChange={this.onValueChange}
              />
              4
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="5"
                checked={this.state.selectedOption === "5"}
                onChange={this.onValueChange}
              />
              5
            </label>
          </div>
          <button className="btn btn-default" type="submit" >
            Submit
          </button>
          <div className="radio">
            <label>
              <h3> On a scale of 1- 5 how sad or happy do you feel today</h3>
              <input
                type="radio"
                value="6"
                checked={this.state.selectedOption === "6"}
                onChange={this.onValueChange}
              />
              1 
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="7"
                checked={this.state.selectedOption === "7"}
                onChange={this.onValueChange}
              />
              2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="8"
                checked={this.state.selectedOption === "8"}
                onChange={this.onValueChange}
              />
              3
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="9"
                checked={this.state.selectedOption === "9"}
                onChange={this.onValueChange}
              />
              4
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="10"
                checked={this.state.selectedOption === "10"}
                onChange={this.onValueChange}
              />
              5
            </label>
          </div>
          <button className="btn btn-default" type="submit" >
            Submit
          </button>
          <div className="radio">
            <label>
              <h3> On a scale of 1 - 5 What is your level of hunger</h3>
              <input
                type="radio"
                value="11"
                checked={this.state.selectedOption === "11"}
                onChange={this.onValueChange}
              />
              1 
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="12"
                checked={this.state.selectedOption === "12"}
                onChange={this.onValueChange}
              />
              2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="13"
                checked={this.state.selectedOption === "13"}
                onChange={this.onValueChange}
              />
              3
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="14"
                checked={this.state.selectedOption === "14"}
                onChange={this.onValueChange}
              />
              4
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="15"
                checked={this.state.selectedOption === "15"}
                onChange={this.onValueChange}
              />
              5
            </label>
          </div>
          <button className="btn btn-default" type="submit" >
            Submit
          </button>
          <div className="radio">
            <label>
              <h3> On a scale of 1 - 5 how physically active have you been today</h3>
              <input
                type="radio"
                value="16"
                checked={this.state.selectedOption === "16"}
                onChange={this.onValueChange}
              />
              1 
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="17"
                checked={this.state.selectedOption === "17"}
                onChange={this.onValueChange}
              />
              2
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="18"
                checked={this.state.selectedOption === "18"}
                onChange={this.onValueChange}
              />
              3
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="19"
                checked={this.state.selectedOption === "19"}
                onChange={this.onValueChange}
              />
              4
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="20"
                checked={this.state.selectedOption === "20"}
                onChange={this.onValueChange}
              />
              5
            </label>
          </div>
          <a href="http://localhost:3000/game"></a> <button className="btn btn-default" type="submit" >
          >  Submit
          </button><a/>
        </form>

        <a href="http://localhost:3000/Game"><button className="btn btn-default" type="submit" >
click click here to continue
          </button></a>

        </>
      );
    }
  }