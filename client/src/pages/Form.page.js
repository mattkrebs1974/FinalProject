import React, { Component } from "react";

import "./radio.css";

class trial extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onValueChange2 = this.onValueChange2.bind(this);
    this.onValueChange3 = this.onValueChange3.bind(this);
    this.onValueChange4 = this.onValueChange4.bind(this);
    this.onValueChange5 = this.onValueChange5.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  onValueChange2(event) {
    this.setState({
      selectedOption2: event.target.value,
    });
  }
  onValueChange3(event) {
    this.setState({
      selectedOption3: event.target.value,
    });
  }
  onValueChange4(event) {
    this.setState({
      selectedOption4: event.target.value,
    });
  }
  onValueChange5(event) {
    this.setState({
      selectedOption5: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    console.log(this.state.selectedOption2);
    console.log(this.state.selectedOption3);
    console.log(this.state.selectedOption4);
    console.log(this.state.selectedOption5);
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <form>
              <div data-role="fieldcontain">
                <fieldset data-role="controlgroup" namee="bob">
                  <legend>How tired/awake are you?</legend>
                  very tired
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-1"
                    value="1"
                    checked={this.state.selectedOption === "1"}
                    onChange={this.onValueChange}
                  />
                  <label htmlFor="radio-choice-1"> 1 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-2"
                    value="2"
                    checked={this.state.selectedOption === "2"}
                    onChange={this.onValueChange}
                  />
                  <label htmlFor="radio-choice-2"> 2 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-3"
                    value="3"
                    checked={this.state.selectedOption === "3"}
                    onChange={this.onValueChange}
                  />
                  <label htmlFor="radio-choice-3"> 3 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-4"
                    value="4"
                    checked={this.state.selectedOption === "4"}
                    onChange={this.onValueChange}
                  />
                  <label htmlFor="radio-choice-4"> 4 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-5"
                    value="5"
                    checked={this.state.selectedOption === "5"}
                    onChange={this.onValueChange}
                  />
                  <label htmlFor="radio-choice-5"> 5 </label> wide awake
                </fieldset>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div data-role="fieldcontain">
                <fieldset data-role="controlgroup" namee="lola">
                  <legend>How hungry/stuffed are you?</legend>
                  very hungry
                  <input
                    type="radio"
                    name="radiochoice2"
                    id="radio-choice-1"
                    value="1"
                    checked={this.state.selectedOption2 === "1"}
                    onChange={this.onValueChange2}
                  />
                  <label htmlFor="radio-choice-1"> 1 </label>
                  <input
                    type="radio"
                    name="radiochoice2"
                    id="radio-choice-2"
                    value="2"
                    checked={this.state.selectedOption2 === "2"}
                    onChange={this.onValueChange2}
                  />
                  <label htmlFor="radio-choice-2"> 2 </label>
                  <input
                    type="radio"
                    name="radiochoice2"
                    id="radio-choice-3"
                    value="3"
                    checked={this.state.selectedOption2 === "3"}
                    onChange={this.onValueChange2}
                  />
                  <label htmlFor="radio-choice-3"> 3 </label>
                  <input
                    type="radio"
                    name="radiochoice2"
                    id="radio-choice-4"
                    value="4"
                    checked={this.state.selectedOption2 === "4"}
                    onChange={this.onValueChange2}
                  />
                  <label htmlFor="radio-choice-4"> 4 </label>
                  <input
                    type="radio"
                    name="radiochoice2"
                    id="radio-choice-5"
                    value="5"
                    checked={this.state.selectedOption2 === "5"}
                    onChange={this.onValueChange2}
                  />
                  <label htmlFor="radio-choice-5"> 5 </label> stuffed
                </fieldset>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div data-role="fieldcontain">
                <fieldset data-role="controlgroup">
                  <legend>How hungry/stuffed are you?</legend>
                  very hungry
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-1"
                    value="1"
                    checked={this.state.selectedOption3 === "1"}
                    onChange={this.onValueChange3}
                  />
                  <label htmlFor="radio-choice-1"> 1 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-2"
                    value="2"
                    checked={this.state.selectedOption3 === "2"}
                    onChange={this.onValueChange3}
                  />
                  <label htmlFor="radio-choice-2"> 2 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-3"
                    value="3"
                    checked={this.state.selectedOption3 === "3"}
                    onChange={this.onValueChange3}
                  />
                  <label htmlFor="radio-choice-3"> 3 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-4"
                    value="4"
                    checked={this.state.selectedOption3 === "4"}
                    onChange={this.onValueChange3}
                  />
                  <label htmlFor="radio-choice-4"> 4 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-5"
                    value="5"
                    checked={this.state.selectedOption3 === "5"}
                    onChange={this.onValueChange3}
                  />
                  <label htmlFor="radio-choice-5"> 5 </label> stuffed
                </fieldset>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div data-role="fieldcontain">
                <fieldset data-role="controlgroup">
                  <legend>How hungry/stuffed are you?</legend>
                  very hungry
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-1"
                    value="1"
                    checked={this.state.selectedOption4 === "1"}
                    onChange={this.onValueChange4}
                  />
                  <label htmlFor="radio-choice-1"> 1 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-2"
                    value="2"
                    checked={this.state.selectedOption4 === "2"}
                    onChange={this.onValueChange4}
                  />
                  <label htmlFor="radio-choice-2"> 2 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-3"
                    value="3"
                    checked={this.state.selectedOption4 === "3"}
                    onChange={this.onValueChange4}
                  />
                  <label htmlFor="radio-choice-3"> 3 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-4"
                    value="4"
                    checked={this.state.selectedOption4 === "4"}
                    onChange={this.onValueChange4}
                  />
                  <label htmlFor="radio-choice-4"> 4 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-5"
                    value="5"
                    checked={this.state.selectedOption4 === "5"}
                    onChange={this.onValueChange4}
                  />
                  <label htmlFor="radio-choice-5"> 5 </label> stuffed
                </fieldset>
              </div>
            </form>
          </div>
          <div>
            <form>
              <div data-role="fieldcontain">
                <fieldset data-role="controlgroup">
                  <legend>How hungry/stuffed are you?</legend>
                  very hungry
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-1"
                    value="1"
                    checked={this.state.selectedOption5 === "1"}
                    onChange={this.onValueChange5}
                  />
                  <label htmlFor="radio-choice-1"> 1 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-2"
                    value="2"
                    checked={this.state.selectedOption5 === "2"}
                    onChange={this.onValueChange5}
                  />
                  <label htmlFor="radio-choice-2"> 2 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-3"
                    value="3"
                    checked={this.state.selectedOption5 === "3"}
                    onChange={this.onValueChange5}
                  />
                  <label htmlFor="radio-choice-3"> 3 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-4"
                    value="4"
                    checked={this.state.selectedOption5 === "4"}
                    onChange={this.onValueChange5}
                  />
                  <label htmlFor="radio-choice-4"> 4 </label>
                  <input
                    type="radio"
                    name="radiochoice1"
                    id="radio-choice-5"
                    value="5"
                    checked={this.state.selectedOption5 === "5"}
                    onChange={this.onValueChange5}
                  />
                  <label htmlFor="radio-choice-5"> 5 </label> stuffed
                </fieldset>
              </div>
            </form>
          </div>
          <fieldset>
            <div className="bottom">
              <button
                className="btn btn-default"
                type="submit"
                onClick={this.formSubmit}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default trial; 
