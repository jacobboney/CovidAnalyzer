import './App.css';
import React, { useEffect, useState} from "react";
import Barr from "./components/testBar";





function App() {

    const[backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/test").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    let cData = {
        x: [],
        y: []
    }
    backendData.forEach(function(val){
        cData.x.push(val["NAME"]);
        cData.x.push(val["AREA"]);
    })


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
