import React, {useState
} from "react";
import Plot from 'react-plotly.js';

function GlobalDistribution(){

    const [selectedParam, setSelectedParam] = useState("")
    function handleClick(e){
        setSelectedParam(e.target.id)
    }

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

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return ([
                    {
                        x: [1, 2, 3],
                        y: [7, 1, 5],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;

            case "hosp":
                return ([
                    {
                        x: [1, 2, 3],
                        y: [7, 1, 9],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;

            case "deathsOT":
                return ([
                    {
                        x: [1, 2, 3],
                        y: [7, 8, 5],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;

            case "causes":
                return ([
                    {
                        x: [1, 2, 3],
                        y: [7, 5, 5],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;
            
            case "season":
                return ([
                    {
                        x: [1, 2, 3],
                        y: [1, 1, 5],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;

            default:
                return ([
                    {
                        x: [1, 2, 3],
                        y: [1, 1, 5],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ])
                break;
            }
    }

    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Global Distribution</h1>
            <div className="pageContent">
                <div className="parametersContainer">
                    <p className="parameterItem" id="casesOverTime" onClick={handleClick}>% of cases over time</p>
                    <p className="parameterItem" id="hosp" onClick={handleClick}>% of cases leading to hosp</p>
                    <p className="parameterItem" id="deathsOT" onClick={handleClick}>ratio of deaths to cases over time</p>
                    <p className="parameterItem" id="causes" onClick={handleClick}>leading causes of deaths(per age) over time</p>
                    <p className="parameterItem" id="season" onClick={handleClick}># cases based on the season</p>
                </div>

                <div className="visContainer">
                {selectedParam && (
                        <div className="d-flex justify-content-center w-100">
                        <Plot
                            data={showVis()}
                            layout={ {width: "90%", maxWidth: 1000, height: 400, title: 'A Fancy Plot'} }
                        />
                    </div>

                    )}
                </div>
            </div>
        </div>
    )

};

export default GlobalDistribution;