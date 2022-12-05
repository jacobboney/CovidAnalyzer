// server/index.js

//const express = require("express");
import express from 'express';
import query from "./query.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

/*
app.get("/json", (req, res) => {
    //const data = query(`select * from CONTINENT`);
    //res.json(data);
    res.json(query(`select * from CONTINENT`));
})
*/

app.get("/test", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    //console.log(data);
    res.json(data);
})

////APIs for Cases Page
//Monthly Cases Over Time
app.get("/casesMonthly", async (req, res) => {
    let sql = `select * from(
select "Monthly_Cases", to_date(to_char("Year") || to_char("Month") || '01', 'yyyy/mm/dd') as "Date", "Code" from(
select sum(cases) as "Monthly_Cases", to_char(true_date, 'MM') as "Month", to_char(true_date, 'YYYY') as "Year", casedata.iso_code as "Code" from casedata
where iso_code = 'USA'
group by to_char(true_date, 'MM'), to_char(true_date, 'YYYY'), casedata.iso_code
order by to_char(true_date, 'YYYY'), to_char(true_date, 'MM') asc))
`;
    let data = await query(sql);
    //console.log(data);
    res.json(data);
})

app.get("/casesToDeathPercent", async (req, res) => {
    let sql = `select ("Monthly_Deaths" / "Monthly_Cases") as "Percentage", t1."Date", t1."Code" from(

(select * from(
select "Monthly_Deaths", to_date(to_char("Year") || to_char("Month") || '01', 'yyyy/mm/dd') as "Date", "Code" from(
select sum(deaths) as "Monthly_Deaths", to_char(true_date, 'MM') as "Month", to_char(true_date, 'YYYY') as "Year", casedata.iso_code as "Code" from casedata
where iso_code = 'USA'
group by to_char(true_date, 'MM'), to_char(true_date, 'YYYY'), casedata.iso_code
order by to_char(true_date, 'YYYY'), to_char(true_date, 'MM') asc))) t1

inner join(select * from(
select "Monthly_Cases", to_date(to_char("Year") || to_char("Month") || '01', 'yyyy/mm/dd') as "Date", "Code" from(
select sum(cases) as "Monthly_Cases", to_char(true_date, 'MM') as "Month", to_char(true_date, 'YYYY') as "Year", casedata.iso_code as "Code" from casedata
where iso_code = 'USA'
group by to_char(true_date, 'MM'), to_char(true_date, 'YYYY'), casedata.iso_code
order by to_char(true_date, 'YYYY'), to_char(true_date, 'MM') asc))) t2

on t1."Date"=t2."Date")
`;
    let data = await query(sql);
    //console.log(data);
    res.json(data);
})

app.get("/casesVsHDI", async (req, res) => {
    let sql = `select "Country", round(("TotalCases" / "Population"), 5) as "PerCapita", "HDI" from(
(select casedata.iso_code as "Country", sum(casedata.cases) as "TotalCases", population.population as "Population" from casedata
join population on casedata.iso_code=population.iso_code
group by casedata.iso_code, population.population)
join development_Index on "Country"=development_index.iso_code)
where "Country"!='NAM'
`;
    let data = await query(sql);
    //console.log(data);
    res.json(data);
})




app.get("/vaccPerCapita", async (req, res) => {
    let sql = `select Country, round((totalvax / population), 5) as perCapita from(
select daily_vax.iso_code as Country, sum(daily_vax.daily_vaccinations) as TotalVax, population.population as Population from daily_vax
join population on daily_vax.iso_code=population.iso_code
group by daily_vax.iso_code, population.population)
where country != 'NAM'
order by perCapita asc
`;
    let data = await query(sql);
    //console.log(data);
    res.json(data);
})

















/* Older APIs, not needed but kept for reference

//Cases Leading to Hosp
app.get("/casesCLH", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Ratio of Deaths to Cases
app.get("/casesRDTC", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Leading Causes of Death
app.get("/casesCOD", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Cases Based on Season
app.get("/casesBOS", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})

////APIs for Vaccinations Page
//Cases Over Time
app.get("/vaccCOT", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Cases Leading to Hosp
app.get("/vaccCLH", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Ratio of Deaths to Cases
app.get("/vaccRDTC", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Leading Causes of Death
app.get("/vaccCOD", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Cases Based on Season
app.get("/vaccBOS", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})

////APIs for Global Distributions Page
//Cases Over Time
app.get("/globalCOT", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Cases Leading to Hosp
app.get("/globalCLH", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Ratio of Deaths to Cases
app.get("/globalRDTC", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Leading Causes of Death
app.get("/globalCOD", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
//Cases Based on Season
app.get("/globalBOS", async (req, res) => {
    let sql = `select * from CONTINENT`;
    let data = await query(sql);
    console.log(data);
    res.json(data);
})
 */


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});