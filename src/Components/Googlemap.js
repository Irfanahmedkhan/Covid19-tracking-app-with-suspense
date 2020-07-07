import GoogleMapReact from "google-map-react";
import React, { useState, useEffect } from "react";
import axios from "axios";


const SimpleMap= () => {

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
        color:'White',
        height: '25px',
        width : '35px',
        textAlign : 'center',
        backgroundColor:'#3b3b3b',
        borderRadius: '2px',
        padding : '2px'
      }}
    >
        <img src={data.countryInfo.flag} alt='countryflags' height='10px'/>

      {data.cases}
    </div>
    )})
  

   return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAOvSZKGDxvrOabsPb9f_YUG3_d3I1fcis" }}
          defaultCenter={{  lat: 30.0, lng: 80.0,}}
          defaultZoom={2}
        >

{map}
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;
