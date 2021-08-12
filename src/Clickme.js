import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App/>,document.getElementById("root")
);

// <<<<<<<<<<<==========================App.js=====------------------------------>>>>>>

import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

//   const incNum = () => {
//     setcount(count+1);
//   };
  return (
    <>
      <div className="div">
        <h1>{count}</h1>
        <button className="btn" onClick={()=>setcount(count+1)}>
          Click Me ➕
        </button>
      </div>
    </>
  );
};

export default App;
