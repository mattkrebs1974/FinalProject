import React, { Component } from "react";


var counter = 0
var click= 0;
function rando(){
return Math.floor(Math.random()*400)+200;
}

  
export default class Home extends Component {


   


  constructor(props) {
  
    super(props);
    this.state = {
       x: 0,
        y: 0, 
        hidden: false,
        startTime: 0,
        score: 0
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
      hidden: true, 
      score: this.state.score + trackScore
    }));
    const timeout = setTimeout(() => {
      this.setState(state => ({
        hidden: false
      }));
    }, 1000)

    if (click===8){
    clearTimeout(timeout)

   }
var trackScore = (Date.now() -this.state.startTime)/ 1000
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
        <h2>Your composite score: {this.state.score}</h2>
        {click===8? <a href = "http://localhost:3000/Game"> <img src= 'https://www.freepnglogos.com/uploads/button-png/red-button-circle-image-pixabay-20.png' style={{ width: 400, height: 400}} /> </a>: null } 
        {click===8? <h1> Please select giant red button to proceed</h1>: null } 

      </div>
      </div>
    );
  }
}

