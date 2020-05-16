import React, { Component } from "react";



var click= 0;
function rando(){
return Math.floor(Math.random()*200)+200;
}

  
export default class Home extends Component {


   


  constructor(props) {
  
    super(props);
    this.state = {
       x: 0,
        y: 0, 
        hidden: false,
        startTime: 0,
       };
  }


  move() {
    
     click++
     console.log(click);
    this.setState(state => ({
      x:  rando(),
      y:  rando(),
      userResult:  (Date.now() -this.state.startTime)/ 1000,
      startTime: Date.now(),
      hidden: true
    }));
    const timeout = setTimeout(() => {
      this.setState(state => ({
        hidden: false
      }));
    }, 1000)

    if (click===5){
    clearTimeout(timeout)
  
   }
  }
  


componentDidMount(){
  this.setState(
   {
     startTime: Date.now()
   })
}



  render() {
    console.log("x:", this.state.x)
    console.log("y:", this.state.y)
    return (
      <div >
  
      <div style={{position: 'relative', height: 500}}>
        <div style={{
          position: 'absolute',
          visibility: this.state.hidden ? 'hidden' : 'visible',
          top: this.state.y,
          right: this.state.x,
          height: 100,
          width: 100,
          backgroundColor: 'yellow'
        }}
        onClick={() => {this.move( 
              )}}
        ></div>
        <h1> Your results: {this.state.userResult} seconds </h1>
        {click===5? <a href = "http://localhost:3000/Game"> hi</a>: null } 

        <p></p>


      </div>
      </div>
    );
  }
}

