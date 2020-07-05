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

            <h4>global data</h4>
            <p>{new Date(global.updated).toDateString()}</p>

            <div className='confirmed'>
                <p>total confirmed</p>
                <p><CountUp start={0} end={global.cases} duration={2.75} separator="," /></p>
            </div>

            <div className='recovered'> 
                <p>total recovered</p>
                <p><CountUp start={0} end={global.recovered} duration={2.75} separator="," /></p>
            </div>

            <div className='deaths'>
                <p>total deaths</p>
                <p><CountUp start={0} end={global.deaths} duration={2.75} separator="," /></p>
            </div>

        </div>
    )
}

export default GlobalData
