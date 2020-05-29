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
import sleep from "./pages/sleep.page";
import hunger from "./pages/hunger.page";
import mood from "./pages/mood.page";
import exercise from "./pages/exercise.page";
import timeofday from "./pages/timeofday.page";
import Navbar from "./pages/navbar.page";
import Scatter from "./pages/scatterline.page";



import Navbar2 from "./pages/navbar2.page"
import InstructionsForGame from "./pages/InstructionsForGame.page"








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
                <Route path="/sleep" component={sleep} />
                <Route path="/hunger" component={hunger} />
                <Route path="/mood" component={mood} />
                <Route path="/exercise" component={exercise} />
                <Route path="/results" component={results} />
                <Route path="/Instructions" component={Instructions} />
                <Route path="/timeofday" component={timeofday} />
                <Route path="/scatter" component={Scatter} />
                <Route path="/InstructionsForGame" component={InstructionsForGame} />
              </Switch>
            </div>
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
