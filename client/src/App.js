import './App.css';
import React, { useEffect, useState} from "react";
import Barr from "./components/charts/testBar";





function App() {

    return (

        <div className = "App">
           <h1>This will be the home/landing page</h1>

            <div className="d-flex justify-content-center">

                <Barr/>


            </div>
        </div>
    );
}

export default App;