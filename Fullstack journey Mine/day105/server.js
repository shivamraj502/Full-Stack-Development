/**
Day 105 – Mongoose Schemas

Task:
Define models
👉 Build:
User model
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});


// Model
const User = mongoose.model("User", userSchema);


// API
app.get("/", (req, res) => {
    res.send("User Model Created");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});