import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";
import Table from "react-bootstrap/Table";



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
          placeholder="Search city"
          onChange={(e) => setSearchCountries(e.target.value)}
        />
      </form>

      <div>
        
          {filterCountries.map((country, id) => {
              return(
                  <div className='card' key={id}>  
                      {/* <span><img src={country.countryInfo.flag} alt='country flag' /></span> */}
                     
                      <Table responsive className="table">
                          <thead>
                              <tr>
                                                    
                                  <td>total deaths</td>
                                  <td>Active cases</td>
                              </tr>
                          </thead>

                          <tbody>

                                      <tr key={id}>
                                          <th> {country.country}</th>
                                          <th>{country.country}</th>

                                      </tr>
                          </tbody>
                      </Table>


              </div>)
          })}

      </div>
    </div>
  );
}

export default DetailsData;
