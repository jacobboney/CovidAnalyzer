import React, {useState
} from "react";
import { MultiSelect } from "react-multi-select-component";
import GlobalCasesVsHDIvsHW from "../components/charts/global distributions/globalCasesVsHDIvsHW";
import GlobalCLH from "../components/charts/global distributions/globalCLH";
import GlobalRDTC from "../components/charts/global distributions/globalRDTC";
import GlobalCOD from "../components/charts/global distributions/globalCOD";
import GlobalBOS from "../components/charts/global distributions/globalBOS";


function GlobalDistribution(){
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
            <div className="pageContent">
                <div className="parametersContainer border-0">
                    <p className="parameterItem" id="casesOverTime" type="button" class="btn btn-primary" onClick={handleClick}>Cases VS HDI VS Hand-Washing</p>

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

export default GlobalDistribution;