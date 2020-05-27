import React, { Component } from 'react';
import "./welcome.css"
class Welcome extends Component {
    state = {}

    

    render() {
        return (
            <>
                <h1 className="welcome-message">
                    Welcome User to BrainGuage. What would you like to do today?
            </h1>
                <div className="instruct"> <h2>Play game</h2> <a href="/Instructions"> <img src='https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif' alt="" style={{ width: 150, height: 150 }} /> </a></div>
                <div className="result"><h2>Results</h2> <a href="/Results"> <img src='https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif' alt="" style={{ width: 150, height: 150 }} /> </a></div>
            </>
        );
    }
}

export default Welcome;