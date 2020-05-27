import React, { Component } from 'react';
import "./instructions.css"
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
          <h1  style={{ 
            visibility:this.state.hidden ? "hidden" : "visible"
       }}
        > Instructions:</h1>
         <div  
         style={{ 
             visibility:this.state.hidden ? "hidden" : "visible"
        }} > 
         <p> This text is going to dissapear in ten seconds
        </p>
       </div>
         
       
       <a href="/Form"> <img src='https://www.kindpng.com/picc/m/46-468918_brain-clipart-draw-aesthetic-brain-drawing-hd-png.png' alt="" 
         style={{ 
             width: 200,
            height: 200 
        }} />   
       
        </a>
         </> );
    }
}
 
export default Instructions;

