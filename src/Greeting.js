// <----------- GREETING---------------------->>>>>>>>>>
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
let currDate = new Date(2020,2,5,2);
currDate=currDate.getHours();
let greeting="";
const cssStyle={};
if (currDate >= 1 && currDate <= 12) {
    greeting="Good Morning";
    cssStyle.color="green";
  } else if (currDate > 12 && currDate <= 17) {
    greeting="Good Afternoon";
    cssStyle.color="orange";

  } else if (currDate > 17 && currDate <= 20) {
    greeting="Good Evening";
    cssStyle.color="blue";

  } else {
    greeting="Good Night";
    cssStyle.color="red";

  }
ReactDOM.render(
    <>
    <div>
        <h1>Hello Awadhesh Sir,<span style={cssStyle}>{greeting}</span> </h1>
        </div>
    </>,document.getElementById("root"));