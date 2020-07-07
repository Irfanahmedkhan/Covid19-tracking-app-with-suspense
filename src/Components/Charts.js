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


  const options = {
    legend: false,
    tooltip: true,
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        backgroundColor: '#1a1919',
        borderColor: null,
        borderRadius: 2,
        borderWidth: 1,
        color: "white",
        font: {
          size: 10,
          weight: 600,
        },
        offset: -10,
        padding: 0,
        formatter: 5,
      },
    },
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


  const pieoptions = {
    legend: false,
    tooltip: true,
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        backgroundColor: '#1a1919',
        borderColor: null,
        borderRadius: 2,
        borderWidth: 1,
        color: "white",
        font: {
          size: 11,
          weight: 600,
        },
        offset: -35,
        padding: 2,
        formatter: 15,
      },
    },
  };





  return (
    <div className="global">
      <Pie data={data} options={pieoptions}/>
      <HorizontalBar data={HBar} options={options} />
    </div>
  );
}




export default Charts;
