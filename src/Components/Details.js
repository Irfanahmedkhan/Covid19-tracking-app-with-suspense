import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";
import { Pie } from "react-chartjs-2";

function DetailsData() {
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
          placeholder="Enter Country"
          onChange={(e) => setSearchCountries(e.target.value)}
        />
      </form>

      <div>
        {filterCountries.map((country, id) => {
          //Country Chart
          const { cases, recovered, active, deaths } = country;
          const data = {
            labels: ["Total Cases", "Active", "Recovered", "Deaths"],
            datasets: [
              {
                label: "HorizontalBar Chart",
                data: [cases, recovered, active, deaths],
                borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
                backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
              },
            ],
          };

          return (
            <div className="countrycard" key={id}>
              <div className="flagcard">
                <div>
                  <img src={country.countryInfo.flag} alt="country flag" />{" "}
                </div>
                <div>
                  <span>
                    <h4>Country :</h4> {country.country}
                  </span>
                  <span>
                    <h4>Country Population :</h4> {country.population}
                  </span>
                </div>
              </div>
              <div className="countrychart">
                <Pie data={data} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailsData;
