import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData";
import Charts from "./Components/Charts";
import SimpleMap from "./Components/Googlemap";
import "./App.css";
import CountryData from "./Components/CountryData";
// import News from "./Components/News";
import DetailsCountry from "./Components/DetailsCountry";

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<h1>Laoding User ... </h1>}>

        <div className="nav">Navbar</div>

        <div className="main"><SimpleMap />       </div>

        <div className="news">
           {/* <News /> */}
             </div>

        <div className="globaldata"> <GlobalData /> </div>

        <div className="countrydata"> </div>

        <div className="globalchart"> <Charts />
         </div>

        <div className="DetailsCountry"><DetailsCountry /></div>

        <div className="countrydata"><CountryData /></div>

      </Suspense>

    </div>
  );
};
// const Profilpost = () => {
//   const post = resource.post.read();

//   return (
//     <ul>
//       <li>Latest post</li>

//       {post.map((post) => (
//         <li key={post.id}> {post.title} </li>

//       ))}
//     </ul>
//   );
// };

export default App;
