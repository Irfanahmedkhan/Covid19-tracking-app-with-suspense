import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DetailsCountry.css";
import { HorizontalBar } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

// defaults.global.defaultColor = 'red';
defaults.global.defaultFontColor = "white";
// defaults.global.defaultFontFamily = 'arial';

function CountryDetails() {
  const [countryData, setcountryData] = useState([]);

  const [searchCountries, setSearchCountries] = useState("");

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then((res) => {
        setcountryData(res.data);
      })
      .catch((error) => "Error");
  }, []);

  const filterCountries = countryData.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  return (
    <div className="country">
      <form className="form">
        <input
          type="search"
          placeholder="Search Country"
          onChange={(e) => setSearchCountries(e.target.value)}
        />
      </form>

      <div>
        {filterCountries.map((country, id) => {
          //Country Chart

          const { cases, critical, recovered, active, deaths, todayCases, todayDeaths, todayRecovered, tests,  } = country;

          const data = {
            labels: ["Total Cases :", "Recovered :", "Deaths :", "Active :", 'Critical :'],
            datasets: [
              {
                label: "HorizontalBar Chart",
                data: [cases, recovered, deaths, active, critical,  ],
                borderColor: ["#faa422", "#026e26", "#e73d1f", "#1c7ad1", '#ea00ff' ],
                backgroundColor: ["#faa422", "#026e26", "#e73d1f", "#1c7ad1", '#ea00ff' ],
                fill: false,
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
                backgroundColor: '#333333',
                borderColor: null,
                borderRadius: 2,
                borderWidth: 1,
                color: "white",
                font: {
                  size: 11,
                  weight: 600,
                },
                offset: 5,
                padding: 3,
                formatter: 5,
              },
            },
          };


          const dailydata = {
            labels: ['Tested :', "Cases :", "Recovered :", "Deaths :", ],
            datasets: [
              {
                label: "HorizontalBar Chart",
                data: [tests, todayCases, todayRecovered, todayDeaths, ],
                borderColor: ["#faa422", "#026e26", "#e73d1f", "#1c7ad1", '#ea00ff'],
                backgroundColor: ["#faa422", "#026e26", "#e73d1f", "#1c7ad1", '#ea00ff'],
                fill: false,
              },
            ],
          };

          const dailyoptions = {
            
            title : {
              display : true,
              fontSize: 17,
              fontColor: "red",

              text: 'Daily Data (24 Hrs)',
            },
            legend: false,
            tooltip: true,
            plugins: {
              datalabels: {
                align: "end",
                anchor: "end",
                backgroundColor: '#333333',
                borderColor: null,
                borderRadius: 2,
                borderWidth: 1,
                color: "white",
                font: {
                  size: 11,
                  weight: 600,
                },
                offset: 5,
                padding: 3,
                formatter: 5,
              },
            },
          };

          return (
            <div className="countrycard" key={id}>
              <div className="countryflag">
                <img src={country.countryInfo.flag} alt="country flag" />
              </div>

              <div className="name">
                <h2>{country.country}</h2>
                <span>
                  <h4>Country Papulation : </h4>
                  <h3>{country.population}</h3>
                </span>
              </div>

              <div className="chart2">
                <HorizontalBar data={dailydata} options={dailyoptions} />

                <HorizontalBar data={data} options={options} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryDetails;
