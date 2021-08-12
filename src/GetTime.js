import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App/>,document.getElementById("root")
);


// <---------------------App.js------------------------------>
import React from "react";
import { useState } from "react";
let currTime= new Date().toLocaleTimeString();



const App = () => {
  const [Time, setTime] = useState(currTime);

return (
    <>
      <div className="div">
        <h1>{Time}</h1>
        <button className="btn" onClick={()=>{
          let newTime= new Date().toLocaleTimeString();
          setTime(newTime)}}>
          Get Time
        </button>
      </div>
    </>
  );
};

export default App;
