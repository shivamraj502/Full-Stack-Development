/**
⚡ Week 12 (Days 80–86): Authentication Basics
Day 80 – Password Hashing

Topic: bcrypt
👉 Build:
Hash password before storing
 */


const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

let users = [];

// Register User
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email,
      password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({
      message: "User Registered",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Error"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});