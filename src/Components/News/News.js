import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./News.css";
// import pic from "../picture/pic.png";

const News = () => {
    const [data, setdata] = useState([]);
    
  

    useEffect(() => {
      axios.get('https:newsapi.org/v2/everything?q=PAKISTAN&apiKey=d94c4c05ef02463b96a8607ef9314103')
      .then(data => setdata(data));
      
    }, []);

    return (
        <div className="main-container">
        <ul>
          {data.map((a, i) => <li key={i}>123</li>)}
        </ul>

           {/* {articles.map((item, index) => {
        return (
          <div className="new" key={index}>
            <h2>
              {item.title} <br />
              <a href={item.url}>Read More </a>
              <img src={item.urlToImage} alt="news" />
            </h2>
          </div>
        );
      })}  */}
        </div>
    );
};

export default News;