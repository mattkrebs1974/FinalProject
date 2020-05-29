import React, { Component } from "react";
import "./results.css";

class results extends Component {
  componentDidMount() {
    console.log("Results Component DID MOUNT!");
  }
 



  
  render() {
    return (
<>
<div className="words">
<h4>
The following buttons bring you to charts which tell you how your feeling correlates with your response time. This becomes much more interesting over time- so come back often! </h4>


<a href="/Sleep"><button>Sleep</button></a>
<a href="/Mood"><button> Mood</button></a>
<a href="/Hunger"><button> Hunger</button></a>
<a href="/Exercise"><button> Exercise</button></a>

</div>
</>      
    );
  }
}
export default results;


