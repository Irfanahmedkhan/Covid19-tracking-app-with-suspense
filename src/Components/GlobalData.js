import React from 'react'
import { fetchData } from "./API";
import CountUp from 'react-countup';
import "./GolobalData.css";


const resource = fetchData();


function GlobalData() {
    const user = resource.user.read();
    console.log('user', user);

    return (
        <div>


            <div className='confirmed'>
                <h3>total confirmed</h3>
                <h2><CountUp start={0} end={user.confirmed.value} duration={2.75} separator="," /></h2>
                <p>{new Date(user.lastUpdate).toDateString()}</p>
            </div>

            <div className='recovered'>
                <h3>total recovered</h3>
                <h2><CountUp start={0} end={user.recovered.value} duration={2.75} separator="," /></h2>
                <p>{new Date(user.lastUpdate).toDateString()}</p>
            </div>

            <div className='deaths'>
                <h3>total deaths</h3>
                <h2><CountUp start={0} end={user.deaths.value} duration={2.75} separator="," /></h2>
                <p>{new Date(user.lastUpdate).toDateString()}</p>
            </div>

        
        </div>
    )
}

export default GlobalData
