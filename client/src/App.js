import './App.css';
import React from "react";
import Plot from 'react-plotly.js';



function App() {
    const data=[
        {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
    ]
    return (
        <div className = "App">
           <h1>This will be the home/landing page</h1>
            <div className="d-flex justify-content-center">
                <Plot
                    data={data}
                    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                />
            </div>
        </div>
    );
}

export default App;
