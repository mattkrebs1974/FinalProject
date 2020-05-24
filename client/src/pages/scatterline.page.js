import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./scatterline.css";
import API from "../util/API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "line",
        },
        fill: {
          type: "solid",
        },
        markers: {
          size: [6, 0],
        },
        tooltip: {
          shared: false,
          intersect: true,
          fillSeriesColor: true,
          theme: true,
          style: {
            fontSize: "20px",
          },
        },
        legend: {
          show: true,
          labels: {
            colors: "white",
            useSeriesColors: false,
          },
          fontSize: "20",
        },
        xaxis: {
          labels: {
            style: {
              fontSize: "15",
              colors: "white",
            },
          },

          type: "numeric",
          min: 0,
          max: 5,
          tickAmount: 5,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "15",
              colors: "white",
            },
          },

          type: "numeric",
          min: 0,

          tickAmount: 5,
        },
      },
      series: [
        {
          name: "Points",
          type: "scatter",
          //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
          data: [
            {
              x: 1,
              y: 2.14,
            },
            {
              x: 1.2,
              y: 2.19,
            },

            {
              x: 1.8,
              y: 2.43,
            },
            {
              x: 2.3,
              y: 3.8,
            },
            {
              x: 2.6,
              y: 4.14,
            },
            {
              x: 2.9,
              y: 5.4,
            },
            {
              x: 3.2,
              y: 5.8,
            },
            {
              x: 3.8,
              y: 6.04,
            },
            {
              x: 4.55,
              y: 6.77,
            },
            {
              x: 4.9,
              y: 8.1,
            },
            {
              x: 5.1,
              y: 9.4,
            },
            {
              x: 7.1,
              y: 7.14,
            },
            {
              x: 9.18,
              y: 8.4,
            },
          ],
        },
        {
          name: "Current Score",
          type: "scatter",

          style: {
            colors: "red",
          },

          //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
          data: [
            {
              x: 4,
              y: 4,
            },
          ],
        },
        {
          name: "Line",
          type: "scatter",

          data: [
            {
              x: 1,
              y: 1,
            },
            {
              //mean
              x: 2,
              y: 3,
            },
            {
              x: 5,
              y: 9,

              //   slope = 2 -- at 3 +2 +2+2, (5,9)
              //    slope =2 -- biggest x = 2 that means 3 more (3)(slope)=6 slopes to 5
            },
            // slope = 2 at 1 -2 =-1
            {
              x: 0,
              y: -1,
            },
          ],
        },
      ],
    };
  }

 
  componentDidMount() {
    console.log("Chart Component DID MOUNT!");
    const findemail = window.localStorage.getItem("email");
    let dataArray = [];
    API.performancedata({ email: findemail })
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          let newObject = {};
          newObject.x = res.data[i].score;
          newObject.y = res.data[i].question1;
          dataArray.push(newObject);
        }
        this.setState(
          {
            options: {
              ...this.state.options,
            },
            series: [
              {
                ...this.state.series.data,
                data: dataArray,
              },
            ],
          },
          () => console.log(this.state)
        );
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="charts">
        <Chart
          options={this.state.options}
          series={this.state.series}
          width={"90%"}
        />
      </div>
    );
  }
}

export default App;

      
    









// import React, { Component } from "react";
// import Chart from "react-apexcharts";
// import "./scatterline.css";


// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           height: 350,
//           type: "line",
//         },
//         fill: {
//           type: "solid",
//         },
//         markers: {
//           size: [6, 0],
//         },
//         tooltip: {
//           shared: false,
//           intersect: true,
//         },
//         legend: {
//           show: true,
//           labels: {
//             colors: "white",
//             useSeriesColors: false,
//           },
//           fontSize: "20",
//         },
//         xaxis: {
//           labels: {
//             style: {
//               fontSize: "15",
//               colors: "white",
//             },
//           },

//           type: "numeric",
//           min: 0,
//           max: 5,
//           tickAmount: 5,
//         },
//         yaxis: {
//           labels: {
//             style: {
//               fontSize: "15",
//               colors: "white",
//             },
//           },

//           type: "numeric",
//           min: 0,

//           tickAmount: 5,
//         },
//       },
//       series: [
//         {
//           name: "Points",
//           type: "scatter",
//           //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
//           data: [
//             {
//               x: 1,
//               y: 2.14,
//             },
//             {
//               x: 1.2,
//               y: 2.19,
//             },
//             {
//               x: 1.8,
//               y: 2.43,
//             },
//             {
//               x: 2.3,
//               y: 3.8,
//             },
//             {
//               x: 2.6,
//               y: 4.14,
//             },
//             {
//               x: 2.9,
//               y: 5.4,
//             },
//             {
//               x: 3.2,
//               y: 5.8,
//             },
//             {
//               x: 3.8,
//               y: 6.04,
//             },
//             {
//               x: 4.55,
//               y: 6.77,
//             },
//             {
//               x: 4.9,
//               y: 8.1,
//             },
//             {
//               x: 5.1,
//               y: 9.4,
//             },
//             {
//               x: 7.1,
//               y: 7.14,
//             },
//             {
//               x: 9.18,
//               y: 8.4,
//             },
//           ],
//         },
//         {
//           name: "Current Score",
//           type: "scatter",
//           style: {
//             colors: "red",
//           },

//           //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
//           data: [
//             {
//               x: 4,
//               y: 4,
//             },
//           ],
//         },
//         {
//           name: "Line",
//           type: "line",

//           data: [
//             {
//               x: 1,
//               y: 1,
//             },
//             {
//               //mean
//               x: 2,
//               y: 3,
//             },
//             {
//               x: 5,
//               y: 9,

//               //   slope = 2 -- at 3 +2 +2+2, (5,9)
//               //    slope =2 -- biggest x = 2 that means 3 more (3)(slope)=6 slopes to 5
//             },
//             // slope = 2 at 1 -2 =-1
//             {
//               x: 0,
//               y: -1,
//             },
//           ],
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className = "charts">
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
       
//         width={"100%"}
       
//       />
//       </div>
//     );
//   }
// }

// export default App;
