import React from "react";
import { fetchData } from "./API";
// import "./GolobalData.css";
import { Pie } from "react-chartjs-2";
// Line, Bar, Doughnut, 
const resource = fetchData();

function Charts() {
  const global = resource.global.read();

  const {
    active,
    cases,
    critical,
    deaths,
    recovered,

  } = global;

    // todayCases,
    // todayDeaths,
    // todayRecovered,
    // updated,

  const data = {
    labels: ["Cases", "Active", "Recovered", "critical", "Deaths"],
    datasets: [
      {
        label: "Global Data",
        data: [cases, active, recovered, critical, deaths],
        borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        pointBackgroundColor: "blue",
        pointBorderColor: "yellow",
      },
    ],
  };

//   const option = {
//     title: {
//       display: true,
//       text: "Line Chart",
//     },

//   };

  return (
    <div className="global">
          <Pie data={data} />
    </div>
  );
}

export default Charts;
