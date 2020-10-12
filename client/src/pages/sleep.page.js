import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./scatterline.css";
import API from "../util/API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        grid: {
          padding: {
            left: 10,
          },
        },
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: true,

            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,

              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            autoSelected: "zoom",
          },
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
            colors: "#000",
          },
        },
        legend: {
          show: true,
          labels: {
            colors: "white",
            useSeriesColors: true,
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
          title: {
            text: "1.0 = Very Tired; 5.0 = Wide Awake",
            style: {
              color: "#FFF",
              fontSize: "20",
              cssClass: "animal",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: "15",
              colors: "white",
            },
          },
          title: {
            text: "Reaction Time",
            style: {
              color: "white",
              fontSize: "20",
              cssClass: "animal",
            },
          },

          type: "numeric",
          min: 0,

          tickAmount: 5,
        },
      },
      series: [
        {
          name: "Reaction Time",
          type: "scatter",
          //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
          data: [],
        },
      ],
    };
  }

  componentDidMount() {
    console.log("Chart Component DID MOUNT!");
    const findemail = window.sessionStorage.getItem("email");
    let dataArray = [];
    API.performancedata({ email: findemail })
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          let newObject = {};
          newObject.x = res.data[i].question1;

          newObject.y = res.data[i].score.toFixed(2);

          if (newObject.y && newObject.x) {
            dataArray.push(newObject);
          }
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
      <div>
        <div className="title2">
          Your "Sleepiness"
          <br></br>vs.<br></br>
          Your "Reaction Time"<br></br>
        </div>
        <div className="charts">
          <Chart
            options={this.state.options}
            series={this.state.series}
            width={"100%"}
          />
        </div>
      </div>
    );
  }
}

export default App;
