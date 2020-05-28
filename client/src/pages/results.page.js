import React, { Component } from "react";
import "./results.css";

class results extends Component {
  componentDidMount() {
    console.log("Results Component DID MOUNT!");
  }
 



  
  render() {
    return (
<>

<h4> Thank you for playing Brain Guage. Earlier, you answered how you felt on a variety of metrics from 1-5. <br/> 
The following links bring you to charts which tell you how your feeling correlates with your score. This becomes much more interesting over time  so come back often! </h4>


<a href="/Sleep"><button>Sleep</button></a>
<a href="/Mood"><button> Mood</button></a>
<a href="/Hunger"><button> Hunger</button></a>
<a href="/Exercise"><button> Exercise</button></a>


</>      
    );
  }
}
export default results;



//   
 // state = {
  //   email: "",
  // };
  // loadUsers = (event) => {
  //   event.preventDefault();
  //   API.performancedata({ something: "value" })
  //     .then((res) =>
  //       this.setState({
  //         email: "",
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // };


//   <form>
//   <button
//     id="submit"
//     type="submit"
//     className="submit btn btn-primary btn-block"
//     onClick={this.loadUsers}
//   >
//     Show Data
//   </button>
// </form>