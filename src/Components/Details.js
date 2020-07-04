import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";



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
              return(
                  <div className='card' key={id}>  
                    <div><img src={country.countryInfo.flag} alt='country flag' /> </div>
                    <div>
                          <span><h4>Country :</h4> {country.country}</span> <br />
                          <span><h4>Country Population :</h4> {country.population}</span><br />
                          <span><h4>New Cases(24 Hrs) :</h4>{country.todayCases}</span><br />
                          <span><h4>Total Cases :</h4> {country.cases}</span><br />
                          <span><h4>New Recovered (24 Hrs)</h4>{country.todayRecovered}</span><br />
                          <span><h4>Total Recovered :</h4>{country.recovered}</span><br />
                          <span><h4>Crtical Condition :</h4> {country.critical}</span><br />
                          <span><h4>Total Deaths :</h4>{country.deaths}</span>
                    </div>
                      
              
              </div>)
          })}

      </div>
    </div>
  );
}

export default DetailsData;
