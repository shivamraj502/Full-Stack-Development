/**
Day 106 – Validation

Task:
Add validations (required, min length)
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// User Schema with Validation
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model("User", userSchema);

// Create User API
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.json({
            message: "User Added Successfully"
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});