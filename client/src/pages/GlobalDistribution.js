import React, {useState
} from "react";

function GlobalDistribution(){

    const [selectedParam, setSelectedParam] = useState("")
    function handleClick(e){
        setSelectedParam(e.target.id)
    }

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return "chart Cases over Time"

            case "hosp":
                return "%cases hosp"

            case "deathsOT":
                return "deaths"

            case "causes":
                return "causes"
            
            case "season":
                return "season"

            default:
                return
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
                    {showVis()}
                </div>
            </div>
        </div>
    )

};

export default GlobalDistribution;