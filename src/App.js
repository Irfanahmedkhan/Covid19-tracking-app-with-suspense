import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData";
import SimpleMap from "./Components/Googlemap";
import "./App.css";
import CountryData from "./Components/CountryData";
import News from "./Components/News";
import DetailsData from "./Components/Details";

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<h1>Laoding User ... </h1>}>

        <div className="nav">Navbar</div>

        <div className="main"><SimpleMap />       </div>

        <div className="news"> <News />  </div>

        <div className="globaldata"> <GlobalData /> </div>

        <div className="countrydata"> </div>

        <div className="content1">Chart 1</div>

        <div className="detailsdata"><DetailsData /></div>

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
