import React, {useState
} from "react";
import Plot from 'react-plotly.js';
import VaccCOT from "../components/charts/vaccinations/vaccCOT";
import VaccCLH from "../components/charts/vaccinations/vaccCLH";
import VaccRDTC from "../components/charts/vaccinations/vaccRDTC";
import VaccCOD from "../components/charts/vaccinations/vaccCOD";
import VaccBOS from "../components/charts/vaccinations/vaccBOS";


function Vaccinations(){

    const [selectedParam, setSelectedParam] = useState("")

    function handleClick(e){
        setSelectedParam(e.target.id)
    }

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return <VaccCOT/>
                break;

            case "hosp":
                return <VaccCLH/>
                break;

            case "deathsOT":
                return <VaccRDTC/>
                break;

            case "causes":
                return <VaccCOD/>
                break;

            case "season":
                return <VaccBOS/>
                break;

            case "":
                return <VaccCOT/>
            default:
                return <VaccCOT/>
                break;
        }
    }

    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Vaccinations</h1>
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
                        {showVis()}
                    </div>

                    )}
                </div>
            </div>
        </div>
    )

};

export default Vaccinations;