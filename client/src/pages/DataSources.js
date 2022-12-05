import React from "react";
import covidImage2 from "../components/covidImage2.png";

function DataSources() {
    return (
        <div style={{backgroundImage:`url(${covidImage2})`, backgroundSize:"cover", width:'100vw', height:'100vh', position:"fixed"}}>
            <div className = "d-flex justify-content-center">
                <h1 className="m-5 p-4 bg-primary text-light rounded">Data Sources</h1>
            </div>

            <div className="d-flex justify-content-center ">
            <ul className="bg-primary text-light rounded px-5 py-2">
                <li className="my-3 ">
                    COVID Vaccinations: <a href="https://ourworldindata.org/covid-vaccinations" target="_blank" rel="noreferrer" className="link-info">OurWorld in Data</a>
                </li>

                <li className="my-3"> 
                    COVID Vaccinations in US: <a href="https://data.cdc.gov/Vaccinations/COVID-19-Vaccinations-in-the-United-States-Jurisdi/unsk-b7fc" target="_blank" rel="noreferrer" className="link-info">CDC</a>
                </li>

                <li className="my-3">
                    Provisional COVID-19 Deaths by Sex and Age: <a href="https://data.cdc.gov/NCHS/Provisional-COVID-19-Deaths-by-Sex-and-Age/9bhg-hcku" target="_blank" rel="noreferrer" className="link-info">CDC</a>
                </li>

                <li className="my-3">
                    Conditions Contributing to COVID-19 Deaths, by State and Age, Provisional 2020-2022: <a href="https://data.cdc.gov/NCHS/Conditions-Contributing-to-COVID-19-Deaths-by-Stat/hk9y-quqm" target="_blank" rel="noreferrer" className="link-info">CDC</a>
                </li>

                <li className="my-3"> 
                    Provisional COVID-19 Deaths: Distribution of Deaths by Race and Hispanic Origin: <a href="https://data.cdc.gov/NCHS/Provisional-COVID-19-Deaths-Distribution-of-Deaths/pj7m-y5uh" target="_blank" rel="noreferrer" className="link-info">CDC</a>
                </li>
            </ul>
            </div>
        </div>
    )

};

export default DataSources;