import React, { Component } from "react";
import Chart from "react-apexcharts";
import 'bootstrap/dist/css/bootstrap.min.css';

 
class App extends Component {



  constructor(props) {
    super(props);
 
    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
  render() {
    return (
      
      <>


      <h1>Hello User The following data reprsents your performance </h1>
      <Chart options={this.state.options} series={this.state.series} type="line" width={500} height={320} />

    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>

      
      </>

      )
  }
}


export default App;
