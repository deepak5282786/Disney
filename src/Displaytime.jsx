import React from "react";

const name="Deepak Yadav";
const currdate= new Date().toDateString();
const currtime= new Date().toTimeString();

const display= ()=>{
    return(
        <>
        <h1>{name}</h1>
        <p>{currdate}</p>
        <p>{currtime}</p>
        </>
    );
}

export default display;