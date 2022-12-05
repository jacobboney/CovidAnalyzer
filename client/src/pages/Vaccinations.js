import React, {useState
} from "react";
import Plot from 'react-plotly.js';
import VaccMonthly from "../components/charts/vaccinations/vaccMonthly";
import VaccPerCapita from "../components/charts/vaccinations/vaccPerCapita";
import VaccVsCases from "../components/charts/vaccinations/vaccVsCases";
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
                return <VaccMonthly/>
                break;

            case "hosp":
                return <VaccPerCapita/>
                break;

            case "deathsOT":
                return <VaccVsCases/>
                break;

            case "causes":
                return <VaccCOD/>
                break;

            case "season":
                return <VaccBOS/>
                break;

            case "":
                return <VaccMonthly/>
            default:
                return <VaccMonthly/>
                break;
        }
    }

    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Vaccinations</h1>
            <div className="pageContent">
                <div className="parametersContainer border-0">
                    <p className="parameterItem" id="casesOverTime" type="button" className="btn btn-primary" onClick={handleClick}>Monthly Vaccinations</p>
                    <p className="parameterItem" id="hosp" type="button" className="btn btn-primary" onClick={handleClick}>Vaccinations Per Capita</p>
                    <p className="parameterItem" id="deathsOT" type="button" class="btn btn-primary" onClick={handleClick}>Vaccinations Vs Deaths</p>
                    <p className="parameterItem" id="causes" type="button" class="btn btn-primary" onClick={handleClick}>leading causes of deaths(per age) over time</p>
                    <p className="parameterItem" id="season" type="button" class="btn btn-primary" onClick={handleClick}># cases based on the season</p>
                </div>

                <div className="visContainer border-0">
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