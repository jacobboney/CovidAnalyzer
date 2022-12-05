import React, {useState
} from "react";
import CasesMonthly from "../components/charts/cases/casesMonthly";
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
                return <CasesMonthly/>
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
                return <CasesMonthly/>
            default:
                return <CasesMonthly/>
                break;
            }
    }
    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Cases</h1>
            <div className="pageContent">
                <div className="parametersContainer border-0">
                    <p className="parameterItem" id="casesOverTime" type="button" class="btn btn-primary" onClick={handleClick}>Monthly Cases Over Time</p>
                    <p className="parameterItem" id="hosp" type="button" class="btn btn-primary" onClick={handleClick}>% of cases leading to hosp</p>
                    <p className="parameterItem" id="deathsOT" type="button" class="btn btn-primary" onClick={handleClick}>ratio of deaths to cases over time</p>
                    <p className="parameterItem" id="causes" type="button" class="btn btn-primary" onClick={handleClick}>leading causes of deaths(per age) over time</p>
                    <p className="parameterItem" id="season" type="button" class="btn btn-primary" onClick={handleClick}># cases based on the season</p>
                </div>

                <div className="visContainer border-0">
                    {selectedParam && (
                        <div className="d-flex justify-content-center w-100 ">
                            {showVis()}
                    </div>

                    )}
                
                </div>
            </div>
        </div>
    )

};

export default Cases;