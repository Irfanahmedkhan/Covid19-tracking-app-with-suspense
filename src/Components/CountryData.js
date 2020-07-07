import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CountryData.css";
import Table from "react-bootstrap/Table";

// import "./countryData.css";

// import { fetchData } from "./API";
// const resource = fetchData();

function CountryData() {
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

      <form className='form'>
        <input type='search' placeholder='Search Country' onChange={(e) => setSearchCountries(e.target.value)}/>
      </form>
      <Table responsive className="table">
      
        <thead>
          
          <tr>
            <th>flag </th>
            <th>Country </th>
            <th>new cases </th>
            <th>toatal cases</th>
            <th>total reacovered</th>
            <th>total deaths</th>
            <th>Active cases</th>
          </tr>
        </thead>

        <tbody>

          {filterCountries.map((country, id) => {
            return (
              <tr key={id}>
                <td> <img src={country.countryInfo.flag}  alt='country flag' /> </td>
                <td>{country.country}</td>
                <td>{country.todayCases}</td>
                <td>{country.cases}</td>
                <td>{country.recovered}</td>
                <td>{country.deaths}</td>
                <td>{country.active}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>


    </div>
  );
}

export default CountryData;
