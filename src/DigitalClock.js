import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./GetTime.css";

ReactDOM.render(
  <App/>,document.getElementById("root")
);

// <-------------------App.js--------------------->

import React from "react";
import { useState } from "react";
let currTime = new Date().toLocaleTimeString();

const App = () => {
  const [Time, setTime] = useState(currTime);
  const updateTime = ()=>{
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime);

  }
  setInterval(updateTime, 1000);

  return (
    <>
      <div className="div">
        <h1>{Time}</h1>
      </div>
    </>
  );
};

export default App;
