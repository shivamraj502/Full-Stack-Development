/**
⚡ Week 16 (Days 108–114): Full CRUD + Deployment
Day 108 – Project Planning

Task:
Decide project structure
👉 Example:
Notes App / Task Manager
 */

                // Task Manager

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

connectDB();
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Manager Backend Running");
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "User Registered"
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = jwt.sign(
        { id: user._id },
        "secretkey"
    );

    res.json({
        message: "Login successful",
        token
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});