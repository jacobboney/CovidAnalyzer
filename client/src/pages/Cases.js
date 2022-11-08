import React from "react";

function Cases(){
    return(
        <div>
            <h1>Cases Page Test</h1>
            <div className="pageContent">
                <div className="parametersContainer">
                    <p className="parameterItem">% of cases over time</p>
                    <p className="parameterItem">% of cases leading to hosp</p>
                    <p className="parameterItem">ratio of deaths to cases over time</p>
                    <p className="parameterItem">leading causes of deaths(per age) over time</p>
                    <p className="parameterItem"># cases based on the season</p>
                </div>

                <div className="visContainer">

                </div>
            </div>
        </div>
    )

};

export default Cases;