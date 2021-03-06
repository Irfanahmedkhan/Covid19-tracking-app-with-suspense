import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './GoogleMap.css'


const GoogleMap= () => { 
  
  const [MapData, setMapData] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries")
      .then((res) => {
        setMapData(res.data);
      })
      .catch((error) => "Error");
  }, []);


  const map = MapData.map((data, i) => {
    
    return (
    <div key = {i}
    lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
      style={{
        color:'red',
        height: '25px',
        width : '35px',
        fontWeight: 800,
        textAlign : 'center',
        borderRadius: '2px',
                padding: 2 
      }}
    >
     <img src={data.countryInfo.flag} alt='countryflags' height='10px'/>
     
        {data.cases}
    </div>
    )})
  

   return (
      <div style={{ height: "50vh", width: "100%"}}>
       {/* <button>Confirmed</button>
       <button>Recovered</button>
       <button>Deaths</button> */}

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB4TJ2RplVQoitaYOnTFZRmv7jWbhrAG-Q" }}
          defaultCenter={{  lat: 30.0, lng: 80.0,}}
          defaultZoom={4}
        >

{map}
        </GoogleMapReact>
      </div>
    );
}

export default GoogleMap;
