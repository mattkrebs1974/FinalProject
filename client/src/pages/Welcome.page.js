import React, {Component } from 'react';

class Welcome extends Component {
    state = {  }
    render() { 
        return (
            <>
            <h1>
            Welcome User to BrainGuage. What would you like to do today?
            </h1>
           <h2>To play the game below click here:</h2> <a href="http://localhost:3000/Instructions"> <img src='https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif' alt ="" style={{ width: 150, height: 150 }} /> </a>
           <h2>To access your previous results click here:</h2> <a href="http://localhost:3000/Results"> <img src='https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif' alt ="" style={{ width: 150, height:150 }} /> </a>
            </>
          );
    }
}
 
export default Welcome ;