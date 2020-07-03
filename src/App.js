import React, { Suspense } from "react";
import GlobalData from "./Components/GlobalData";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<h1>Laoding User ... </h1>}>
        <div className="nav">Navbar</div>
        <div className="main">MAP</div>
        <div className="flag">Country Flags</div>
        <div className="globaldata"> <GlobalData /> </div>
        <div className="deaths">Total Deaths </div>
        <div className="content1">Chart 1</div>
        <div className="content2">Chart 2</div>
        <div className="footer">Footer</div>
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
