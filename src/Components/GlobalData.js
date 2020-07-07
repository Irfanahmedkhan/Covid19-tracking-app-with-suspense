import React from 'react'
import { fetchData } from "./API";
import CountUp from 'react-countup';
import "./GolobalData.css";
// import { Line, bar } from "react-chartjs-2";


const resource = fetchData();


function GlobalData() {
    
    const global = resource.global.read();


    return (
        <div className='global'>

            <h1>global data</h1>
            <p>{new Date(global.updated).toDateString()}</p>

            <div className='confirmed'>
                <h3>total confirmed</h3>
                <h3><CountUp start={0} end={global.cases} duration={2} separator="," /></h3>
            </div>

            <div className='recovered'> 
                <h3>total recovered</h3>
                <h3><CountUp start={0} end={global.recovered} duration={2} separator="," /></h3>
            </div>

            <div className='deaths'>
                <h3>total deaths</h3>
                <h3><CountUp start={0} end={global.deaths} duration={2} separator="," /></h3>
            </div>

        </div>
    )
}

export default GlobalData
