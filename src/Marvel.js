// <----------------------Netflix Web App ----------------->

 import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";


ReactDOM.render(
  <>
    <h1>Marvel Top 5 Movies </h1>
    {Sdata.map((val)=>{
        return(
                    <Card imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}/>
                );
    })}
  </>,document.getElementById("root")
);
