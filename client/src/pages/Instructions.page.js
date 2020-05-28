import React, { Component } from 'react';
import "./instructions.css"
import { white, red } from 'color-name';
class Instructions extends Component {
        constructor(props) {
          super(props);
          this.state = {
            hidden: false,
          };
          
        }

        
          componentDidMount(){
            var timeout = setTimeout(() => {
                this.setState((state) => ({
                  hidden: true,
                }));
              }, 10000);
            }

        
    render() { 
        return ( 
         <>
          <h1  style={{ color: red
       }}
        > Instructions:</h1>
         <div  
         style={{ 
           color: white
        }} > 
         <p> Before you begin the game, you will need to take a quick questionnaire. To proceed to the questionnaire click on the gif below 
        </p>
       </div>
         
       
       <a href="/Form"> <img src='https://media3.giphy.com/media/LOznMvZUKneOhiIscg/giphy.gif' alt="" 
         style={{ 
             width: 200,
            height: 200 
        }} />   
       
        </a>
         </> );
    }
}
 
export default Instructions;

