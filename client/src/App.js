import './App.css';
import React, { useEffect, useState} from "react";
import Barr from "./components/charts/testBar";
import covidImage2 from "./components/covidImage2.png"




function App() {

    return (

        <div className = "App"  style={{backgroundImage:`url(${covidImage2})`, backgroundSize:"cover", width:'100vw', height:'100vh'}}>
            <div className = "d-flex justify-content-center" >
                <h1 className = "m-5 p-4 bg-primary text-light rounded">Welcome to the COVID-19 Analyzer</h1>
            </div>




            <div className="d-flex justify-content-center">

            </div>
        </div>
    );
}

export default App;