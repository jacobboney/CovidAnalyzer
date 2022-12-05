import React, {useState
} from "react";
import { MultiSelect } from "react-multi-select-component";
import CasesMonthly from "../components/charts/cases/casesMonthly";
import CasesVsHDI from "../components/charts/cases/casesVsHDI";
import CasesToDeathPercent from "../components/charts/cases/casesToDeathPercent";
import CasesCOD from "../components/charts/cases/casesCOD";
import CasesBOS from "../components/charts/cases/casesBOS";

function Cases(){
    const [selectedParam, setSelectedParam] = useState("")
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "United States 🇺🇸", value: "USA" },
        { label: "Canada 🇨🇦", value: "CAN" },
        { label: "France 🇫🇷", value: "FRA" },
        { label: "Japan 🇯🇵", value: "JPN" },
        { label: "China 🇨🇳", value: "CHN" },
        { label: "Iran 🇮🇷", value: "IRN" }
    ];

    function handleClick(e){
        setSelectedParam(e.target.id)
    }

    function showVis(){
        switch(selectedParam){
            case "casesOverTime":
                return <CasesMonthly/>
                break;

            case "hosp":
                return <CasesVsHDI/>
                break;

            case "deathsOT":
                return <CasesToDeathPercent/>
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
            <h1 className="text-center mt-4">Cases</h1>
            <div className="container-sm ">
                <h3>Countries</h3>
                {/* Remove below line to stop showing selected values */}
                <pre>{JSON.stringify(selected)}</pre>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            </div>
            <div className="pageContent mt-0">


                <div className="parametersContainer border-0">
                    <p className="parameterItem" id="casesOverTime" type="button" class="btn btn-primary" onClick={handleClick}>Monthly Cases</p>
                    <p className="parameterItem" id="deathsOT" type="button" className="btn btn-primary" onClick={handleClick}>Percentage of Cases Resulting in Death</p>
                    <p className="parameterItem" id="hosp" type="button" class="btn btn-primary" onClick={handleClick}>Cases Per Capita Vs HDI</p>
                    <p className="parameterItem" id="season" type="button" className="btn btn-primary" onClick={handleClick}>Total Cases Seasonally</p>
                    <p className="parameterItem" id="causes" type="button" class="btn btn-primary" onClick={handleClick}>leading causes of deaths(per age) over time</p>
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