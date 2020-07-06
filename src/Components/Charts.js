import React from "react";
import { fetchData } from "./API";
// import "./GolobalData.css";
import {Pie, HorizontalBar } from "react-chartjs-2";
const resource = fetchData();

function Charts() {
  const global = resource.global.read();

  const {
    active,
    cases,
    deaths,
    recovered,

  } = global;

    // todayCases,
    // todayDeaths,
    // todayRecovered,
    // updated,
// critical

  const data = {
    labels: ["Total Cases", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: 'HorizontalBar Chart',
        data: [cases, active, recovered, deaths],
        borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
      }, 
    ],
  };



  const HBar = {
    labels: ["Total Cases", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: 'HorizontalBar Chart',
        data: [cases, active, recovered, deaths],
        borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
      },
    ],
  };




  return (
    <div className="global">
      <Pie data={data} />
      <HorizontalBar data={HBar} />
    </div>
  );
}




export default Charts;
