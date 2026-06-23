/** 
Day 99 – Mongoose Intro

Task:
Install mongoose
👉 Build:
Connect Node + MongoDB
*/


const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Mongoose Connected");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


/*
Q: If I close MongoDB Compass, what happens?

A:
1. If MongoDB server is still running → Node app works normally.
   Output:
   Server running on port 3000
   MongoDB Connected

2. If MongoDB server stops → Connection fails.
   Output:
   ECONNREFUSED 127.0.0.1:27017

Note:
MongoDB Compass is just a GUI tool.
Closing Compass usually does NOT stop MongoDB server.
*/