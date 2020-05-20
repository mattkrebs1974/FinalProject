import React, { Component } from 'react';

class Instructions extends Component {
    state = {  }
    render() { 
        return ( <>
           
          <h1> Instructions:</h1>
         <p>The following game is designed to test your performance 
         Prior to the game, you will need to take a quick test which may in the long run help improve your performance. Please click the brain below to continue</p>
         <a href="http://localhost:3000/Form"> <img src='https://www.kindpng.com/picc/m/46-468918_brain-clipart-draw-aesthetic-brain-drawing-hd-png.png' style={{ width: 100, height: 100 }} /> </a>
                 </> );
    }
}
 
export default Instructions;

