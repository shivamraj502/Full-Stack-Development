/**
⚡ Week 16 (Days 108–114): Full CRUD + Deployment
Day 108 – Project Planning

Task:
Decide project structure
👉 Example:
Notes App / Task Manager
 */

                // Task Manager

const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Task Manager Backend Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});