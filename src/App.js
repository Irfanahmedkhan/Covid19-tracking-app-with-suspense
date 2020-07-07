import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData";
import Charts from "./Components/Charts";
import GoogleMap from "./Components/Googlemap";
import "./App.css";
import CountryData from "./Components/CountryData";
// import News from "./Components/News";
import DetailsCountry from "./Components/DetailsCountry";

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<h1> Laoding User ... </h1>}>

        <div className="nav"> Navbar </div>

        <div className="globaldata"> <GlobalData />  </div>

        <div className="globalchart"> <Charts />    </div>

        <div className="map">  <GoogleMap /> </div>
        <div className="details">  <DetailsCountry /> </div>

        <div className="news"> News (will update) </div>

        <div className="countrydata"> <CountryData />   </div>

      </Suspense>

    </div>
  );
};


export default App;
