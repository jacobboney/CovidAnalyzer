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
    console.log(data);
    res.json(data);
})

////APIs for Cases Page
//Monthly Cases Over Time
app.get("/casesMonthly", async (req, res) => {
    let sql = `select * from(
select "Monthly_Cases", to_date(to_char("Year") || to_char("Month") || '01', 'yyyy/mm/dd') as "Date" from(
select sum(cases) as "Monthly_Cases", to_char(true_date, 'MM') as "Month", to_char(true_date, 'YYYY') as "Year" from casedata
where iso_code = 'USA'
group by to_char(true_date, 'MM'), to_char(true_date, 'YYYY')
order by to_char(true_date, 'YYYY'), to_char(true_date, 'MM') asc))
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