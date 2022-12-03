import React, {useState
} from "react";
import CasesCOT from "../components/charts/cases/casesCOT";
import CasesCLH from "../components/charts/cases/casesCLH";
import CasesRDTC from "../components/charts/cases/casesRDTC";
import CasesCOD from "../components/charts/cases/casesCOD";
import CasesBOS from "../components/charts/cases/casesBOS";

function Cases(){
    const [selectedParam, setSelectedParam] = useState("")

    function handleClick(e){
        setSelectedParam(e.target.id)
    }

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return <CasesCOT/>
                break;

            case "hosp":
                return <CasesCLH/>
                break;

            case "deathsOT":
                return <CasesRDTC/>
                break;

            case "causes":
                return <CasesCOD/>
                break;
            
            case "season":
                return <CasesBOS/>
                break;

            case "":
                return <CasesCOT/>
            default:
                return <CasesCOT/>
                break;
            }
    }
    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Cases</h1>
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

export default Cases;