import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData";
import Charts from "./Components/Charts";
import GoogleMap from "./Components/Googlemap";
import "./App.css";
import CountryData from "./Components/CountryData";
// import News from "./Components/News";
import DetailsCountry from "./Components/DetailsCountry";
import StartModal from "./Components/Model$loader/StartModal";
import { CircleLoader } from 'react-spinners'
import { css } from '@emotion/core'
import Navbar from './Components/Navbar'

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
