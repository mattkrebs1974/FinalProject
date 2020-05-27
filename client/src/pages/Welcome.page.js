import React, { Component } from 'react';
import "./welcome.css"



class Welcome extends Component {
    state = {}

// Dynamically grabs name from local storage 
Name = window.localStorage.getItem("firstname");



    render() {
        return (
            <>
    
        <h1 className="welcome-message">
                    Welcome {this.Name}! <br/>
            </h1>
         <div className="row">
          <div className="column">
                <div className="photo" > <h2>Play game</h2> <a href="/Instructions"> <img src='https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif' alt="" style={{ width: 300, height: 300 }} /> </a></div>
                </div>
          <div className="column">
                <div className="photo" ><h2>See Results</h2> <a href="/Results"> <img src='https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif' alt="" style={{ width: 300, height: 300 }} /> </a></div>
                </div>
                </div>
                </>
        );
    }
}

export default Welcome;
