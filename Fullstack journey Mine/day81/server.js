/**
Day 81 – JWT Authentication

Task:
Generate token
👉 Build:
Login API
 */


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

let user = {};

async function startServer() {
  // Create user with correct hashed password
  const hashedPassword = await bcrypt.hash("123456", 10);

  user = {
    email: "shivam@gmail.com",
    password: hashedPassword
  };

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check email
    if (email !== user.email) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Generate token
    const token = jwt.sign(
      { email: user.email },
      "mysecretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });
  });

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
    console.log("Email: shivam@gmail.com");
    console.log("Password: 123456");
  });
}

startServer();