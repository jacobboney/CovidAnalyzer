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

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});