import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData/GlobalData";
import Charts from "./Components/GlobalChart/Charts";
import GoogleMap from "./Components/GoogleMap/Googlemap";
import "./App.css";
import CountryData from "./Components/CountryData/CountryData";
// import News from "./Components/News";
import DetailsCountry from "./Components/DetailsCountry/DetailsCountry";
import StartModal from "./Components/StartModal/StartModal";
import Navbar from './Components/Navbar/Navbar'
// Loading 
import { CircleLoader } from 'react-spinners'
import { css } from '@emotion/core'
const loader = css ` margin-top : 50%; `


const App = () => {

  return (
    <div className="container">


      <StartModal /> 

      <Suspense fallback={<CircleLoader css={loader} size={200} color='rgb(101, 255, 222)' loading />}>

        <div className="nav">   
        <Navbar />
           </div>

        <div className="globaldata">
          
          <GlobalData />
        </div>

        <div className="globalchart">
          
          <Charts />
        </div>

        <div className="map">
          
          <GoogleMap />
        </div>
        <div className="details">
          
          <DetailsCountry />
        </div>

        <div className="news"> News (will update) </div>

        <div className="countrydata">
          
          <CountryData />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
