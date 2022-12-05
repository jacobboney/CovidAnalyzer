import React, {useState
} from "react";
import GlobalCasesVsHDIvsHW from "../components/charts/global distributions/globalCasesVsHDIvsHW";
import GlobalCLH from "../components/charts/global distributions/globalCLH";
import GlobalRDTC from "../components/charts/global distributions/globalRDTC";
import GlobalCOD from "../components/charts/global distributions/globalCOD";
import GlobalBOS from "../components/charts/global distributions/globalBOS";


function GlobalDistribution(){
    const [selectedParam, setSelectedParam] = useState("")

    function handleClick(e){
        setSelectedParam(e.target.id)
    }

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return <GlobalCasesVsHDIvsHW/>
                break;

            case "hosp":
                return <GlobalCLH/>
                break;

            case "deathsOT":
                return <GlobalRDTC/>
                break;

            case "causes":
                return <GlobalCOD/>
                break;

            case "season":
                return <GlobalBOS/>
                break;

            case "":
                return <GlobalCasesVsHDIvsHW/>
            default:
                return <GlobalCasesVsHDIvsHW/>
                break;
        }
    }

    return(
        <div className="pageContainer">
            <h1 className="text-center my-4">Global Distribution</h1>
            <div className="pageContent">
                <div className="parametersContainer border-0">
                    <p className="parameterItem" id="casesOverTime" type="button" class="btn btn-primary" onClick={handleClick}>Cases VS HDI VS Hand-Washing</p>
                    <p className="parameterItem" id="hosp" type="button" class="btn btn-primary" onClick={handleClick}>% of cases leading to hosp</p>
                    <p className="parameterItem" id="deathsOT" type="button" class="btn btn-primary" onClick={handleClick}>ratio of deaths to cases over time</p>
                    <p className="parameterItem" id="causes" type="button" class="btn btn-primary" onClick={handleClick}>leading causes of deaths(per age) over time</p>
                    <p className="parameterItem" id="season" type="button" class="btn btn-primary" onClick={handleClick}># cases based on the season</p>
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

export default GlobalDistribution;