/**
⚡ Week 15 (Days 101–107): Node.js + Database Integration
Day 101 – Connect Node + MongoDB

Task:
Setup connection
👉 Build:
Simple API
 */


const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    branch: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

// Simple API
app.get("/", (req, res) => {
    res.send("Node + MongoDB Connected");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});