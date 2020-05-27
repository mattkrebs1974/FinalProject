import React, { Component } from "react";
import "./results.css";

class results extends Component {
  componentDidMount() {
    console.log("Results Component DID MOUNT!");
  }
 



  
  render() {
    return (
<>
<h4> Thank you for participating in Brain SHmer. The results of your quiz have been scaled to questionare you took earlier. Please click on one of the buttons to see how  your game performance correlated with your health  </h4>

<a href="/Sleep"><button>Sleep</button></a>
<a href="/Mood"><button> Mood</button></a>
<a href="/Hunger"><button> Hunger</button></a>
<a href="/Exersise"><button> Exersise</button></a>


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