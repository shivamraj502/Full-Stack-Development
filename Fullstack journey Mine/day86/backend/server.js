/**
Day 86 – Mini Project: Auth API

Task:
Register
Login
Protected route
JWT auth
 */


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

let users = [];

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

// Register API
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(u => u.email === email);

  if (userExists) {
    return res.status(400).json({
      message: "User already exists"
    });
  }

  console.log(users);
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = {
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({
    message: "User registered successfully"
  });
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

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

// Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});