import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <App/>,document.getElementById("root")
);


// <------------------App.js------------------------------>

import React from "react";
import { useState } from "react";


const App = ()=>{
    let purple="#8e44ad";

    const [bg,setbg] = useState(purple);
    const [name,setname] = useState('click me');

    const bgChange = ()=>{
        let newBg="#34495e";
        setbg(newBg);
        let newName='ouch!! 😠';
        setname(newName);
    }
    const Initial = () =>{
        setbg(purple);
        setname('ayoo!!');
    }

    return(
        <>
        <div style={{backgroundColor:bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={Initial}>{name}</button>
        </div>
        </>
    );
}

export default App;