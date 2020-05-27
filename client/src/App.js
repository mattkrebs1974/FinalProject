import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Login from "./pages/login.page";
import SignUp from "./pages/signup.page";
import Home from "./pages/home.page";

import GameOne from "./pages/Game.page"
import Welcome from "./pages/Welcome.page"
import Form from "../src/pages/Form.page"
import results from "./pages/results.page";
import Instructions from "./pages/Instructions.page";
import Sleep from "./pages/sleep.page";
import Hunger from "./pages/hunger.page";
import Mood from "./pages/mood.page";
import Exercise from "./pages/exercise.page";
import timeofday from "./pages/timeofday.page";
import Navbar from "./pages/navbar.page";







function App() {
  return (
    <div className="App">
      <Router>
      <>
      <Navbar />
        <div className="auth-wrapper">
          <div className="resultscontainer">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/Game" component={GameOne} />
              <Route path="/Welcome" component={Welcome} />
              <Route path="/Form" component={Form} />
              <Route path="/Sleep" component={Sleep} />
              <Route path="/Hunger" component={Hunger} />
              <Route path="/Mood" component={Mood} />
              <Route path="/Exercise" component={Exercise} />
              <Route path="/results" component={results} />
              <Route path="/Instructions" component={Instructions} />
              <Route path="/timeofday" component={timeofday} />
            </Switch>
          </div>
        </div>
        </>
      </Router>
    </div>
  );
}

export default App;
